const stringify = (value: any): string => {
    switch (typeof value) {
        case 'string':
            return value
        case 'object':
            return JSON.stringify(value);
        default:
            return String(value);
    }
};

export default stringify;