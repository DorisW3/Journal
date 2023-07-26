import "./form.css";
import { uid } from "uid";

export function Form({ onAddEntry }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const date = new Date().toLocaleDateString("en-us", {
      dateStyle: "medium",
    });

    const newEntry = {
      id: uid(),
      motto: data.motto,
      notes: data.notes,
      date: date,
    };

    onAddEntry(newEntry);
    event.target.reset();
    event.target.elements.motto.focus();
  }
  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2 className="h2">new entry</h2>
      <div className="motto__container">
        <label htmlFor="motto">Motto</label>
        <input className="motto" type="text" id="motto" required></input>
      </div>
      <div className="notes__container">
        <label htmlFor="notes">Notes</label>
        <textarea className="notes" type="text" id="notes" required></textarea>
      </div>
      <div className="button__container">
        <button className="button" type="submit">
          Create
        </button>
      </div>
    </form>
  );
}
