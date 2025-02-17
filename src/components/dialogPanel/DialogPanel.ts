import Handlebars from 'handlebars';
import { DialogItem } from './dialogItem/DialogItem';
import dialogPanelTemplate from './DialogPanel.hbs?raw';
import searchIcon from '@assets/svg/search.svg';
import './dialogPanel.scss';

const compiledDialogPanelTemplate = Handlebars.compile(dialogPanelTemplate);

export function DialogPanel(context: {
    items: Array<{
        id: number;
        url: string;
        name: string;
        message: string;
        time: string;
        notification: string;
    }>;
}) {
    const itemsHtml = context.items.map(item => DialogItem(item)).join('');
    return compiledDialogPanelTemplate({
        items: itemsHtml,
        searchIcon
    });
}
