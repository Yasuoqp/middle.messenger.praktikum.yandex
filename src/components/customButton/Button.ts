import { render } from '@src/utils/render';
import './button.scss';
import templateSource from './Button.hbs?raw';

interface IbtnProps {
  type?: string;
  text?: string;
  className?: string;
}

export function Button({ type = 'submit', text = '', className = '' }: IbtnProps): string {
  return render(templateSource, { type, text, class: className });
}