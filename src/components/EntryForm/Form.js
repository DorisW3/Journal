import "./form.css";

export function Form({ entries, setNewEntries }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    setNewEntries(data.entries);

    event.target.reset();
    //event.target.element.???.focus(); 
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2 className="h2">new entry</h2>
      <div className="motto__container">
        <label htmlFor="motto">Motto</label>
        <input
          className="motto"
          type="text"
          id="motto"
          name="text"
          required
        ></input>
      </div>
      <div className="notes__container">
        <label htmlFor="notes">Notes</label>
        <textarea
          className="notes"
          type="text"
          id="notes"
          name="text"
          required
        ></textarea>
      </div>
      <div className="button__container">
        <button className="button" type="submit">
          Create
        </button>
      </div>
    </form>
  );
}
