import "./form.css";

export function Form() {
  return (
    <form className="form">
      <h2 className="h2">new entry</h2>
      <div className="motto__container">
        <label htmlFor="motto">Motto</label>
        <input className="motto" type="text" id="motto"></input>
      </div>
      <div className="notes__container">
        <label htmlFor="notes">Notes</label>
        <textarea className="notes" type="text" id="notes"></textarea>
      </div>
      <div className="button__container">
        <button className="button" type="button">
          Create
        </button>
      </div>
    </form>
  );
}
