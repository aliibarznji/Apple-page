import Image from "next/image";
import {
  ArrowIcon,
  BadgeRibbonIcon,
  DeliveryTruckIcon,
  HeadsetSupportIcon,
  ShieldTrustIcon,
} from "../icons/site-icons";

const featureIconByKey = {
  shield: ShieldTrustIcon,
  badge: BadgeRibbonIcon,
  delivery: DeliveryTruckIcon,
  support: HeadsetSupportIcon,
};

export function HeroSection({
  ariaLabel,
  title,
  subtitle,
  primaryAction,
  secondaryAction,
  videoSrc,
  videoType = "video/mp4",
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
    <section className={`overflow-hidden pt-6 sm:pt-7 md:pt-10 lg:pt-11 ${sectionClasses}`} aria-label={ariaLabel}>
      <div className="flex w-full flex-col items-center">
        <div className={`flex min-h-[116px] w-full max-w-[20rem] flex-col items-center px-5 text-center sm:min-h-[130px] sm:max-w-[24rem] md:min-h-[146px] md:max-w-none lg:min-h-[158px] ${dark ? "pt-1.5" : ""}`}>
          <p className="m-0 text-[0.68rem] font-semibold tracking-[0.16em] text-[#ff3036] md:text-[0.76rem]">
            NEW
          </p>
          <h1
            className={`m-0 leading-[0.95] font-semibold tracking-[-0.045em] ${wideTitle ? "text-[clamp(1.95rem,10.5vw,3.8rem)]" : "text-[clamp(2.1rem,11vw,4.1rem)]"} ${titleClasses}`}
          >
            {title}
          </h1>
          <p className={`mt-2 max-w-[17rem] text-[clamp(0.86rem,3.7vw,1.35rem)] font-normal leading-[1.3] sm:max-w-[20rem] md:max-w-none ${subtitleClasses}`}>
            {subtitle}
          </p>

          <div className="mt-4 flex w-full max-w-[17rem] flex-col items-center gap-2.5 sm:max-w-none sm:flex-row sm:justify-center sm:gap-3">
            <a
              className="inline-flex min-h-9 w-full items-center justify-center gap-2 rounded-full bg-[#e62b28] px-4 text-[0.82rem] font-semibold text-white shadow-[0_6px_14px_rgba(230,43,40,0.1)] transition duration-200 hover:-translate-y-px hover:bg-[#d82825] sm:min-h-8 sm:w-auto"
              href="#"
            >
              <span>{primaryAction}</span>
              <ArrowIcon />
            </a>

            <a
              className="inline-flex min-h-9 items-center justify-center gap-2 text-[0.82rem] font-medium text-[#ff3036] transition duration-200 hover:text-[#e62b28] sm:min-h-0"
              href="#"
            >
              <span>{secondaryAction}</span>
              <ArrowIcon />
            </a>
          </div>
        </div>

        <div className={`mt-3 flex w-full justify-center sm:mt-2 ${mediaClasses}`}>
          {videoSrc ? (
            <video
              className={`block h-auto w-full object-contain ${imageMaxWidth}`}
              autoPlay
              muted
              playsInline
              preload="auto"
              width={imageWidth}
              height={imageHeight}
              aria-hidden="true"
            >
              <source src={videoSrc} type={videoType} />
            </video>
          ) : (
            <Image
              className={`block h-auto w-full object-contain ${imageMaxWidth}`}
              src={imageSrc}
              alt={imageAlt}
              width={imageWidth}
              height={imageHeight}
              priority
            />
          )}
        </div>
      </div>
    </section>
  );
}

export function MarketingCategory({ category }) {
  return (
    <a className="group flex flex-col items-center gap-2 text-center no-underline sm:gap-2.5" href="#">
      <span className="flex h-[64px] w-[64px] items-center justify-center rounded-[15px] bg-[#f5f5f7] transition duration-200 group-hover:-translate-y-0.5 sm:h-[76px] sm:w-[76px] sm:rounded-[16px] lg:h-[84px] lg:w-[84px] lg:rounded-[18px]">
        <Image
          className="h-auto w-auto max-h-[48px] max-w-[54px] object-contain sm:max-h-[56px] sm:max-w-[66px]"
          src={category.src}
          alt={category.alt}
          width={category.width}
          height={category.height}
        />
      </span>
      <span className="text-[0.68rem] font-medium leading-[1.2] text-[#6e6e73] sm:text-[0.78rem] lg:text-[0.84rem]">
        {category.label}
      </span>
    </a>
  );
}

