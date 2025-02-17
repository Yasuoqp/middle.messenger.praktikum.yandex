import { Form } from "@src/components/customForm/Form";

export function RegisterPage(): string {
  return Form({
    title: 'Регистрация',
    formId: 'register-form',
    fields: [
      {
        type: 'email',
        placeholder: 'Почта',
      },
      {
        type: 'text',
        placeholder: 'Логин',
      },
      {
        type: 'text',
        placeholder: 'Имя',
      },
      {
        type: 'text',
        placeholder: 'Фамилия',
      },
      {
        type: 'tel',
        placeholder: 'Телефон',
      },
      {
        type: 'password',
        placeholder: 'Пароль',
      },
      {
        type: 'password',
        placeholder: 'Пароль еще раз',
      },
    ],
    buttonText: 'Зарегистрироваться',
    linkHref: '/login',
    linkText: 'Войти в аккаунт'
  });
}