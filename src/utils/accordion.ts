/**
 * Initialize accordion functionality with exclusive open behavior
 * Only one accordion item can be open at a time
 */
export function initializeAccordion(
  buttonSelector: string,
  contentSelector: string,
  iconPlusSelector: string,
  iconMinusSelector: string
): void {
  const buttons = document.querySelectorAll(buttonSelector);

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const content = button.nextElementSibling as HTMLElement;
      const plusIcon = button.querySelector(iconPlusSelector) as HTMLElement;
      const minusIcon = button.querySelector(iconMinusSelector) as HTMLElement;
      const isOpen = content.style.maxHeight && content.style.maxHeight !== '0px';

      // Close all other items
      buttons.forEach((otherButton) => {
        const otherContent = otherButton.nextElementSibling as HTMLElement;
        const otherPlusIcon = otherButton.querySelector(iconPlusSelector) as HTMLElement;
        const otherMinusIcon = otherButton.querySelector(iconMinusSelector) as HTMLElement;

        otherContent.style.maxHeight = '0';
        otherPlusIcon?.classList.remove('hidden');
        otherMinusIcon?.classList.add('hidden');
        otherButton.setAttribute('aria-expanded', 'false');
      });

      // Toggle current item
      if (!isOpen) {
        content.style.maxHeight = content.scrollHeight + 'px';
        plusIcon?.classList.add('hidden');
        minusIcon?.classList.remove('hidden');
        button.setAttribute('aria-expanded', 'true');
      } else {
        button.setAttribute('aria-expanded', 'false');
      }
    });
  });
}
