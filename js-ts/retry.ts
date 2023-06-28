export const retry = async (promise, times: number, waitFor: number = 2000) => {
    for (let index = 0; index <= times; index++) {
        const result = await promise();
        if (result) {
            return result
        }
        await new Promise(r => setTimeout(r, waitFor));
    }
}