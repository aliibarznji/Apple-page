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
            draggable={false}
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

export default function NewArrivalsSection({ products }) {
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

    event.preventDefault();
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

  function handleClickCapture(event) {
    if (!dragStateRef.current.preventClick) {
      return;
    }

    dragStateRef.current.preventClick = false;
    event.preventDefault();
    event.stopPropagation();
  }

  return (
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
          <div
            ref={scrollerRef}
            className={`new-arrivals-scroll flex snap-x snap-proximity gap-4 overflow-x-auto pb-3 sm:gap-5 lg:gap-6 ${isDragging ? "select-none" : ""}`}
            data-dragging={isDragging ? "true" : "false"}
            onClickCapture={handleClickCapture}
            onPointerCancel={handlePointerCancel}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onLostPointerCapture={handleLostPointerCapture}
          >
            {products.map((product) => (
              <NewArrivalCard key={product.name} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
