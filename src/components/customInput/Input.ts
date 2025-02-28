import './Input.scss';
import { render } from '@utils/render';
import templateSource from './Input.hbs?raw';

interface InputProps {
  type?: string;
  placeholder?: string;
  className?: string;
}

export function Input({ type = 'text', placeholder = '', className = '' }: InputProps): string {
  return render(templateSource, { type, placeholder, class: className });
}
