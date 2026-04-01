async (page) => {
  const scroller = page.locator('[aria-label="New arrivals"] .new-arrivals-scroll').first();
  return await scroller.evaluate((node) => ({
    scrollLeft: node.scrollLeft,
    scrollWidth: node.scrollWidth,
    clientWidth: node.clientWidth,
    overflow: getComputedStyle(node).overflowX,
    pointerEvents: getComputedStyle(node).pointerEvents,
    touchAction: getComputedStyle(node).touchAction
  }));
}
