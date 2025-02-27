type MessageType = 'received' | 'sent';
interface Message {
    type: MessageType;
    content: string;
    time: string;
  }

  interface Partner {
    name: string;
    status: 'online' | 'offline';
    avatarUrl: string;
  }

  interface ChatData {
    partner: Partner;
    messages: Message[];
  }

export  interface Dialog {
    id: number;
    url: string;
    name: string;
    message: string;
    time: string;
    notification: string;
    chatData: ChatData;
  }