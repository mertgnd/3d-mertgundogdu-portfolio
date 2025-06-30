import React from 'react';

const easeInOutQuad = (t, b, c, d) => {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t + b;
  t--;
  return (-c / 2) * (t * (t - 2) - 1) + b;
};

const scrollToWithOffset = (element, offset = 0, duration = 600) => {
  const startY = window.pageYOffset;
  const targetY =
    element.getBoundingClientRect().top + startY - offset;
  const distance = targetY - startY;
  let startTime = null;

  const step = (timestamp) => {
    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const nextY = easeInOutQuad(elapsed, startY, distance, duration);
    window.scrollTo(0, nextY);
    if (elapsed < duration) {
      window.requestAnimationFrame(step);
    } else {
      // ensure we land exactly
      window.scrollTo(0, targetY);
    }
  };

  window.requestAnimationFrame(step);
};

const Button = ({ text, className, id }) => {
  const handleClick = (e) => {
    e.preventDefault();
    if (!id) return;
    const target = document.getElementById(id);
    if (!target) return;

    const offset = window.innerHeight * 0.15; // 15% viewport
    scrollToWithOffset(target, offset, 600);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`${className ?? ''} cta-wrapper`}
    >
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow down" />
        </div>
      </div>
    </button>
  );
};

export default Button;
