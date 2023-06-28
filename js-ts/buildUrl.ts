import stringify from "./stringify";

const buildUrl = (basePath: string, queryParams: {
    [key: string]: any
}): string => {
    const search_params = new URLSearchParams();
    if (queryParams) {
        Object.keys(queryParams).forEach(x => {
            if (queryParams[x]) {
                const value = stringify(queryParams[x]);
                if (value.length > 0) {
                    search_params.set(x, value)
                }
            }
        })
    }

    return `${basePath}?${search_params.toString()}`
}

export default buildUrl;