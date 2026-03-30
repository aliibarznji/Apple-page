import Image from "next/image";

const secondaryLinks = [
  { label: "Store" },
  { label: "Mac" },
  { label: "iPad" },
  { label: "iPhone" },
  { label: "Watch" },
  { label: "AirPods" },
  { label: "TV & Home" },
  { label: "Accessories" },
];

const marketingCategories = [
  {
    label: "iPhone",
    src: "/Marketing%20category/iphone.avif",
    alt: "iPhone category",
    width: 72,
    height: 72,
  },
  {
    label: "Apple Watch",
    src: "/Marketing%20category/apple%20watch.avif",
    alt: "Apple Watch category",
    width: 72,
    height: 72,
  },
  {
    label: "iPad",
    src: "/Marketing%20category/Ipads.avif",
    alt: "iPad category",
    width: 78,
    height: 72,
  },
  {
    label: "Mac",
    src: "/Marketing%20category/macbook.avif",
    alt: "Mac category",
    width: 84,
    height: 72,
  },
  {
    label: "TV & Home",
    src: "/Marketing%20category/home%20and%20tv.avif",
    alt: "TV and Home category",
    width: 72,
    height: 72,
  },
  {
    label: "AirPods",
    src: "/Marketing%20category/airpods.avif",
    alt: "AirPods category",
    width: 72,
    height: 72,
  },
];

const newArrivalProducts = [
  {
    name: "iPhone 17 Pro",
    price: "72,000 IQD",
    src: "/iphone-17-pro-model-unselect-gallery-1-202509-removebg-preview.png",
    alt: "iPhone 17 Pro",
    width: 666,
    height: 500,
    imageClassName: "max-w-[178px] sm:max-w-[188px]",
    panelClassName: "bg-[#f7f7f8]",
  },
  {
    name: "Apple Watch Series 10",
    price: "69,000 IQD",
    src: "/Marketing%20category/apple%20watch.avif",
    alt: "Apple Watch",
    width: 72,
    height: 72,
    imageClassName: "max-w-[92px] scale-[2.05] sm:max-w-[96px]",
    panelClassName: "bg-[#f7f7f8]",
  },
  {
    name: "AirPods Pro",
    price: "84,000 IQD",
    src: "/Marketing%20category/airpods.avif",
    alt: "AirPods Pro",
    width: 72,
    height: 72,
    imageClassName: "max-w-[94px] scale-[2.05] sm:max-w-[98px]",
    panelClassName: "bg-[#f7f7f8]",
  },
  {
    name: "iPad Air",
    price: "95,000 IQD",
    src: "/Marketing%20category/Ipads.avif",
    alt: "iPad Air",
    width: 78,
    height: 72,
    imageClassName: "max-w-[110px] scale-[2.05] sm:max-w-[116px]",
    panelClassName: "bg-[#f7f7f8]",
  },
  {
    name: "MacBook Pro",
    price: "112,000 IQD",
    src: "/Marketing%20category/macbook.avif",
    alt: "MacBook Pro",
    width: 84,
    height: 72,
    imageClassName: "max-w-[118px] scale-[2] sm:max-w-[126px]",
    panelClassName: "bg-[#f7f7f8]",
  },
];

