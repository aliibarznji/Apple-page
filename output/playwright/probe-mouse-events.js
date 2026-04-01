async (page) => {
  const scroller = page.locator('[aria-label="New arrivals"] .new-arrivals-scroll').first();
  const firstCard = page.locator('[aria-label="New arrivals"] article a').first();

  await scroller.scrollIntoViewIfNeeded();

  await page.evaluate(() => {
    window.__dragProbe = [];
    const scrollerEl = document.querySelector('[aria-label="New arrivals"] .new-arrivals-scroll');
    const record = (label, event) => {
      window.__dragProbe.push({
        label,
        button: event.button,
        buttons: event.buttons,
        clientX: event.clientX,
        clientY: event.clientY,
        target: event.target?.tagName,
      });
    };

    window.addEventListener('mousemove', (event) => record('window-mousemove', event), { once: false });
    window.addEventListener('mouseup', (event) => record('window-mouseup', event), { once: false });
    document.addEventListener('mousedown', (event) => record('document-mousedown', event), { once: false, capture: true });
    scrollerEl?.addEventListener('mousedown', (event) => record('scroller-mousedown', event), { once: false });
  });

  const box = await firstCard.boundingBox();
  if (!box) {
    throw new Error('First product card was not found for drag verification.');
  }

  await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
  await page.mouse.down();
  await page.mouse.move(box.x + 18, box.y + box.height / 2, { steps: 6 });
  await page.mouse.up();

  return {
    box,
    events: await page.evaluate(() => window.__dragProbe)
  };
}
