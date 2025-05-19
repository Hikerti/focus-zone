import { toBlob } from 'html-to-image';

export const takeMapScreenshot = async () => {
    const element = document.getElementById("map_container");
    if (!element) return;

    const blob = await toBlob(element);
    if (blob) {
        const url = URL.createObjectURL(blob);
        return url;
    }
};