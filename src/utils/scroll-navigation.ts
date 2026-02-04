import { MOBILE_MENU_SCROLL_OFFSET } from '../constants/navigation';

export function smoothScrollToElement(targetId: string): void {
  const targetElement = document.getElementById(targetId);
  if (!targetElement) return;

  const navHeight = MOBILE_MENU_SCROLL_OFFSET;
  const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;

  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth',
  });
}

export function setupAnchorLinks(selector: string = 'a[href^="#"]'): void {
  const links = document.querySelectorAll(selector);

  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = (link as HTMLAnchorElement).getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const targetId = href.substring(1);
        smoothScrollToElement(targetId);
      }
    });
  });
}
