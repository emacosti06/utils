const deepCompare = (obj1: any, obj2: any): boolean => {
    // Check if both objects are of the same type
    if (typeof obj1 !== typeof obj2) {
        return true;
    }

    // Handle null or primitive values
    if (obj1 === null || typeof obj1 !== 'object' || obj2 === null || typeof obj2 !== 'object') {
        return obj1 !== obj2;
    }

    // Compare object keys
    const keys1 = Object.keys(obj1).filter(key => obj1[key] !== undefined);
    const keys2 = Object.keys(obj2).filter(key => obj2[key] !== undefined);

    if (keys1.length !== keys2.length) {
        return true;
    }

    // Recursively compare nested objects
    for (const key of keys1) {
        if (!deepCompare(obj1[key], obj2[key])) {
            return false;
        }
    }

    return true;
}

export default deepCompare;