async (page) => {
  return await page.evaluate(() => {
    const wrapper = document.querySelector('main > div.content-section-stack');
    const accessories = document.querySelector('[aria-label="Best selling accessories"]');
    const bestSellers = document.querySelector('[aria-label="Best sellers"]');
    const accessoriesGrid = accessories?.querySelector('div > div:last-child');
    const bestHeading = bestSellers?.querySelector('h2');
    const accessoriesRect = accessories?.getBoundingClientRect();
    const gridRect = accessoriesGrid?.getBoundingClientRect();
    const bestRect = bestSellers?.getBoundingClientRect();
    const headingRect = bestHeading?.getBoundingClientRect();
    return {
      wrapperGap: wrapper ? getComputedStyle(wrapper).gap : null,
      gapBetweenSections: bestRect?.top - accessoriesRect?.bottom,
      gapBetweenContentAndHeading: headingRect?.top - gridRect?.bottom,
      bestSectionPaddingTop: getComputedStyle(bestSellers).paddingTop,
      accessoriesPaddingBottom: getComputedStyle(accessories).paddingBottom
    };
  });
}
