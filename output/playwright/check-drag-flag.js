async (page) => {
  const scroller = page.locator('[aria-label="New arrivals"] .new-arrivals-scroll').first();
  const firstCard = page.locator('[aria-label="New arrivals"] article a').first();

  await page.goto('http://127.0.0.1:3000');
  await scroller.scrollIntoViewIfNeeded();

  const box = await firstCard.boundingBox();
  if (!box) {
    throw new Error('First product card was not found.');
  }

  await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
  await page.mouse.down();
  await page.waitForTimeout(50);
  const during = await scroller.getAttribute('data-dragging');

  await page.mouse.move(box.x + 18, box.y + box.height / 2, { steps: 18 });
  await page.mouse.up();
  await page.waitForTimeout(50);

  const afterFlag = await scroller.getAttribute('data-dragging');
  const afterScroll = await scroller.evaluate((node) => node.scrollLeft);

  return {
    during,
    afterFlag,
    afterScroll,
    url: page.url(),
  };
}
