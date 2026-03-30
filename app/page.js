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

function SearchIcon() {
  return (
    <svg className="action-icon" viewBox="0 0 24 24" aria-hidden="true">
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

function UserIcon() {
  return (
    <svg className="action-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 12.5a4.25 4.25 0 1 0 0-8.5 4.25 4.25 0 0 0 0 8.5Z"
        fill="currentColor"
      />
      <path d="M4.75 20a7.25 7.25 0 0 1 14.5 0" fill="currentColor" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg className="action-icon" viewBox="0 0 24 24" aria-hidden="true">
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

function BellIcon() {
  return (
    <svg className="action-icon" viewBox="0 0 24 24" aria-hidden="true">
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

function CartIcon() {
  return (
    <svg className="action-icon" viewBox="0 0 24 24" aria-hidden="true">
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

function ChevronIcon() {
  return (
    <svg className="chevron-icon" viewBox="0 0 24 24" aria-hidden="true">
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

function MenuIcon() {
  return (
    <svg className="menu-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M5 8.25h14M5 12h14M5 15.75h14"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.9"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg className="hero-arrow" viewBox="0 0 24 24" aria-hidden="true">
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

export default function HomePage() {
  return (
    <main className="page">
      <header className="header-block">
        <div className="site-header">
          <a className="brand" href="#" aria-label="Electro Mall home">
            <Image
              src="/logo-cropped.png"
              alt="Electro Mall"
              width={240}
              height={43}
              priority
            />
          </a>

          <form className="search-shell" action="#" role="search">
            <label className="sr-only" htmlFor="site-search">
              Search products
            </label>
            <input
              id="site-search"
              name="q"
              type="search"
              placeholder="I&apos;m Looking for"
            />
            <button className="search-button" type="submit">
              <SearchIcon />
              <span>Search</span>
            </button>
          </form>

          <nav className="header-actions" aria-label="Quick actions">
            <a className="user-link" href="#">
              <UserIcon />
              <span>Ali Baeiz</span>
            </a>

            <a className="help-link" href="#">
              Need help ?
            </a>

            <a className="icon-link" href="#" aria-label="Wishlist">
              <HeartIcon />
            </a>

            <a className="icon-link" href="#" aria-label="Notifications">
              <BellIcon />
            </a>

            <a className="icon-link" href="#" aria-label="Cart">
              <CartIcon />
            </a>

            <button
              className="locale-link"
              type="button"
              aria-label="Select language and region"
            >
              <span className="flag-badge" aria-hidden="true">
                <FlagIcon />
              </span>
              <ChevronIcon />
            </button>
          </nav>
        </div>

        <nav className="secondary-nav" aria-label="Shop links">
          <div className="secondary-links">
            {secondaryLinks.map((link) => (
              <a
                key={link.label}
                className={`secondary-link${link.hot ? " secondary-link-hot" : ""}`}
                href="#"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <section className="hero-section" aria-label="iPhone hero">
        <div className="hero-wrap">
          <div className="hero-content">
            <p className="hero-eyebrow">NEW</p>
            <h1 className="hero-title">iPhone</h1>
            <p className="hero-subtitle">Meet the latest iPhone lineup.</p>

            <div className="hero-actions">
              <a className="hero-button" href="#">
                <span>Learn more</span>
                <ArrowIcon />
              </a>

              <a className="hero-link" href="#">
                <span>Shop iPhone</span>
                <ArrowIcon />
              </a>
            </div>
          </div>

          <div className="hero-media">
            <Image
              className="hero-image hero-image-phone"
              src="/iphone-17-pro-model-unselect-gallery-1-202509-removebg-preview.png"
              alt="iPhone 17 Pro models"
              width={666}
              height={500}
              priority
            />
          </div>
        </div>
      </section>
      <section className="hero-section hero-section-dark" aria-label="MacBook Pro hero">
        <div className="hero-wrap">
          <div className="hero-content">
            <p className="hero-eyebrow">NEW</p>
            <h1 className="hero-title hero-title-wide">MacBook Pro</h1>
            <p className="hero-subtitle">The ultimate pro computer.</p>

            <div className="hero-actions">
              <a className="hero-button" href="#">
                <span>Learn more</span>
                <ArrowIcon />
              </a>

              <a className="hero-link" href="#">
                <span>Shop MacBook Pro</span>
                <ArrowIcon />
              </a>
            </div>
          </div>

          <div className="hero-media">
            <Image
              className="hero-image hero-image-mac"
              src="/macbook-hero-dark.png"
              alt="MacBook Pro models"
              width={1365}
              height={768}
              priority
            />
          </div>
        </div>
      </section>

      <section className="marketing-categories" aria-label="Shop categories">
        <div className="marketing-categories-inner">
          {marketingCategories.map((category) => (
            <a className="marketing-category" href="#" key={category.label}>
              <span className="marketing-category-tile">
                <Image
                  className="marketing-category-image"
                  src={category.src}
                  alt={category.alt}
                  width={category.width}
                  height={category.height}
                />
              </span>
              <span className="marketing-category-label">{category.label}</span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
