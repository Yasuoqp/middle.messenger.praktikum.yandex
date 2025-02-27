import { render } from '@utils/render';
import './form.scss';
import templateSource from './Form.hbs?raw';
import { Input } from '@components/customInput/Input';
import { Button } from '@components/customButton/Button';

export function Form(props: IFormProps): string {
    const renderedFields = props.fields.map(field =>
        Input({
            type: field.type,
            placeholder: field.placeholder,
            className: field.className
        })
    );

    const button = Button({
        text: props.buttonText,
    });

    return render(templateSource, {
        title: props.title,
        fields: renderedFields,
        button,
        linkHref: props.linkHref,
        linkText: props.linkText,
        formId: props.formId
    });
}