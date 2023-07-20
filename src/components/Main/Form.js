import "./form.css";

export function Form() {
  return (
    <form className="form">
      <legend>Motto</legend>
      <label name="inputField"></label>
      <input
        type="text"
        id="inputField"
        maxLength={50}
        row={4}
        col={50}
      ></input>
      <legend>Notes</legend>
      <label name="inputField"></label>
      <input
        type="text"
        id="inputField"
        maxLength={50}
        row={8}
        col={500}
      ></input>
      <Button>Create</Button>
    </form>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
