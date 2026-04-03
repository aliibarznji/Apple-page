import Image from "next/image";
import {
  BellIcon,
  CartIcon,
  ChevronIcon,
  FlagIcon,
  HeartIcon,
  SearchIcon,
  UserIcon,
} from "../icons/site-icons";

export default function HomeHeader({ secondaryLinks }) {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur-md supports-[backdrop-filter]:bg-white/80">
      <div className="sm:hidden">
        <div className="flex items-center justify-between gap-3 px-3 pb-2 pt-3">
          <a className="inline-flex min-w-0 items-center" href="#" aria-label="Electro Mall home">
            <Image
              className="block h-auto w-[182px]"
              src="/branding/electromall-wordmark.png"
              alt="Electro Mall"
              width={240}
              height={43}
              priority
            />
          </a>

          <nav className="flex shrink-0 items-center gap-2.5 text-[#ff3036]" aria-label="Quick actions">
            <a className="inline-flex h-7 w-7 items-center justify-center text-[#546273]" href="#" aria-label="Profile">
              <UserIcon className="h-[15px] w-[15px]" />
            </a>
            <a className="inline-flex h-7 w-7 items-center justify-center" href="#" aria-label="Wishlist">
              <HeartIcon className="h-[15px] w-[15px]" />
            </a>
            <a className="inline-flex h-7 w-7 items-center justify-center" href="#" aria-label="Notifications">
              <BellIcon className="h-[15px] w-[15px]" />
            </a>
            <a className="inline-flex h-7 w-7 items-center justify-center" href="#" aria-label="Cart">
              <CartIcon className="h-[15px] w-[15px]" />
            </a>
            <button
              className="inline-flex h-7 items-center gap-1 rounded-full border border-[#f1d8dd] bg-white px-1.5 text-[#ff3036]"
              type="button"
              aria-label="Select language and region"
            >
              <span className="inline-flex h-4.5 w-4.5 overflow-hidden rounded-full shadow-[inset_0_0_0_1px_rgba(255,48,54,0.1)]" aria-hidden="true">
                <FlagIcon />
              </span>
              <ChevronIcon className="h-3 w-3 text-[#1f2937]" />
            </button>
          </nav>
        </div>

        <form className="px-3 pb-2" action="#" role="search">
          <label className="sr-only" htmlFor="site-search-mobile">
            Search products
          </label>
          <div className="flex min-w-0 items-center rounded-full border border-[#eee1e5] bg-[linear-gradient(90deg,#fcf1f3,#fff8f9)] px-2.5 py-0.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
            <input
              id="site-search-mobile"
              name="q"
              type="search"
              placeholder="I&apos;m Looking for"
              className="h-[36px] w-full min-w-0 border-0 bg-transparent px-2 text-[0.94rem] font-medium tracking-[0.01em] text-[#283241] outline-none placeholder:text-[#97a1b0] [&::-webkit-search-cancel-button]:hidden"
            />
            <button
              className="inline-flex h-[32px] min-w-[44px] items-center justify-center gap-1.5 rounded-full bg-[#ff3036] px-0 text-[0.82rem] font-semibold text-white shadow-[0_6px_14px_rgba(255,48,54,0.1)] transition duration-200 hover:-translate-y-px hover:bg-[#f3272d]"
              type="submit"
              aria-label="Search"
            >
              <SearchIcon className="h-[15px] w-[15px] shrink-0" />
            </button>
          </div>
        </form>

        <nav className="mx-3 mb-2 rounded-full border border-[#eceef2] bg-[#f5f5f7] px-1.5 py-1.5 shadow-[0_6px_14px_rgba(15,23,42,0.03)]" aria-label="Shop links">
          <div className="horizontal-scroll flex items-center gap-1 overflow-x-auto whitespace-nowrap">
            {secondaryLinks.map((link) => (
              <a
                key={link.label}
                className="inline-flex h-8 shrink-0 items-center rounded-full px-3 text-[0.84rem] font-medium text-[#243655] transition duration-200 hover:bg-white hover:text-[#ff3036]"
                href="#"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      </div>

      <div className="hidden sm:block">
        <div className="grid min-h-[48px] items-center gap-2 px-3 py-1.5 sm:grid-cols-[112px_minmax(0,1fr)_auto] sm:px-[10px] md:grid-cols-[132px_minmax(200px,1fr)_auto] md:gap-3 md:px-[14px] lg:grid-cols-[170px_minmax(280px,1fr)_auto] lg:gap-[14px] lg:px-4 xl:grid-cols-[200px_minmax(300px,1fr)_auto] xl:gap-5 xl:px-6">
          <a className="inline-flex items-center" href="#" aria-label="Electro Mall home">
            <Image
              className="block h-auto w-[112px] sm:w-[112px] md:w-[132px] lg:w-[155px] xl:w-[170px]"
              src="/branding/electromall-wordmark.png"
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
            <label className="sr-only" htmlFor="site-search-desktop">
              Search products
            </label>
            <input
              id="site-search-desktop"
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
      </div>
    </header>
  );
}
