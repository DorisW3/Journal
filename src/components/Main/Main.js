//entry form & entries section
import "./main.css";

export function Main({ children }) {
  return (
    <main>
      <h2 className="h2">new entry</h2>
      {children}
    </main>
  );
}
