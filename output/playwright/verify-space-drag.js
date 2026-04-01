async (page) => {
  const scroller = page.locator('[aria-label="New arrivals"] .new-arrivals-scroll').first();
  await scroller.scrollIntoViewIfNeeded();

  const box = await scroller.boundingBox();
  if (!box) {
    throw new Error('Scroller was not found for drag verification.');
  }

  const before = await scroller.evaluate((node) => node.scrollLeft);
  await page.mouse.move(box.x + box.width - 12, box.y + box.height / 2);
  await page.mouse.down();
  await page.mouse.move(box.x + box.width - 180, box.y + box.height / 2, { steps: 12 });
  await page.mouse.up();
  const after = await scroller.evaluate((node) => node.scrollLeft);

  return { before, after, delta: after - before, url: page.url() };
}
