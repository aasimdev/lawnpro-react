type TableData = Record<string, any>;

export const getColumnNames = <T extends TableData>(data: T[]): (keyof T)[] => {
    if (data.length === 0) return [];
    return Object.keys(data[0]) as (keyof T)[];
}
