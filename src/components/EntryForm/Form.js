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
        <input className="notes" type="text" id="notes"></input>
      </div>
      <div className="button__container">
        <Button>Create</Button>
      </div>
    </form>
  );
}

function Button({ children }) {
  return (
    <div>
      <button className="button" type="button">
        {children}
      </button>
    </div>
  );
}
