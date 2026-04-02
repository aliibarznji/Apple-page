"use client";

import Image from "next/image";
import { useRef, useState } from "react";

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

function NewArrivalCard({ product, onDragStart }) {
  return (
    <article
      className="w-[78vw] min-w-[78vw] max-w-[290px] snap-start sm:w-auto sm:min-w-[216px] sm:max-w-none lg:min-w-[232px]"
      draggable={false}
      onDragStart={onDragStart}
    >
      <a
        className="group block select-none no-underline"
        href="#"
        draggable={false}
        onDragStart={onDragStart}
      >
        <div
          className={`pointer-events-none flex min-h-[192px] items-center justify-center overflow-hidden rounded-[18px] border border-[#eff0f2] px-3 py-3.5 transition duration-200 group-hover:-translate-y-0.5 group-hover:shadow-[0_10px_20px_rgba(15,23,42,0.05)] sm:min-h-[200px] sm:rounded-[20px] sm:px-3.5 sm:py-4 ${product.panelClassName}`}
        >
          <Image
            className={`pointer-events-none h-auto w-auto object-contain ${product.imageClassName}`}
            src={product.src}
            alt={product.alt}
            width={product.width}
            height={product.height}
            sizes="(min-width: 1024px) 232px, (min-width: 640px) 216px, 78vw"
            draggable={false}
          />
        </div>

        <div className="pointer-events-none pt-2.5 sm:pt-3">
          <h3 className="max-w-[16ch] text-[0.95rem] font-medium leading-[1.3] text-[#1d1d1f] sm:max-w-[18ch] sm:text-[0.88rem]">
            {product.name}
          </h3>
          <p className="mt-1.5 text-[0.92rem] font-medium text-[#6e6e73] sm:mt-2 sm:text-[0.86rem]">
            {product.price}
          </p>
        </div>
      </a>
    </article>
  );
}

