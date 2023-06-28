export default function formatUTCDate(value: string): string {
    return value.split('T')[0]
}