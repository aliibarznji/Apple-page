async (page) => {
  return await page.evaluate(async () => {
    const scroller = document.querySelector('[aria-label="New arrivals"] .new-arrivals-scroll');
    const firstCard = document.querySelector('[aria-label="New arrivals"] article a');
    if (!scroller || !firstCard) {
      throw new Error('Scroller or first card not found.');
    }

    const rect = firstCard.getBoundingClientRect();
    const startX = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const endX = rect.left + 18;
    const pointerId = 91;

    const before = scroller.scrollLeft;

    firstCard.dispatchEvent(new PointerEvent('pointerdown', {
      bubbles: true,
      cancelable: true,
      button: 0,
      clientX: startX,
      clientY: y,
      pointerId,
      pointerType: 'mouse'
    }));

    scroller.dispatchEvent(new PointerEvent('pointermove', {
      bubbles: true,
      cancelable: true,
      button: 0,
      clientX: endX,
      clientY: y,
      pointerId,
      pointerType: 'mouse'
    }));

    scroller.dispatchEvent(new PointerEvent('pointerup', {
      bubbles: true,
      cancelable: true,
      button: 0,
      clientX: endX,
      clientY: y,
      pointerId,
      pointerType: 'mouse'
    }));

    await new Promise((resolve) => requestAnimationFrame(() => resolve()));

    return {
      before,
      after: scroller.scrollLeft,
      delta: scroller.scrollLeft - before,
      dragging: scroller.getAttribute('data-dragging')
    };
  });
}
