import { render } from "@src/utils/render";
import profileItems from './ProfileItems.hbs?raw';

export function ProfileItems(user: IUser): string {
    return render(profileItems, user);
  }
