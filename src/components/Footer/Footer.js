import "./Footer.css";

export function Footer() {
  const currentDate = new Date();

  return <span className="footer">{currentDate.toDateString()}</span>;
}
