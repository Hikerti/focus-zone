export const muniteParseHour = (minute: number) => {
    const hour = Math.floor(minute / 3600);
    const minutes = minute % 60;

    return {hour, minutes};
}