import Handlebars from 'handlebars';
import template from './WidgetModal.hbs?raw';
import './WidgetModal.scss';

export interface WidgetModalProps {
  menuItems: string[];
}

export function WidgetModal({ menuItems }: WidgetModalProps) {
  const compiledTemplate = Handlebars.compile(template);
  const html = compiledTemplate({ menuItems });
  
  // Добавляем обработчики после создания DOM
  setTimeout(() => {
    const triggers = document.querySelectorAll('.widget-modal__trigger');
    triggers.forEach(trigger => {
      const menu = trigger.nextElementSibling as HTMLElement;
      
      // Обработчик клика по триггеру
      trigger.addEventListener('click', (e) => {
        e.stopPropagation();
        const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
        trigger.setAttribute('aria-expanded', (!isExpanded).toString());
      });

      // Закрытие меню при клике вне области
      document.addEventListener('click', (e) => {
        if (!menu.contains(e.target as Node) && !trigger.contains(e.target as Node)) {
          trigger.setAttribute('aria-expanded', 'false');
        }
      });
    });
  });

  return html;
}