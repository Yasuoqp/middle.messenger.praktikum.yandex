import { render } from '@utils/render';
import './form.scss';
import templateSource from './Form.hbs?raw';
import { Input } from '@components/customInput/Input';
import { Button } from '@components/customButton/Button';

interface IField {
    type?: string;
    placeholder?: string;
    className?: string;
}

interface IFormProps {
    title: string;
    fields: Array<IField>;
    buttonText: string;
    linkHref: string;
    linkText: string;
    formId: string;
}

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