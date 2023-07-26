//import { Badge } from "react";
import "./EntriesSection.css";
//import { Tab, Tabs } from "react";
import { Entry } from "../EntriesList/EntriesList";
import { Fragment } from "react";
import Divider from "../Divider";

// tabbar with two tabs(badge with number of entries) & an entrylist (title, date, a text, a favorite icon button)

export function EntriesSection({ entries, filledStar }) {
  return (
    <section className="entries-section">
      <div className="entries-section__entries">
        {entries.map((entry, index) => (
          <Fragment key={entry.id}>
            {index > 0 ? <Divider /> : null}
            <Entry
              date={entry.date}
              motto={entry.motto}
              notes={entry.notes}
              filledStar={filledStar}
              id={entry.id}
              isFavorite={entry.isFavorite}
            />
          </Fragment>
        ))}
      </div>
    </section>
  );
}
