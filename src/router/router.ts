import { ChatPage } from '@src/pages/Chat/Chat';
import { LoginPage } from '../pages/Login/Login';
import { RegisterPage } from '../pages/Register/Register';

const routes: Record<string, () => string> = {
  '/': ChatPage,
  '/chat': ChatPage,
  '/login': LoginPage,
  '/register': RegisterPage,
};

function navigate(path: string): void {
  const content = document.getElementById('app');
  if (content) {
    const page = routes[path] || (() => `<h1>404 Not Found</h1>`);
    content.innerHTML = page();
  }
}

export function initRouter(): void {
  window.addEventListener('popstate', () => {
    navigate(window.location.pathname);
  });

  document.addEventListener('DOMContentLoaded', () => {
    navigate(window.location.pathname);
  });

  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    if (target.tagName === 'A') {
      e.preventDefault();
      const href = target.getAttribute('href');
      if (href) {
        history.pushState(null, '', href);
        navigate(href);
      }
    }
  });
}