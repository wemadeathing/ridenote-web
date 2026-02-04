export function initializeMobileMenu(): void {
  const menuButton = document.querySelector('.mobile-menu-button') as HTMLButtonElement | null;
  const mobileMenu = document.querySelector('.mobile-menu') as HTMLElement | null;
  const menuIcon = document.querySelector('.menu-icon') as SVGElement | null;
  const closeIcon = document.querySelector('.close-icon') as SVGElement | null;
  const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');

  if (!menuButton || !mobileMenu) return;

  menuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    menuIcon?.classList.toggle('hidden');
    closeIcon?.classList.toggle('hidden');
  });

  mobileMenuLinks.forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      menuIcon?.classList.remove('hidden');
      closeIcon?.classList.add('hidden');
    });
  });
}
