import "./EntriesList.css";
import { FavoriteButton } from "../FavoriteButton/FavoriteButton";

export function Entry({ date, motto, notes, filledStar, setFilledStar }) {
  return (
    <div className="entries-section__entry">
      <time className="entry__date">{date}</time>
      <div className="entry__content">
        <div className="entry__motto-container">
          <h2 className="entry__motto">
            <q>{motto}</q>
          </h2>
          <FavoriteButton
            setFilledStar={setFilledStar}
            filledStar={filledStar}
          />
        </div>
        <p className="entry__notes">{notes}</p>
      </div>
    </div>
  );
}
