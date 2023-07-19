export function Footer() {
  const currentDate = new Date();

  return <span>{currentDate.toDateString()}</span>;
}
