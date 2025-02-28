import Handlebars from 'handlebars';

export function render(templateSource: string, context: object): string {
  return Handlebars.compile(templateSource)(context);
}