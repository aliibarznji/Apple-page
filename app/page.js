import Image from "next/image";
import NewArrivalsSection from "./new-arrivals-section";

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

const featuredPromoTiles = [
  {
    title: "iPad Pro",
    subtitle: "Supercharged by M4.",
    primaryAction: "Learn more",
    secondaryAction: "Shop",
    src: "/Marketing%20category/Ipads.avif",
    alt: "iPad Pro",
    width: 78,
    height: 72,
    dark: true,
    mediaClassName:
      "max-w-[132px] translate-y-5 scale-[3.05] sm:max-w-[144px] sm:translate-y-6 sm:scale-[3.35]",
  },
  {
    title: "Apple Watch",
    subtitle: "The ultimate way to stay healthy.",
    primaryAction: "Learn more",
    secondaryAction: "Shop",
    src: "/Marketing%20category/apple%20watch.avif",
    alt: "Apple Watch",
    width: 72,
    height: 72,
    dark: false,
    mediaClassName:
      "max-w-[94px] translate-y-3 scale-[3.05] sm:max-w-[102px] sm:translate-y-4 sm:scale-[3.35]",
  },
  {
    title: "AirPods Pro",
    subtitle: "Adaptive Audio. Now playing.",
    primaryAction: "Learn more",
    secondaryAction: "Shop",
    src: "/Marketing%20category/airpods.avif",
    alt: "AirPods Pro",
    width: 72,
    height: 72,
    dark: false,
    mediaClassName:
      "max-w-[98px] translate-y-6 scale-[3.15] sm:max-w-[106px] sm:translate-y-8 sm:scale-[3.45]",
  },
  {
    title: "TV & Home",
    subtitle: "Cinema. Music. More at home.",
    primaryAction: "Learn more",
    secondaryAction: "Shop",
    src: "/Marketing%20category/home%20and%20tv.avif",
    alt: "TV and Home",
    width: 72,
    height: 72,
    dark: true,
    mediaClassName:
      "max-w-[122px] translate-y-7 scale-[3.2] sm:max-w-[134px] sm:translate-y-9 sm:scale-[3.55]",
  },
];

const bestSellingAccessories = [
  {
    label: "Cables & Connector",
    src: "/accessories/Cables%20%26%20Connector.avif",
    alt: "Cables and connector accessories",
    imageClassName:
      "max-h-[44px] max-w-[58px] sm:max-h-[48px] sm:max-w-[62px] lg:max-h-[54px] lg:max-w-[68px]",
  },
  {
    label: "Apple Watch Bands",
    src: "/accessories/Apple%20Watch%20Bands.avif",
    alt: "Apple Watch bands",
    imageClassName:
      "max-h-[42px] max-w-[52px] sm:max-h-[46px] sm:max-w-[56px] lg:max-h-[50px] lg:max-w-[60px]",
  },
  {
    label: "Power Adapter",
    src: "/accessories/Power%20Adapter.avif",
    alt: "Power adapter",
    imageClassName:
      "max-h-[46px] max-w-[42px] sm:max-h-[50px] sm:max-w-[46px] lg:max-h-[56px] lg:max-w-[52px]",
  },
  {
    label: "Phone Covers",
    src: "/accessories/Phone%20Covers.avif",
    alt: "Phone covers",
    imageClassName:
      "max-h-[46px] max-w-[40px] sm:max-h-[50px] sm:max-w-[44px] lg:max-h-[56px] lg:max-w-[48px]",
  },
  {
    label: "Apple Pencil",
    src: "/accessories/Apple%20Pencil.avif",
    alt: "Apple Pencil",
    imageClassName:
      "max-h-[44px] max-w-[52px] sm:max-h-[48px] sm:max-w-[56px] lg:max-h-[54px] lg:max-w-[62px]",
  },
  {
    label: "iPad Smart Covers",
    src: "/accessories/iPad%20Smart%20Covers.avif",
    alt: "iPad smart covers",
    imageClassName:
      "max-h-[40px] max-w-[48px] sm:max-h-[44px] sm:max-w-[52px] lg:max-h-[48px] lg:max-w-[58px]",
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
    <section className={`overflow-hidden pt-8 md:pt-10 lg:pt-11 ${sectionClasses}`} aria-label={ariaLabel}>
      <div className="flex w-full flex-col items-center">
        <div className={`flex min-h-[130px] flex-col items-center px-4 text-center md:min-h-[146px] lg:min-h-[158px] ${dark ? "pt-1.5" : ""}`}>
          <p className="m-0 text-[0.72rem] font-semibold tracking-[0.16em] text-[#ff3036] md:text-[0.76rem]">
            NEW
          </p>
          <h1
            className={`m-0 leading-[0.95] font-semibold tracking-[-0.04em] ${wideTitle ? "text-[clamp(2.5rem,4.6vw,3.8rem)]" : "text-[clamp(2.6rem,5vw,4.1rem)]"} ${titleClasses}`}
          >
            {title}
          </h1>
          <p className={`mt-2 text-[clamp(0.92rem,1.6vw,1.35rem)] font-normal leading-[1.3] ${subtitleClasses}`}>
            {subtitle}
          </p>

          <div className="mt-4 flex w-full flex-col items-center gap-2.5 sm:flex-row sm:justify-center sm:gap-3">
            <a
              className="inline-flex min-h-8 items-center justify-center gap-2 rounded-full bg-[#e62b28] px-4 text-[0.82rem] font-semibold text-white shadow-[0_6px_14px_rgba(230,43,40,0.1)] transition duration-200 hover:-translate-y-px hover:bg-[#d82825]"
              href="#"
            >
              <span>{primaryAction}</span>
              <ArrowIcon />
            </a>

            <a
              className="inline-flex items-center gap-2 text-[0.82rem] font-medium text-[#ff3036] transition duration-200 hover:text-[#e62b28]"
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
    <a className="group flex flex-col items-center gap-2.5 text-center no-underline" href="#">
      <span className="flex h-[72px] w-[72px] items-center justify-center rounded-[16px] bg-[#f5f5f7] transition duration-200 group-hover:-translate-y-0.5 sm:h-[76px] sm:w-[76px] lg:h-[84px] lg:w-[84px] lg:rounded-[18px]">
        <Image
          className="h-auto w-auto max-h-[56px] max-w-[66px] object-contain"
          src={category.src}
          alt={category.alt}
          width={category.width}
          height={category.height}
        />
      </span>
      <span className="text-[0.74rem] font-medium leading-[1.2] text-[#6e6e73] sm:text-[0.78rem] lg:text-[0.84rem]">
        {category.label}
      </span>
    </a>
  );
}

