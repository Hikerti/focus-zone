export const minuteParseHour = (minute: number) => {
    const hour = Math.floor(minute / 60);
    const minutes = minute % 60;

    return {hour, minutes};
}

