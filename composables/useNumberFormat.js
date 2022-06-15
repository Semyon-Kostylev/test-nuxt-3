export default function useNumberFormat(value) {
  return new Intl.NumberFormat().format(value);
}
