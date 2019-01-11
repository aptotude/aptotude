export const isValuePresent = (value: any) =>
  value !== null &&
  value !== undefined &&
  value !== '' &&
  !(typeof value === 'number' && Number.isNaN(value));
