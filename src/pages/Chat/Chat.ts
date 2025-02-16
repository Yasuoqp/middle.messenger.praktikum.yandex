import { DialogPanel } from "@src/components/dialogPanel/DialogPanel";
import { ChatWindow } from "@src/components/chatWindow/ChatWindow";
import './Chat.scss';

export function ChatPage() {
  const dialogs = [
    {
      id: 1,
      url: '/avatar1.jpg',
      name: 'Иван Иванов',
      message: 'Привет! Как дела?',
      time: '10:30',
      notification: '2'
    },
    {
      id: 2,
      url: '/avatar2.jpg',
      name: 'Мария Петрова',
      message: 'Добрый день! Все хорошо, спасибо!',
      time: '11:45',
      notification: '1'
    }
  ];

  const chatData = {
    partner: {
      name: 'Иван Иванов',
      status: 'online',
      avatarUrl: '/avatar1.jpg'
    },
    messages: [
      {
        type: 'received' as const,
        content: 'Привет! Как дела?',
        time: '10:30'
      },
      {
        type: 'sent' as const,
        content: 'Всё отлично, спасибо!',
        time: '10:32'
      }
    ]
  };

  return `
    <div class="chat-container">
      <aside class="chat-sidebar">
        ${DialogPanel({ items: dialogs })}
      </aside>
      ${ChatWindow(chatData)}
    </div>
  `;
}