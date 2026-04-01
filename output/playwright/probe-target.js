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
        target: event.target?.tagName,
      });
    };

    document.addEventListener('mousedown', (event) => record('document-mousedown', event), { once: true, capture: true });
    scrollerEl?.addEventListener('mousedown', (event) => record('scroller-mousedown', event), { once: true });
  });

  const box = await firstCard.boundingBox();
  if (!box) {
    throw new Error('First product card was not found.');
  }

  await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
  await page.mouse.down();
  await page.mouse.up();

  return await page.evaluate(() => window.__dragProbe);
}