export function FeaturedPromoTile({ tile }) {
  const panelClasses = tile.dark
    ? "bg-[linear-gradient(180deg,#0f1012_0%,#000000_100%)] text-white"
    : "border border-[#eceef2] bg-[linear-gradient(180deg,#fbfbfc_0%,#f5f5f7_100%)] text-[#111216]";
  const subtitleClasses = tile.dark ? "text-[#d2d2d7]" : "text-[#6e6e73]";
  const glowClasses = tile.dark
    ? "bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_56%)]"
    : "bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.95),rgba(255,255,255,0)_58%)]";

  return (
    <article
      className={`group relative flex min-h-[320px] flex-col overflow-hidden rounded-[24px] shadow-[0_16px_36px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_46px_rgba(15,23,42,0.08)] sm:min-h-[430px] sm:rounded-[28px] ${panelClasses}`}
    >
      <div
        className={`pointer-events-none absolute inset-x-0 top-0 h-[180px] opacity-90 ${glowClasses}`}
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col items-center px-5 pt-7 text-center sm:px-8 sm:pt-11">
        <h3 className="text-[clamp(1.7rem,8vw,2.65rem)] font-semibold leading-[0.96] tracking-[-0.045em]">
          {tile.title}
        </h3>
        <p className={`mt-2 max-w-[18rem] text-[0.88rem] leading-[1.45] sm:max-w-none sm:text-[0.92rem] ${subtitleClasses}`}>
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

      <div className="relative z-10 flex flex-1 items-end justify-center overflow-hidden px-5 pb-6 pt-5 sm:px-8 sm:pb-9 sm:pt-7">
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

export function AccessoryShowcaseCard({ accessory }) {
  return (
    <article>
      <a
        className="group flex flex-col items-center gap-3 text-center no-underline sm:gap-4"
        href="#"
      >
        <span className="flex h-[64px] w-[64px] items-center justify-center rounded-[15px] bg-[#f5f5f7] transition duration-200 group-hover:-translate-y-0.5 sm:h-[76px] sm:w-[76px] sm:rounded-[16px] lg:h-[84px] lg:w-[84px] lg:rounded-[18px]">
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

        <h3 className="max-w-[11ch] text-[0.7rem] font-medium leading-[1.2] text-[#6e6e73] sm:text-[0.78rem] lg:text-[0.84rem]">
          {accessory.label}
        </h3>
      </a>
    </article>
  );
}

function WhyElectroMallFeature({ feature }) {
  const Icon = featureIconByKey[feature.iconKey];

  return (
    <article className="group flex flex-col items-center text-center">
      <span className="flex h-[60px] w-[60px] items-center justify-center rounded-[18px] bg-[#fdf0f1] text-[#ff3036] transition duration-300 group-hover:-translate-y-1 group-hover:bg-[#fde6e8] sm:h-[76px] sm:w-[76px] sm:rounded-[20px]">
        <Icon className="h-[22px] w-[22px] sm:h-[26px] sm:w-[26px]" />
      </span>

      <h3 className="mt-4 text-[0.98rem] font-semibold leading-[1.2] tracking-[-0.03em] text-[#111216] sm:mt-5 sm:text-[1.12rem]">
        {feature.title}
      </h3>
      <p className="mt-2 max-w-[16ch] text-[0.84rem] leading-[1.55] text-[#70798b] sm:max-w-[20ch] sm:text-[0.98rem]">
        {feature.description}
      </p>
    </article>
  );
}

export function WhyElectroMallSection({ features }) {
  return (
    <section
      className="bg-white px-3 py-12 sm:px-3 sm:py-[68px] md:px-[14px] lg:px-4 lg:py-[82px]"
      aria-label="Why ElectroMall"
    >
      <div className="mx-auto max-w-[1180px]">
        <div className="mx-auto max-w-[860px] text-center">
          <p className="text-[0.74rem] font-semibold tracking-[0.2em] text-[#ff3036] sm:text-[0.9rem]">
            WHY ELECTROMALL
          </p>
          <h2 className="mx-auto mt-3 max-w-[11ch] text-[clamp(1.7rem,8vw,4rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-[#111216] sm:mt-4 sm:max-w-none">
            The Apple experience you deserve.
          </h2>
        </div>

        <div className="mx-auto mt-10 grid max-w-[1140px] grid-cols-2 gap-x-5 gap-y-10 sm:mt-14 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-14 lg:mt-[72px] lg:grid-cols-4 lg:gap-x-10">
          {features.map((feature) => (
            <WhyElectroMallFeature key={feature.title} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
