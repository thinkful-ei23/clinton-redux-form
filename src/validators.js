export const required = value => (value ? undefined : 'Required');
export const nonEmpty = value =>
    value.trim() !== '' ? undefined : 'Cannot be empty';
export const is5Chars = value => (value.length === 5 ? undefined : 'Must be 5 numbers');
export const isNum = value => (value == Number(value) ? undefined : 'Must be a number');
