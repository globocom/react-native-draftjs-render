import { InlineStyleRange, InlineType } from './typings';

export default function getItemType(item: InlineStyleRange): InlineType[] {
  if (!item.style || !Array.isArray(item.style)) return [];
  return item.style.map((i) => i.toLowerCase() as InlineType);
}
