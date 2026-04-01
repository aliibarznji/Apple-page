async (page) => {
  return await page.evaluate(() => {
    const wrapper = document.querySelector('main > div.bg-white.space-y-10');
    const accessories = document.querySelector('[aria-label="Best selling accessories"]');
    const bestSellers = document.querySelector('[aria-label="Best sellers"]');
    return {
      wrapperClass: wrapper?.className,
      wrapperStyle: wrapper ? getComputedStyle(wrapper).cssText : null,
      accessoriesMarginBottom: accessories ? getComputedStyle(accessories).marginBottom : null,
      bestMarginTop: bestSellers ? getComputedStyle(bestSellers).marginTop : null,
      childCount: wrapper?.children.length,
      childClasses: wrapper ? Array.from(wrapper.children).map((el) => ({ tag: el.tagName, cls: el.className, aria: el.getAttribute('aria-label'), marginTop: getComputedStyle(el).marginTop, marginBottom: getComputedStyle(el).marginBottom })) : []
    };
  });
}