function FeaturedPromoTile({ tile }) {
  const panelClasses = tile.dark
    ? "bg-[linear-gradient(180deg,#0f1012_0%,#000000_100%)] text-white"
    : "border border-[#eceef2] bg-[linear-gradient(180deg,#fbfbfc_0%,#f5f5f7_100%)] text-[#111216]";
  const subtitleClasses = tile.dark ? "text-[#d2d2d7]" : "text-[#6e6e73]";
  const glowClasses = tile.dark
    ? "bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_56%)]"
    : "bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.95),rgba(255,255,255,0)_58%)]";

  return (
    <article
      className={`group relative flex min-h-[380px] flex-col overflow-hidden rounded-[28px] shadow-[0_16px_36px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_46px_rgba(15,23,42,0.08)] sm:min-h-[430px] ${panelClasses}`}
    >
      <div
        className={`pointer-events-none absolute inset-x-0 top-0 h-[180px] opacity-90 ${glowClasses}`}
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col items-center px-6 pt-9 text-center sm:px-8 sm:pt-11">
        <h3 className="text-[clamp(2rem,3.4vw,2.65rem)] font-semibold leading-[0.96] tracking-[-0.045em]">
          {tile.title}
        </h3>
        <p className={`mt-2 text-[0.92rem] leading-[1.45] ${subtitleClasses}`}>
          {tile.subtitle}
        </p>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          <a
            className="inline-flex items-center gap-1.5 text-[0.9rem] font-medium text-[#ff3036] transition duration-200 hover:text-[#e62b28]"
            href="#"
          >
            <span>{tile.primaryAction}</span>
            <ArrowIcon className="h-[11px] w-[11px]" />
          </a>

          <a
            className="inline-flex items-center gap-1.5 text-[0.9rem] font-medium text-[#ff3036] transition duration-200 hover:text-[#e62b28]"
            href="#"
          >
            <span>{tile.secondaryAction}</span>
            <ArrowIcon className="h-[11px] w-[11px]" />
          </a>
        </div>
      </div>

      <div className="relative z-10 flex flex-1 items-end justify-center overflow-hidden px-6 pb-7 pt-6 sm:px-8 sm:pb-9 sm:pt-7">
        <div
          className={`flex w-full items-end justify-center transition duration-500 group-hover:-translate-y-1 ${tile.mediaClassName}`}
        >
          <Image
            className="h-auto w-full object-contain drop-shadow-[0_24px_34px_rgba(0,0,0,0.22)]"
            src={tile.src}
            alt={tile.alt}
            width={tile.width}
            height={tile.height}
            sizes="(min-width: 768px) 42vw, 84vw"
          />
        </div>
      </div>
    </article>
  );
}

