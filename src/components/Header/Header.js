import "./Header.css";

export function Header({ children }) {
  return (
    <header className="header">
      <h1>{children}</h1>
    </header>
  );
}
