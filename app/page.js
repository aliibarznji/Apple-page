import ProductsFromApi from "./components/catalog/products-from-api";
import HomeHeader from "./components/home/home-header";
import MobileBottomNav from "./components/home/mobile-bottom-nav";
import {
  AccessoryShowcaseCard,
  FeaturedPromoTile,
  HeroSection,
  MarketingCategory,
  WhyElectroMallSection,
} from "./components/home/home-sections";
import {
  bestSellingAccessories,
  featuredPromoTiles,
  marketingCategories,
  secondaryLinks,
  whyElectroMallFeatures,
} from "./lib/home-page-data";

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white pb-[86px] text-[#283241] sm:pb-0">
      <HomeHeader secondaryLinks={secondaryLinks} />

      <HeroSection
        ariaLabel="iPhone hero"
        title="iPhone"
        subtitle="Meet the latest iPhone lineup."
        primaryAction="Learn more"
        secondaryAction="Shop iPhone"
        imageSrc="/heroes/iphone-17-pro.png"
        imageAlt="iPhone 17 Pro"
        imageWidth={666}
        imageHeight={375}
        imageMaxWidth="max-w-[1240px]"
      />

      <HeroSection
        ariaLabel="MacBook Pro hero"
        title="MacBook Pro"
        subtitle="The ultimate pro computer."
        primaryAction="Learn more"
        secondaryAction="Shop MacBook Pro"
        imageSrc="/heroes/macbook-hero-dark.png"
        imageAlt="MacBook Pro models"
        imageWidth={1365}
        imageHeight={768}
        imageMaxWidth="max-w-[1240px]"
        dark
        wideTitle
      />

      <div className="content-section-stack bg-white">
        <section
          className="bg-white px-3 pb-10 pt-6 sm:px-3 sm:pb-12 sm:pt-8 md:px-[14px] lg:px-4 lg:pb-[58px] lg:pt-[38px]"
          aria-label="Shop categories"
        >
          <div className="mx-auto grid w-full max-w-[1060px] grid-cols-3 gap-x-3 gap-y-4 sm:grid-cols-3 sm:gap-x-4 sm:gap-y-[18px] lg:grid-cols-6 lg:gap-6">
            {marketingCategories.map((category) => (
              <MarketingCategory category={category} key={category.label} />
            ))}
          </div>
        </section>

        <ProductsFromApi
          sectionKey="newArrivals"
          title="New Arrivals"
          subtitle="Real Apple products customers are shopping for now."
          ariaLabel="New arrivals"
        />

        <section
          className="bg-white px-3 pb-[72px] pt-0 sm:px-3 sm:pb-[84px] md:px-[14px] lg:px-4 lg:pb-[96px]"
          aria-label="Featured Apple widgets"
        >
          <div className="mx-auto max-w-[1060px]">
            <div className="pb-5 sm:pb-7">
              <div>
                <p className="text-[0.72rem] font-semibold tracking-[0.16em] text-[#ff3036]">
                  EXPLORE
                </p>
                <h2 className="mt-2 text-[clamp(1.55rem,7vw,2.7rem)] font-semibold leading-[0.96] tracking-[-0.045em] text-[#1d1d1f]">
                  More from Apple.
                </h2>
              </div>
            </div>

            <div className="horizontal-scroll -mx-3 flex snap-x snap-mandatory gap-3 overflow-x-auto px-3 pb-1 md:mx-0 md:grid md:grid-cols-2 md:gap-4 md:overflow-visible md:px-0 md:pb-0 lg:gap-5">
              {featuredPromoTiles.map((tile) => (
                <div className="min-w-[84vw] snap-start md:min-w-0" key={tile.title}>
                  <FeaturedPromoTile tile={tile} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          className="bg-white px-3 pb-[84px] pt-0 sm:px-3 sm:pb-[96px] md:px-[14px] lg:px-4 lg:pb-[108px]"
          aria-label="Best selling accessories"
        >
          <div className="mx-auto max-w-[1060px]">
            <div className="mx-auto max-w-[520px] pb-5 text-center sm:pb-6">
              <p className="text-[0.72rem] font-semibold tracking-[0.16em] text-[#ff3036]">
                ACCESSORIES
              </p>
              <h2 className="mt-4 text-[clamp(1.6rem,7vw,2.8rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-[#243655] sm:mt-5">
                Best Selling <span className="text-[#ff3036]">Accessories</span>
              </h2>
            </div>

            <div className="mx-auto mt-5 grid w-full max-w-[820px] grid-cols-2 gap-x-4 gap-y-6 sm:mt-8 sm:grid-cols-3 sm:gap-x-10 sm:gap-y-8 lg:mt-10 lg:max-w-[900px] lg:gap-x-16 lg:gap-y-10">
              {bestSellingAccessories.map((accessory) => (
                <AccessoryShowcaseCard
                  key={accessory.label}
                  accessory={accessory}
                />
              ))}
            </div>
          </div>
        </section>

        <ProductsFromApi
          sectionKey="bestSellers"
          title="Best Sellers"
          subtitle="Real Apple products customers are shopping for now."
          ariaLabel="Best sellers"
        />

        <WhyElectroMallSection features={whyElectroMallFeatures} />
      </div>

      <MobileBottomNav />
    </main>
  );
}