export default function ProductCarouselSection({
  products,
  title = "New Arrivals",
  subtitle = "The latest Apple favorites, just landed.",
  ariaLabel = "New arrivals",
  className = "",
}) {
  const scrollerRef = useRef(null);
  const momentumFrameRef = useRef(null);
  const dragStateRef = useRef({
    pointerId: null,
    startX: 0,
    startScrollLeft: 0,
    lastClientX: 0,
    lastTimestamp: 0,
    velocity: 0,
    hasDragged: false,
    preventClick: false,
  });
  const [isDragging, setIsDragging] = useState(false);

  function stopMomentum() {
    if (momentumFrameRef.current !== null) {
      cancelAnimationFrame(momentumFrameRef.current);
      momentumFrameRef.current = null;
    }
  }

  function startMomentum() {
    const scroller = scrollerRef.current;
    if (!scroller) {
      return;
    }

    stopMomentum();

    let velocity = dragStateRef.current.velocity;
    if (Math.abs(velocity) < 0.08) {
      return;
    }

    let previousTime = performance.now();

    const step = (currentTime) => {
      const currentScroller = scrollerRef.current;
      if (!currentScroller) {
        momentumFrameRef.current = null;
        return;
      }

      const deltaTime = currentTime - previousTime;
      previousTime = currentTime;

      currentScroller.scrollLeft += velocity * deltaTime;

      const decay = Math.pow(0.94, deltaTime / 16);
      velocity *= decay;

      const atStart = currentScroller.scrollLeft <= 0;
      const atEnd =
        currentScroller.scrollLeft >=
        currentScroller.scrollWidth - currentScroller.clientWidth;

      if (Math.abs(velocity) < 0.02 || atStart || atEnd) {
        momentumFrameRef.current = null;
        return;
      }

      momentumFrameRef.current = requestAnimationFrame(step);
    };

    momentumFrameRef.current = requestAnimationFrame(step);
  }

  function handlePointerDown(event) {
    if (event.pointerType === "touch" || event.button !== 0) {
      return;
    }

    const scroller = scrollerRef.current;
    if (!scroller) {
      return;
    }

    event.preventDefault();
    stopMomentum();

    dragStateRef.current.pointerId = event.pointerId;
    dragStateRef.current.startX = event.clientX;
    dragStateRef.current.startScrollLeft = scroller.scrollLeft;
    dragStateRef.current.lastClientX = event.clientX;
    dragStateRef.current.lastTimestamp = event.timeStamp;
    dragStateRef.current.velocity = 0;
    dragStateRef.current.hasDragged = false;
    dragStateRef.current.preventClick = false;

    setIsDragging(true);
    scroller.setPointerCapture?.(event.pointerId);
  }

  function handlePointerMove(event) {
    if (dragStateRef.current.pointerId !== event.pointerId) {
      return;
    }

    const scroller = scrollerRef.current;
    if (!scroller) {
      return;
    }

    const deltaX = event.clientX - dragStateRef.current.startX;

    if (!dragStateRef.current.hasDragged && Math.abs(deltaX) > 4) {
      dragStateRef.current.hasDragged = true;
      dragStateRef.current.preventClick = true;
    }

    if (!dragStateRef.current.hasDragged) {
      return;
    }

    if (event.cancelable) {
      event.preventDefault();
    }
    scroller.scrollLeft = dragStateRef.current.startScrollLeft - deltaX;

    const deltaTime = event.timeStamp - dragStateRef.current.lastTimestamp;
    if (deltaTime > 0) {
      const pointerVelocity =
        (dragStateRef.current.lastClientX - event.clientX) / deltaTime;

      dragStateRef.current.velocity =
        dragStateRef.current.velocity * 0.72 + pointerVelocity * 0.28;
      dragStateRef.current.lastClientX = event.clientX;
      dragStateRef.current.lastTimestamp = event.timeStamp;
    }
  }

  function finishDragging(pointerId, shouldContinueMomentum = true) {
    const scroller = scrollerRef.current;
    const activePointerId = dragStateRef.current.pointerId;
    const shouldStartMomentum =
      shouldContinueMomentum && dragStateRef.current.hasDragged;

    dragStateRef.current.pointerId = null;
    dragStateRef.current.startX = 0;
    dragStateRef.current.startScrollLeft = 0;
    dragStateRef.current.hasDragged = false;

    if (
      scroller &&
      activePointerId !== null &&
      pointerId !== null &&
      scroller.hasPointerCapture?.(activePointerId)
    ) {
      scroller.releasePointerCapture(activePointerId);
    }

    setIsDragging(false);

    if (shouldStartMomentum) {
      startMomentum();
    }
  }

  function handleClickCapture(event) {
    if (!dragStateRef.current.preventClick) {
      return;
    }

    dragStateRef.current.preventClick = false;
    event.preventDefault();
    event.stopPropagation();
  }

  function handlePointerUp(event) {
    if (dragStateRef.current.pointerId !== event.pointerId) {
      return;
    }

    finishDragging(event.pointerId);
  }

  function handlePointerCancel(event) {
    if (dragStateRef.current.pointerId !== event.pointerId) {
      return;
    }

    dragStateRef.current.preventClick = false;
    finishDragging(event.pointerId, false);
  }

  function handleLostPointerCapture(event) {
    if (dragStateRef.current.pointerId !== event.pointerId) {
      return;
    }

    finishDragging(event.pointerId);
  }

  function handleNativeDragStart(event) {
    event.preventDefault();
  }

  return (
    <section
      className={`bg-white px-3 pb-12 pt-0 sm:px-3 sm:pb-[68px] md:px-[14px] lg:px-4 lg:pb-[80px] ${className}`}
      aria-label={ariaLabel}
    >
      <div className="mx-auto max-w-[1060px]">
        <div className="flex flex-col gap-2.5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-[clamp(1.45rem,6.8vw,2.6rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-[#1d1d1f]">
              {title}
            </h2>
            <p className="mt-1 text-[0.82rem] leading-[1.45] text-[#6e6e73] sm:mt-1.5 sm:text-[0.9rem]">
              {subtitle}
            </p>
          </div>

          <a
            className="inline-flex items-center gap-1.5 self-start text-[0.8rem] font-medium text-[#ff3036] transition duration-200 hover:text-[#e62b28] sm:self-auto sm:text-[0.82rem]"
            href="#"
          >
            <span>View All</span>
            <ArrowIcon className="h-[11px] w-[11px]" />
          </a>
        </div>

        <div className="mt-5 sm:mt-6">
          <div
            ref={scrollerRef}
            className={`new-arrivals-scroll -mx-3 flex snap-x snap-mandatory gap-3 overflow-x-auto px-3 pb-3 sm:mx-0 sm:gap-4 sm:px-0 lg:gap-5 ${isDragging ? "select-none" : ""}`}
            data-dragging={isDragging ? "true" : "false"}
            onClickCapture={handleClickCapture}
            onDragStart={handleNativeDragStart}
            onPointerCancel={handlePointerCancel}
            onPointerDownCapture={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onLostPointerCapture={handleLostPointerCapture}
          >
            {products.map((product) => (
              <NewArrivalCard
                key={product.name}
                product={product}
                onDragStart={handleNativeDragStart}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
