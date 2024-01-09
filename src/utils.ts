export default function roundUpPrice(number: number, closestRule: number): number {
    const roundedNumber = Math.ceil(number * closestRule) / closestRule;
    const formattedNumber = Number(roundedNumber.toFixed(2));

    return formattedNumber;
}