export const formatToCurrency = (value: number): string => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(value);
}

export const formatInteger = (value: number): string => {
    return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(value);
}

export const formatToShortCurrency = (value: number): string => {
    let suffix = '';
    let formattedValue = value;

    if (value >= 1_000_000) {
        // For millions
        formattedValue = value / 1_000_000;
        suffix = 'M';
    } else if (value >= 100) {
        // For thousands, formatted with one decimal place
        formattedValue = value / 1_000;
        suffix = 'K';
    } else {
        // For values less than 1,000, return the number as is
        return `$${formattedValue.toFixed(1)}`;
    }

    // Round the formatted value to one decimal place
    formattedValue = Math.round(formattedValue * 10) / 10;

    // Return formatted currency with the appropriate suffix
    return `$${formattedValue}${suffix}`;
}

// Utility function to generate a random 6-character string
export const generateRandomId = (): string => {
    return Math.random().toString(36).substring(2, 8);
};

export const toDecimalPlaces = (num: number, decimals = 2) : string => {
    return num.toFixed(decimals);
}
