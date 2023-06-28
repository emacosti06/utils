export default interface Result<T> {
    value?: T,
    error?: {
        message: string,
    }
}

export const DefaultSuccessResult: Result<any> = {}