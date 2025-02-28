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