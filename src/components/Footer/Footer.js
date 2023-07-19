export function Footer() {
  const currentDate = new Date();

  return <span>Journal App - {currentDate.toDateString()}</span>;
}
