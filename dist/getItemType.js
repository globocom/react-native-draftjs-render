export default function getItemType(item) {
    if (!item.style || !Array.isArray(item.style))
        return [];
    return item.style.map((i) => i.toLowerCase());
}
