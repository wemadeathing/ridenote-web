import { INTERSECTION_OBSERVER_THRESHOLD, INTERSECTION_OBSERVER_MARGIN } from '../constants/navigation';

export function initializeScrollObserver() {
  const observerOptions = {
    threshold: INTERSECTION_OBSERVER_THRESHOLD,
    rootMargin: INTERSECTION_OBSERVER_MARGIN,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-on-scroll');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const sections = document.querySelectorAll('section[id]');
  sections.forEach((section) => {
    observer.observe(section);
  });
}
