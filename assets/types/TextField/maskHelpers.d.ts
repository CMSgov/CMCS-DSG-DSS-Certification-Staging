/**
 * Performs various transforms to format provided string as currency.
 * @param {String} value - a string containing at least one digit
 * @returns {String}
 */
export declare function toCurrency(value: string): string;
/**
 * Returns the value with additional masking characters, or the same value back if invalid numeric string
 * @param {String} value
 * @returns {String}
 */
export declare function maskValue(value: string, mask: string): string;
/**
 * Remove mask characters from value, or the same value back if invalid numeric string
 * @param {String} value
 * @param {String} mask
 * @returns {String}
 */
export declare function unmaskValue(value: string, mask: string): string;
