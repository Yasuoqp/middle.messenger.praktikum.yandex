import './Chat.scss';
import { Dialog } from "@src/types/chatType";
import { ChatWindow } from "@src/components/chatWindow/ChatWindow";
import { DialogPanel } from "@src/components/dialogPanel/DialogPanel";

export function ChatPage() {

  const dialogs: Dialog[] = [
    {
      id: 1,
      url: '/avatar1.jpg',
      name: 'Иван Иванов',
      message: 'Привет! Как дела?',
      time: '10:30',
      notification: '2',
      chatData: {
        partner: {
          name: 'Иван Иванов',
          status: 'online',
          avatarUrl: '/avatar1.jpg'
        },
        messages: [
          {

            type: 'received',
            content: 'Привет! Как дела?',
            time: '10:30'
          },
          {

            type: 'sent',
            content: 'Всё отлично, спасибо!',
            time: '10:32'
          }
        ]
      }
    },
    {
      id: 2,
      url: '/avatar2.jpg',
      name: 'Мария Петрова',
      message: 'Добрый день! Все хорошо, спасибо!',
      time: '11:45',
      notification: '1',
      chatData: {
        partner: {
          name: 'Мария Петрова',
          status: 'offline',
          avatarUrl: '/avatar2.jpg'
        },
        messages: [
          {

            type: 'received',
            content: 'Добрый день!',
            time: '11:45'
          },
          {

            type: 'sent',
            content: 'Рада это слышать!',
            time: '11:47'
          }
        ]
      }
    }

  ];

  return `
    <div class="chat-container">
      <aside class="chat-sidebar">
        ${DialogPanel({ items: dialogs })}
      </aside>
      ${ChatWindow(dialogs[0].chatData)}
    </div>
  `;
}