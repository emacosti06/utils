import { format, formatDistance, formatRelative, isAfter, subDays } from "date-fns";

const epochs: [string, number][] = [
    ['year', 31536000],
    ['month', 2592000],
    ['day', 86400],
    ['hour', 3600],
    ['minute', 60],
    ['second', 1],
];

const getDuration = (timeAgoInSeconds: number) => {
    // eslint-disable-next-line no-restricted-syntax
    for (const [name, seconds] of epochs) {
        const interval = Math.floor(timeAgoInSeconds / seconds);
        if (interval >= 1) {
            return {
                interval,
                epoch: name,
            };
        }
    }
    return { interval: 0, epoch: 'second' }

};

export const timeAgoShort = (date: string | number | Date) => {
    if (!date)
        return
    const timeAgoInSeconds = Math.floor((new Date().valueOf() - new Date(date).valueOf()) / 1000);
    const { interval, epoch } = getDuration(timeAgoInSeconds);
    const suffix = interval === 1 ? '' : 's';
    return `${interval} ${epoch}${suffix} ago`;
};

export const timeAgoLong = (value: Date) => {
    let result = '';
    if (isAfter(value, subDays(new Date(), 7))) {
        result = `${formatDistance(value, new Date()).replace('about', '').trim()} ago`
    } else {
        result = format(value, "yyyy-MM-dd")
    }

    result = `${result[0].toUpperCase()}${result.slice(1)}`
    return result
}