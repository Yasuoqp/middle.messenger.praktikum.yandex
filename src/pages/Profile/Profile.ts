import './Profile.scss';
import { render } from '@src/utils/render';
import { ProfileItems } from './profileItems';
import ProfilePageTemplate from './Profile.hbs?raw';

export function ProfilePage(): string {
  const user: IUser = {
    email: 'test@example.com',
    login: 'testuser',
    firstName: 'John',
    lastName: 'Doe',
    phone: '+1234567890',
    chatName: 'johndoe',
    avatar: 'https://example.com/avatar.jpg',
  };
  const profileContent = ProfileItems(user);

  return render(ProfilePageTemplate, {
    profileContent,
    avatar: user.avatar,
  });
}