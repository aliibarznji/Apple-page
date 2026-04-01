async (page) => {
  return await page.evaluate(() => {
    const wrapper = document.querySelector('main > div.flex.flex-col.gap-10');
    const accessoriesGrid = document.querySelector('[aria-label="Best selling accessories"] div > div:last-child');
    const categoriesGrid = document.querySelector('[aria-label="Shop categories"] > div');
    const featuredGrid = document.querySelector('[aria-label="Featured Apple widgets"] div.grid');
    return {
      wrapperDisplay: wrapper ? getComputedStyle(wrapper).display : null,
      wrapperGap: wrapper ? getComputedStyle(wrapper).gap : null,
      wrapperRowGap: wrapper ? getComputedStyle(wrapper).rowGap : null,
      accessoriesGridDisplay: accessoriesGrid ? getComputedStyle(accessoriesGrid).display : null,
      accessoriesGridGap: accessoriesGrid ? getComputedStyle(accessoriesGrid).gap : null,
      accessoriesGridRowGap: accessoriesGrid ? getComputedStyle(accessoriesGrid).rowGap : null,
      categoriesGridGap: categoriesGrid ? getComputedStyle(categoriesGrid).gap : null,
      featuredGridGap: featuredGrid ? getComputedStyle(featuredGrid).gap : null
    };
  });
}
