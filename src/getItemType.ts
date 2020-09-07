import { InlineStyleRange, InlineType } from './typings';

export default function getItemType(item: InlineStyleRange): InlineType[] {
  if (!item.style) return [];

  if (!Array.isArray(item.style)) {
    if (typeof item.style === 'string') return [item.style.toLowerCase() as InlineType];
    return [];
  }

  return item.style.map((i) => i.toLowerCase() as InlineType);
}
