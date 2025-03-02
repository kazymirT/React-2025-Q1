import { Character } from 'rickmortyapi';

const getCsvHeaders = (array: Character[]): string[] => {
  return Object.keys(array[0]);
};

const convertToCsvRows = (array: Character[]): string[][] => {
  const headers = getCsvHeaders(array);
  const rows = array.map((item) => Object.values(item).map(String));
  return [headers, ...rows];
};

const generateCsvContent = (rows: string[][]): string => {
  return rows.map((row) => row.join(';')).join('\n');
};

const createCsvBlobUrl = (csvContent: string): string => {
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8,' });
  return URL.createObjectURL(blob);
};

export const createCsv = (array: Character[]): string => {
  const csvRows = convertToCsvRows(array);
  const csvContent = generateCsvContent(csvRows);
  return createCsvBlobUrl(csvContent);
};
