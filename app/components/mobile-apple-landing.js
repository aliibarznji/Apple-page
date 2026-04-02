"use client";

import Image from "next/image";
import { useRef, useState } from "react";

function MenuIcon({ className = "h-[18px] w-[18px]" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M6.5 7.25h11"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2.2"
      />
      <path
        d="M8.5 12h7"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2.2"
      />
      <path
        d="M6.5 16.75h11"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2.2"
      />
    </svg>
  );
}

function BellIcon({ className = "h-[23px] w-[23px]" }) {
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

function HomeIcon({ className = "h-[24px] w-[24px]" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M4.75 11.2 12 5.25l7.25 5.95v7.55a1 1 0 0 1-1 1H14.5v-5.1a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v5.1H5.75a1 1 0 0 1-1-1Z"
        fill="currentColor"
      />
    </svg>
  );
}

function CategoriesIcon({ className = "h-[23px] w-[23px]" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <rect
        x="4.5"
        y="4.5"
        width="6.5"
        height="6.5"
        rx="1.6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <rect
        x="13"
        y="4.5"
        width="6.5"
        height="6.5"
        rx="1.6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <rect
        x="4.5"
        y="13"
        width="6.5"
        height="6.5"
        rx="1.6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <rect
        x="13"
        y="13"
        width="6.5"
        height="6.5"
        rx="1.6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function DealsIcon({ className = "h-[23px] w-[23px]" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M10.25 4.75h3.5a1.9 1.9 0 0 1 1.58.84l1.28 1.91 2.28.44a1.9 1.9 0 0 1 1.05 3.16l-1.57 1.64.29 2.26a1.9 1.9 0 0 1-2.68 1.94L14 16.03l-2.08.9a1.9 1.9 0 0 1-2.68-1.94l.29-2.26-1.57-1.64a1.9 1.9 0 0 1 1.05-3.16l2.28-.44 1.28-1.91a1.9 1.9 0 0 1 1.58-.84Z"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="11.85" r="1.35" fill="currentColor" />
    </svg>
  );
}

function CartIcon({ className = "h-[23px] w-[23px]" }) {
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

function ProfileIcon({ className = "h-[23px] w-[23px]" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 12.5a4.25 4.25 0 1 0 0-8.5 4.25 4.25 0 0 0 0 8.5Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M4.75 20a7.25 7.25 0 0 1 14.5 0"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

const navItems = [
  { label: "Home", Icon: HomeIcon, active: true },
  { label: "Categories", Icon: CategoriesIcon },
  { label: "Deals", Icon: DealsIcon },
  { label: "Cart", Icon: CartIcon },
  { label: "Profile", Icon: ProfileIcon },
];

export default function MobileAppleLanding({ slides }) {
  const scrollerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  function scrollToSlide(index) {
    const scroller = scrollerRef.current;
    if (!scroller) {
      return;
    }

    scroller.scrollTo({
      left: scroller.clientWidth * index,
      behavior: "smooth",
    });
    setActiveIndex(index);
  }

  function handleScroll(event) {
    const scroller = event.currentTarget;
    const nextIndex = Math.round(scroller.scrollLeft / scroller.clientWidth);

    if (nextIndex !== activeIndex) {
      setActiveIndex(nextIndex);
    }
  }

  return (
    <>
      <header className="sticky top-0 z-40 bg-white">
        <div className="mx-auto max-w-[480px] px-5 pt-5">
          <div className="grid grid-cols-[48px_1fr_48px] items-center">
            <button
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#ef312d] text-white shadow-[0_10px_20px_rgba(239,49,45,0.2)]"
              type="button"
              aria-label="Open menu"
            >
              <MenuIcon />
            </button>

            <a
              className="inline-flex justify-center"
              href="#"
              aria-label="Electro Mall home"
            >
              <Image
                className="block h-auto w-[188px]"
                src="/branding/electromall-wordmark.png"
                alt="Electro Mall"
                width={240}
                height={43}
                priority
              />
            </a>

            <a
              className="inline-flex h-11 w-11 items-center justify-center justify-self-end text-[#ef312d]"
              href="#"
              aria-label="Notifications"
            >
              <BellIcon />
            </a>
          </div>

          <form className="pb-5 pt-5" action="#" role="search">
            <label className="sr-only" htmlFor="site-search-mobile-shell">
              Search products
            </label>
            <input
              id="site-search-mobile-shell"
              name="q"
              type="search"
              placeholder="I&apos;m Looking for"
              className="h-[58px] w-full rounded-full border border-[#eadadc] bg-[linear-gradient(180deg,#fef5f5_0%,#fff3f4_100%)] px-10 text-[1rem] font-medium text-[#243655] outline-none placeholder:text-[#98a0b1] shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] [&::-webkit-search-cancel-button]:hidden"
            />
          </form>
        </div>

        <div className="h-px bg-[#ebe6e6] shadow-[0_10px_24px_rgba(15,23,42,0.1)]" />
      </header>

      <section className="mx-auto flex min-h-[calc(100svh-244px)] max-h-[calc(100svh-244px)] max-w-[480px] flex-col overflow-hidden px-5 pb-3 pt-5 text-center">
        <div>
          <h1 className="text-[clamp(2.45rem,9vw,3rem)] font-bold leading-[0.92] tracking-[-0.065em] text-black">
            Apple
          </h1>
          <p className="mx-auto mt-4 max-w-[21rem] text-[0.96rem] leading-[1.56] text-[#243655]">
            Discover the Apple products that millions trust worldwide. Premium
            technology, now available in Erbil with expert support and genuine
            warranty.
          </p>

          <a
            className="mt-5 inline-flex min-h-[44px] items-center justify-center rounded-full border border-[#ef312d] px-6 text-[0.93rem] font-medium text-[#ef312d]"
            href="#"
          >
            view All Apple Products
          </a>
        </div>

        <div className="mt-5 flex min-h-0 flex-1 flex-col justify-end">
          <div
            ref={scrollerRef}
            className="horizontal-scroll flex snap-x snap-mandatory overflow-x-auto scroll-smooth"
            onScroll={handleScroll}
          >
            {slides.map((slide, index) => (
              <article
                className="w-full shrink-0 snap-center"
                key={slide.name}
                aria-hidden={index !== activeIndex}
              >
                <div className="mx-auto flex h-full max-h-[230px] min-h-[180px] max-w-[260px] items-end justify-center pb-6">
                  <Image
                    className={`h-auto w-full object-contain ${slide.imageClassName}`}
                    src={slide.src}
                    alt={slide.alt}
                    width={slide.width}
                    height={slide.height}
                    sizes="(max-width: 639px) 290px, 0px"
                    priority={index === 0}
                  />
                </div>
              </article>
            ))}
          </div>

          <div className="mt-2 flex items-center justify-center gap-2.5">
            {slides.map((slide, index) => (
              <button
                key={slide.name}
                className={`h-3 w-3 rounded-full transition ${
                  index === activeIndex ? "bg-[#ef312d]" : "bg-[#d6dae2]"
                }`}
                type="button"
                onClick={() => scrollToSlide(index)}
                aria-label={`Show ${slide.name}`}
                aria-pressed={index === activeIndex}
              />
            ))}
          </div>
        </div>
      </section>

      <nav className="fixed bottom-0 left-0 right-0 z-40 border-t border-[#e7e9ee] bg-white/95 backdrop-blur-md">
        <div className="mx-auto grid max-w-[480px] grid-cols-5 px-3 pt-2 text-center text-[#8c919f]">
          {navItems.map(({ label, Icon, active }) => (
            <a
              key={label}
              className={`flex min-h-[70px] flex-col items-center justify-center gap-1.5 ${
                active ? "text-[#67748f]" : "text-[#8f93a0]"
              }`}
              href="#"
            >
              <Icon className="h-[23px] w-[23px]" />
              <span className="text-[0.82rem] font-medium leading-none">
                {label}
              </span>
            </a>
          ))}
        </div>
        <div className="pb-[calc(env(safe-area-inset-bottom)+0.15rem)]" />
      </nav>
    </>
  );
}
