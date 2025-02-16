import { DialogPanel } from "@src/components/dialogPanel/DialogPanel";

export function ChatPage() {
    const dialogs = [
        {
            id:1,
            url: '/avatar1.jpg',
            name: 'Иван Иванов',
            message: 'Привет! Как дела?',
            time: '10:30',
            notification: '2'
        },
        {
            id:2,
            url: '/avatar2.jpg',
            name: 'Мария Петрова',
            message: 'Добрый день!',
            time: '11:45',
            notification: '1'
        }
    ];

    return `
        <div class="chat">
            ${DialogPanel({ items: dialogs })}
            <!-- Остальная часть чата -->
        </div>
    `;
}