function SearchIcon({ className = "h-[18px] w-[18px]" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <circle
        cx="11"
        cy="11"
        r="6.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M16 16L21 21"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function UserIcon({ className = "h-[18px] w-[18px]" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 12.5a4.25 4.25 0 1 0 0-8.5 4.25 4.25 0 0 0 0 8.5Z"
        fill="currentColor"
      />
      <path d="M4.75 20a7.25 7.25 0 0 1 14.5 0" fill="currentColor" />
    </svg>
  );
}

function HeartIcon({ className = "h-[18px] w-[18px]" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 20.25 4.85 13.3a4.72 4.72 0 0 1 6.68-6.67L12 7.1l.47-.47a4.72 4.72 0 0 1 6.68 6.67L12 20.25Z"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.9"
      />
    </svg>
  );
}

function BellIcon({ className = "h-[18px] w-[18px]" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 4.25a4.75 4.75 0 0 0-4.75 4.75v2.08c0 1.24-.43 2.45-1.22 3.4L4.8 16.1c-.5.6-.07 1.52.71 1.52h13c.78 0 1.21-.92.71-1.52l-1.22-1.62a5.53 5.53 0 0 1-1.22-3.4V9A4.75 4.75 0 0 0 12 4.25Z"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path
        d="M10 19.1a2.18 2.18 0 0 0 4 0"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function CartIcon({ className = "h-[18px] w-[18px]" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <circle
        cx="9"
        cy="19"
        r="1.6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle
        cx="17"
        cy="19"
        r="1.6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M3 4.75h2.4l1.65 8.3a1 1 0 0 0 .98.8h8.92a1 1 0 0 0 .97-.77l1.34-5.63H7.15"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function ChevronIcon({ className = "h-3 w-3" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="m8 10 4 4 4-4"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function FlagIcon() {
  return (
    <svg viewBox="0 0 24 24" role="presentation">
      <defs>
        <clipPath id="flag-circle">
          <circle cx="12" cy="12" r="12" />
        </clipPath>
      </defs>
      <g clipPath="url(#flag-circle)">
        <rect width="24" height="24" fill="#1f5fbf" />
        <path d="M0 0 24 24M24 0 0 24" stroke="#ffffff" strokeWidth="5" />
        <path d="M0 0 24 24M24 0 0 24" stroke="#d6252c" strokeWidth="2.3" />
        <path d="M12 0v24M0 12h24" stroke="#ffffff" strokeWidth="8" />
        <path d="M12 0v24M0 12h24" stroke="#d6252c" strokeWidth="4.2" />
      </g>
    </svg>
  );
}

function ArrowIcon({ className = "h-[13px] w-[13px]" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M6 12h12"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.9"
      />
      <path
        d="m13 7 5 5-5 5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.9"
      />
    </svg>
  );
}

function HeroSection({
  ariaLabel,
  title,
  subtitle,
  primaryAction,
  secondaryAction,
  imageSrc,
  imageAlt,
  imageWidth,
  imageHeight,
  imageMaxWidth,
  dark = false,
  wideTitle = false,
}) {
  const sectionClasses = dark ? "bg-black" : "bg-white";
  const titleClasses = dark ? "text-[#f5f5f7]" : "text-[#111216]";
  const subtitleClasses = dark ? "text-[#d2d2d7]" : "text-[#6a7383]";
  const mediaClasses = dark ? "bg-black" : "bg-white";

  return (
    <section className={`overflow-hidden pt-11 md:pt-12 lg:pt-14 ${sectionClasses}`} aria-label={ariaLabel}>
      <div className="flex w-full flex-col items-center">
        <div className={`flex min-h-[160px] flex-col items-center px-4 text-center md:min-h-[176px] lg:min-h-[188px] ${dark ? "pt-1.5" : ""}`}>
          <p className="m-0 text-[0.84rem] font-semibold tracking-[0.16em] text-[#ff3036] md:text-[0.88rem]">
            NEW
          </p>
          <h1
            className={`m-0 leading-[0.95] font-bold tracking-[-0.05em] ${wideTitle ? "text-[clamp(3rem,5.2vw,4.55rem)]" : "text-[clamp(3.15rem,5.8vw,4.95rem)]"} ${titleClasses}`}
          >
            {title}
          </h1>
          <p className={`mt-3 text-[clamp(1.02rem,1.85vw,1.6rem)] font-medium leading-[1.24] ${subtitleClasses}`}>
            {subtitle}
          </p>

          <div className="mt-5 flex w-full flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-3.5">
            <a
              className="inline-flex min-h-10 items-center justify-center gap-2.5 rounded-full bg-[#e62b28] px-5 text-[0.94rem] font-bold text-white shadow-[0_8px_18px_rgba(230,43,40,0.12)] transition duration-200 hover:-translate-y-px hover:bg-[#d82825]"
              href="#"
            >
              <span>{primaryAction}</span>
              <ArrowIcon />
            </a>

            <a
              className="inline-flex items-center gap-2.5 text-[0.95rem] font-medium text-[#ff3036] transition duration-200 hover:text-[#e62b28]"
              href="#"
            >
              <span>{secondaryAction}</span>
              <ArrowIcon />
            </a>
          </div>
        </div>

        <div className={`mt-2 flex w-full justify-center ${mediaClasses}`}>
          <Image
            className={`block h-auto w-full object-contain ${imageMaxWidth}`}
            src={imageSrc}
            alt={imageAlt}
            width={imageWidth}
            height={imageHeight}
            priority
          />
        </div>
      </div>
    </section>
  );
}

function MarketingCategory({ category }) {
  return (
    <a className="group flex flex-col items-center gap-3.5 text-center no-underline" href="#">
      <span className="flex h-[88px] w-[88px] items-center justify-center rounded-[20px] bg-[#f7f7f8] shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] transition duration-200 group-hover:-translate-y-0.5 sm:h-[92px] sm:w-[92px] lg:h-[102px] lg:w-[102px] lg:rounded-[22px]">
        <Image
          className="h-auto w-auto max-h-[72px] max-w-[84px] object-contain"
          src={category.src}
          alt={category.alt}
          width={category.width}
          height={category.height}
        />
      </span>
      <span className="text-[0.84rem] font-semibold leading-[1.2] text-[#5c6675] sm:text-[0.9rem] lg:text-[0.97rem]">
        {category.label}
      </span>
    </a>
  );
}

function NewArrivalCard({ product }) {
  return (
    <article className="min-w-[238px] snap-start sm:min-w-[252px] lg:min-w-[268px]">
      <a className="group block no-underline" href="#">
        <div
          className={`flex min-h-[220px] items-center justify-center overflow-hidden rounded-[26px] border border-[#eff0f2] px-4 py-5 transition duration-200 group-hover:-translate-y-0.5 group-hover:shadow-[0_12px_24px_rgba(15,23,42,0.06)] sm:min-h-[236px] ${product.panelClassName}`}
        >
          <Image
            className={`h-auto w-auto object-contain ${product.imageClassName}`}
            src={product.src}
            alt={product.alt}
            width={product.width}
            height={product.height}
            sizes="(min-width: 1024px) 268px, (min-width: 640px) 252px, 238px"
          />
        </div>

        <div className="pt-4">
          <h3 className="max-w-[18ch] text-[0.99rem] font-semibold leading-[1.35] text-[#111216] sm:text-[1.03rem]">
            {product.name}
          </h3>
          <p className="mt-3 text-[1.02rem] font-semibold text-[#111216]">
            {product.price}
          </p>
        </div>
      </a>
    </article>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-[#283241]">
      <header className="bg-white">
        <div className="grid min-h-[62px] items-center gap-2 px-3 py-2 sm:grid-cols-[132px_minmax(0,1fr)_auto] sm:px-[10px] md:grid-cols-[156px_minmax(220px,1fr)_auto] md:gap-3 md:px-[14px] lg:grid-cols-[210px_minmax(300px,1fr)_auto] lg:gap-[14px] lg:px-4 xl:grid-cols-[250px_minmax(320px,1fr)_auto] xl:gap-5 xl:px-6">
          <a className="inline-flex items-center" href="#" aria-label="Electro Mall home">
            <Image
              className="block h-auto w-[132px] sm:w-[132px] md:w-[160px] lg:w-[185px] xl:w-[205px]"
              src="/logo-cropped.png"
              alt="Electro Mall"
              width={240}
              height={43}
              priority
            />
          </a>

          <form
            className="flex min-w-0 items-center rounded-full border border-[#eee1e5] bg-[linear-gradient(90deg,#fcf1f3,#fff8f9)] px-[14px] py-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] lg:px-4 xl:px-[18px]"
            action="#"
            role="search"
          >
            <label className="sr-only" htmlFor="site-search">
              Search products
            </label>
            <input
              id="site-search"
              name="q"
              type="search"
              placeholder="I&apos;m Looking for"
              className="h-[34px] w-full min-w-0 border-0 bg-transparent px-2 text-[0.94rem] font-medium tracking-[0.01em] text-[#283241] outline-none placeholder:text-[#97a1b0] [&::-webkit-search-cancel-button]:hidden"
            />
            <button
              className="inline-flex h-[38px] min-w-12 items-center justify-center gap-2 rounded-full bg-[#ff3036] px-0 text-[0.94rem] font-bold text-white shadow-[0_8px_16px_rgba(255,48,54,0.12)] transition duration-200 hover:-translate-y-px hover:bg-[#f3272d] sm:min-w-[104px] sm:px-[18px]"
              type="submit"
            >
              <SearchIcon className="h-[18px] w-[18px] shrink-0" />
              <span className="hidden sm:inline">Search</span>
            </button>
          </form>

          <nav className="flex items-center gap-[10px] whitespace-nowrap sm:gap-3 lg:gap-4" aria-label="Quick actions">
            <a className="inline-flex items-center gap-1.5 text-[0.88rem] font-semibold text-[#283241]" href="#">
              <UserIcon className="h-[18px] w-[18px] text-[#546273]" />
              <span className="hidden md:inline">Ali Baeiz</span>
            </a>

            <a className="hidden text-[0.92rem] font-semibold text-[#ff3036] lg:inline" href="#">
              Need help ?
            </a>

            <a className="inline-flex h-5 w-5 items-center justify-center text-[#ff3036]" href="#" aria-label="Wishlist">
              <HeartIcon />
            </a>

            <a className="inline-flex h-5 w-5 items-center justify-center text-[#ff3036]" href="#" aria-label="Notifications">
              <BellIcon />
            </a>

            <a className="inline-flex h-5 w-5 items-center justify-center text-[#ff3036]" href="#" aria-label="Cart">
              <CartIcon />
            </a>

            <button
              className="inline-flex items-center gap-1.5 bg-transparent p-0 text-[#ff3036]"
              type="button"
              aria-label="Select language and region"
            >
              <span className="inline-flex h-6 w-6 overflow-hidden rounded-full shadow-[inset_0_0_0_1px_rgba(255,48,54,0.1)]" aria-hidden="true">
                <FlagIcon />
              </span>
              <ChevronIcon className="h-3 w-3 text-[#1f2937]" />
            </button>
          </nav>
        </div>

        <nav className="mx-3 mt-2 rounded-[14px] border border-[#eceef2] bg-[#f6f7f8] px-3 py-2 shadow-[0_8px_18px_rgba(15,23,42,0.04)] sm:mx-[10px] md:mx-[14px] md:px-[14px] md:py-0 lg:mx-4 lg:min-h-[44px] lg:px-4 xl:mx-6 xl:min-h-12 xl:px-5" aria-label="Shop links">
          <div className="flex items-center justify-start overflow-x-auto whitespace-nowrap pb-0.5 md:justify-center md:pb-0">
            {secondaryLinks.map((link, index) => (
              <a
                key={link.label}
                className={`inline-flex min-h-[34px] items-center px-3 text-[0.82rem] font-medium text-[#243655] transition duration-200 hover:text-[#ff3036] sm:px-3 md:px-[14px] md:text-[0.88rem] lg:px-[18px] lg:text-[0.92rem] ${index !== 0 ? "border-l border-[#e4e1e4]" : ""}`}
                href="#"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <HeroSection
        ariaLabel="iPhone hero"
        title="iPhone"
        subtitle="Meet the latest iPhone lineup."
        primaryAction="Learn more"
        secondaryAction="Shop iPhone"
        imageSrc="/iphone-17-pro-model-unselect-gallery-1-202509-removebg-preview.png"
        imageAlt="iPhone 17 Pro models"
        imageWidth={666}
        imageHeight={500}
        imageMaxWidth="max-w-[980px]"
      />

      <HeroSection
        ariaLabel="MacBook Pro hero"
        title="MacBook Pro"
        subtitle="The ultimate pro computer."
        primaryAction="Learn more"
        secondaryAction="Shop MacBook Pro"
        imageSrc="/macbook-hero-dark.png"
        imageAlt="MacBook Pro models"
        imageWidth={1365}
        imageHeight={768}
        imageMaxWidth="max-w-[1240px]"
        dark
        wideTitle
      />

      <section className="bg-white px-3 pb-[54px] pt-[38px] sm:px-3 sm:pb-16 sm:pt-11 md:px-[14px] lg:px-4 lg:pb-[78px] lg:pt-[52px]" aria-label="Shop categories">
        <div className="mx-auto grid w-full max-w-[1260px] grid-cols-2 gap-x-[10px] gap-y-4 sm:grid-cols-3 sm:gap-x-4 sm:gap-y-[22px] lg:grid-cols-6 lg:gap-7">
          {marketingCategories.map((category) => (
            <MarketingCategory category={category} key={category.label} />
          ))}
        </div>
      </section>

      <section
        className="bg-white px-3 pb-[76px] pt-[8px] sm:px-3 sm:pb-[88px] md:px-[14px] lg:px-4 lg:pb-[104px]"
        aria-label="New arrivals"
      >
        <div className="mx-auto max-w-[1260px]">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-[clamp(2rem,3.6vw,3.2rem)] font-semibold leading-[0.95] tracking-[-0.05em] text-[#111216]">
                New Arrivals
              </h2>
              <p className="mt-2 text-[1rem] leading-[1.5] text-[#6a7383] sm:text-[1.04rem]">
                The latest Apple favorites, just landed.
              </p>
            </div>

            <a
              className="inline-flex items-center gap-2 text-[0.96rem] font-medium text-[#ff3036] transition duration-200 hover:text-[#e62b28]"
              href="#"
            >
              <span>View All</span>
              <ArrowIcon className="h-[13px] w-[13px]" />
            </a>
          </div>

          <div className="mt-8">
            <div className="new-arrivals-scroll flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 sm:gap-5 lg:gap-6">
              {newArrivalProducts.map((product) => (
                <NewArrivalCard key={product.name} product={product} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
