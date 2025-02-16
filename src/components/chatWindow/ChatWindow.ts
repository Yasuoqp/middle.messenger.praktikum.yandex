import Handlebars from 'handlebars';
import template from './ChatWindow.hbs?raw';
import './ChatWindow.scss';

interface Message {
  type: 'sent' | 'received';
  content: string;
  time: string;
}

export interface ChatWindowProps {
  partner: {
    name: string;
    status: string;
    avatarUrl: string;
  };
  messages: Message[];
}

export function ChatWindow({ partner, messages }: ChatWindowProps) {
  const compiledTemplate = Handlebars.compile(template);
  return compiledTemplate({ partner, messages });
}