export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
export function capitalizeLetter(string) {
  const capitalizedFirstLetter = capitalizeFirstLetter(string);
  return (
    capitalizedFirstLetter.charAt(0) +
    capitalizedFirstLetter.slice(1).toLowerCase()
  );
}
