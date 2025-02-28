import { Form } from "@src/components/customForm/Form";


export function LoginPage(): string {
  return Form({
    title: 'Вход',
    formId: 'login-form',
    fields: [
      {
        type: 'email',
        placeholder: 'Введите email'
      },
      {
        type: 'password',
        placeholder: 'Введите пароль'
      }
    ],
    buttonText: 'Авторизоваться',
    linkHref: '/register',
    linkText: 'Нет Аккаунта?'
  });
}