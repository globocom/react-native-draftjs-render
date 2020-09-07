export default function getItemType(item) {
    if (!item.style)
        return [];
    if (!Array.isArray(item.style)) {
        if (typeof item.style === 'string')
            return [item.style.toLowerCase()];
        return [];
    }
    return item.style.map((i) => i.toLowerCase());
}
