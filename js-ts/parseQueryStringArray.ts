export default function parseQueryStringArray(queryValue: string | string[]): string[] {
    if (!queryValue) {
        return [];
    }

    if (typeof queryValue === 'string') {
        return [queryValue]
    } else {
        return queryValue
    }
}