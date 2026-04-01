async (page) => {
  const scroller = page.locator('[aria-label="New arrivals"] .new-arrivals-scroll').first();
  const firstCard = page.locator('[aria-label="New arrivals"] article a').first();

  await scroller.scrollIntoViewIfNeeded();

  const before = await scroller.evaluate((node) => node.scrollLeft);
  const box = await firstCard.boundingBox();
  if (!box) {
    throw new Error('First product card was not found for drag verification.');
  }

  await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
  await page.mouse.down();
  await page.mouse.move(box.x + 18, box.y + box.height / 2, { steps: 18 });
  await page.mouse.up();

  const after = await scroller.evaluate((node) => node.scrollLeft);
  return { before, after, delta: after - before, url: page.url() };
}