function AccessoryShowcaseCard({ accessory }) {
  return (
    <article>
      <a
        className="group flex flex-col items-center gap-3.5 text-center no-underline sm:gap-4"
        href="#"
      >
        <span className="flex h-[72px] w-[72px] items-center justify-center rounded-[16px] bg-[#f5f5f7] transition duration-200 group-hover:-translate-y-0.5 sm:h-[76px] sm:w-[76px] lg:h-[84px] lg:w-[84px] lg:rounded-[18px]">
          <Image
            className={`h-auto w-auto object-contain ${accessory.imageClassName}`}
            src={accessory.src}
            alt={accessory.alt}
            width={250}
            height={150}
            sizes="(min-width: 1024px) 8vw, (min-width: 640px) 16vw, 26vw"
            unoptimized
          />
        </span>

        <h3 className="max-w-[11ch] text-[0.74rem] font-medium leading-[1.2] text-[#6e6e73] sm:text-[0.78rem] lg:text-[0.84rem]">
          {accessory.label}
        </h3>
      </a>
    </article>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-[#283241]">
      <header className="bg-white">
        <div className="grid min-h-[48px] items-center gap-2 px-3 py-1.5 sm:grid-cols-[112px_minmax(0,1fr)_auto] sm:px-[10px] md:grid-cols-[132px_minmax(200px,1fr)_auto] md:gap-3 md:px-[14px] lg:grid-cols-[170px_minmax(280px,1fr)_auto] lg:gap-[14px] lg:px-4 xl:grid-cols-[200px_minmax(300px,1fr)_auto] xl:gap-5 xl:px-6">
          <a className="inline-flex items-center" href="#" aria-label="Electro Mall home">
            <Image
              className="block h-auto w-[112px] sm:w-[112px] md:w-[132px] lg:w-[155px] xl:w-[170px]"
              src="/logo-cropped.png"
              alt="Electro Mall"
              width={240}
              height={43}
              priority
            />
          </a>

          <form
            className="flex min-w-0 items-center rounded-full border border-[#eee1e5] bg-[linear-gradient(90deg,#fcf1f3,#fff8f9)] px-3 py-0.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] lg:px-3.5 xl:px-4"
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
              className="h-[30px] w-full min-w-0 border-0 bg-transparent px-2 text-[0.82rem] font-medium tracking-[0.01em] text-[#283241] outline-none placeholder:text-[#97a1b0] [&::-webkit-search-cancel-button]:hidden"
            />
            <button
              className="inline-flex h-[32px] min-w-10 items-center justify-center gap-1.5 rounded-full bg-[#ff3036] px-0 text-[0.82rem] font-semibold text-white shadow-[0_6px_14px_rgba(255,48,54,0.1)] transition duration-200 hover:-translate-y-px hover:bg-[#f3272d] sm:min-w-[88px] sm:px-3.5"
              type="submit"
            >
              <SearchIcon className="h-[15px] w-[15px] shrink-0" />
              <span className="hidden sm:inline">Search</span>
            </button>
          </form>

          <nav className="flex items-center gap-[10px] whitespace-nowrap sm:gap-3 lg:gap-4" aria-label="Quick actions">
            <a className="inline-flex items-center gap-1.5 text-[0.78rem] font-medium text-[#283241]" href="#">
              <UserIcon className="h-[15px] w-[15px] text-[#546273]" />
              <span className="hidden md:inline">Ali Baeiz</span>
            </a>

            <a className="hidden text-[0.78rem] font-medium text-[#ff3036] lg:inline" href="#">
              Need help ?
            </a>

            <a className="inline-flex h-4 w-4 items-center justify-center text-[#ff3036]" href="#" aria-label="Wishlist">
              <HeartIcon className="h-[15px] w-[15px]" />
            </a>

            <a className="inline-flex h-4 w-4 items-center justify-center text-[#ff3036]" href="#" aria-label="Notifications">
              <BellIcon className="h-[15px] w-[15px]" />
            </a>

            <a className="inline-flex h-4 w-4 items-center justify-center text-[#ff3036]" href="#" aria-label="Cart">
              <CartIcon className="h-[15px] w-[15px]" />
            </a>

            <button
              className="inline-flex items-center gap-1.5 bg-transparent p-0 text-[#ff3036]"
              type="button"
              aria-label="Select language and region"
            >
              <span className="inline-flex h-5 w-5 overflow-hidden rounded-full shadow-[inset_0_0_0_1px_rgba(255,48,54,0.1)]" aria-hidden="true">
                <FlagIcon />
              </span>
              <ChevronIcon className="h-3 w-3 text-[#1f2937]" />
            </button>
          </nav>
        </div>

        <nav className="mx-3 mt-1.5 rounded-[12px] border border-[#eceef2] bg-[#f5f5f7] px-3 py-1.5 shadow-[0_6px_14px_rgba(15,23,42,0.03)] sm:mx-[10px] md:mx-[14px] md:px-[14px] md:py-0 lg:mx-4 lg:min-h-[36px] lg:px-4 xl:mx-6 xl:min-h-10 xl:px-5" aria-label="Shop links">
          <div className="flex items-center justify-start overflow-x-auto whitespace-nowrap pb-0.5 md:justify-center md:pb-0">
            {secondaryLinks.map((link, index) => (
              <a
                key={link.label}
                className={`inline-flex min-h-[28px] items-center px-2.5 text-[0.72rem] font-medium text-[#243655] transition duration-200 hover:text-[#ff3036] sm:px-2.5 md:px-3 md:text-[0.76rem] lg:px-3.5 lg:text-[0.8rem] ${index !== 0 ? "border-l border-[#e4e1e4]" : ""}`}
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

      <section className="bg-white px-3 pb-[42px] pt-[28px] sm:px-3 sm:pb-12 sm:pt-8 md:px-[14px] lg:px-4 lg:pb-[58px] lg:pt-[38px]" aria-label="Shop categories">
        <div className="mx-auto grid w-full max-w-[1060px] grid-cols-2 gap-x-[10px] gap-y-3 sm:grid-cols-3 sm:gap-x-4 sm:gap-y-[18px] lg:grid-cols-6 lg:gap-6">
          {marketingCategories.map((category) => (
            <MarketingCategory category={category} key={category.label} />
          ))}
        </div>
      </section>

      <NewArrivalsSection products={newArrivalProducts} />

      <section
        className="bg-white px-3 pb-[72px] pt-0 sm:px-3 sm:pb-[84px] md:px-[14px] lg:px-4 lg:pb-[96px]"
        aria-label="Featured Apple widgets"
      >
        <div className="mx-auto max-w-[1060px]">
          <div className="pb-6 sm:pb-7">
            <div>
              <p className="text-[0.72rem] font-semibold tracking-[0.16em] text-[#ff3036]">
                EXPLORE
              </p>
              <h2 className="mt-2 text-[clamp(1.75rem,3vw,2.7rem)] font-semibold leading-[0.96] tracking-[-0.045em] text-[#1d1d1f]">
                More from Apple.
              </h2>
            </div>
          </div>

          <div className="grid gap-3.5 md:grid-cols-2 md:gap-4 lg:gap-5">
            {featuredPromoTiles.map((tile) => (
              <FeaturedPromoTile key={tile.title} tile={tile} />
            ))}
          </div>
        </div>
      </section>

      <section
        className="bg-white px-3 pb-[84px] pt-[22px] sm:px-3 sm:pb-[96px] sm:pt-[30px] md:px-[14px] lg:px-4 lg:pb-[108px] lg:pt-[36px]"
        aria-label="Best selling accessories"
      >
        <div className="mx-auto max-w-[1060px]">
          <div className="mx-auto max-w-[520px] pb-5 text-center sm:pb-6">
            <p className="text-[0.72rem] font-semibold tracking-[0.16em] text-[#ff3036]">
              ACCESSORIES
            </p>
            <h2 className="mt-4 sm:mt-5 text-[clamp(1.85rem,3.2vw,2.8rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-[#243655]">
              Best Selling <span className="text-[#ff3036]">Accessories</span>
            </h2>
          </div>

          <div className="mx-auto mt-6 grid w-full max-w-[820px] grid-cols-2 gap-x-[18px] gap-y-6 sm:mt-8 sm:grid-cols-3 sm:gap-x-10 sm:gap-y-8 lg:mt-10 lg:max-w-[900px] lg:gap-x-16 lg:gap-y-10">
            {bestSellingAccessories.map((accessory) => (
              <AccessoryShowcaseCard
                key={accessory.label}
                accessory={accessory}
              />
            ))}y
          </div>
        </div>
      </section>
    </main>
  );
}
