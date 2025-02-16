import Handlebars from 'handlebars';
import dialogItemTemplate from './DialogItem.hbs?raw';
import './dialogItem.scss';
const compiledDialogItemTemplate = Handlebars.compile(dialogItemTemplate);

export function DialogItem(context: {
    url: string;
    name: string;
    message: string;
    time: string;
    notification: string;
}) {
    return compiledDialogItemTemplate(context);
}
