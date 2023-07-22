import "./Footer.css";

export function Footer() {
  const currentDate = new Date().toLocaleDateString("de");

  return <footer className="footer">Journal App - {currentDate}</footer>;
}
