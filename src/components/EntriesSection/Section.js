import React, { Fragment, useState } from "react";
import "./Section.css";
import { Divider } from "../Divider/Divider.js";
import { FavoriteButton } from "../FavoriteButton/FavoriteButton.js";

// tabbar with two tabs(badge with number of entries) & an entrylist (title, date, a text, a favorite icon button)

export function EntriesSection({ entries }) {
  const initialEntries = [
    {
      id: 1000,
      date: "Feb 5, 2025",
      motto: "We are in a state of chaos",
      notes:
        "Today I learned about React State. It was fun! I can't wait to learn more.",
    },
    {
      id: 999,
      date: "Feb 4, 2025",
      motto: "Props, Props, Props",
      notes:
        "Today I learned about React Props. Mad props to everyone who understands this!",
    },
    {
      id: 998,
      date: "Feb 3, 2025",
      motto: "How to nest components online fast",
      notes:
        "Today I learned about React Components and how to nest them like a pro. Application design is so much fun!",
    },
    {
      id: 997,
      date: "Feb 2, 2025",
      motto: "I'm a React Developer",
      notes: "My React-ion when I learned about React: 😍",
    },
  ];

  const CurrentDate = new Date().toLocaleDateString("de", {
    year: "numeric",
    day: "numeric",
    month: "short",
  });

  const [entry, setEntry] = useState([initialEntries]);

  function handleAddEntry(newEntry) {
    setEntry(initialEntries, entry);
  }

  return (
    <>
      {initialEntries.map(({ id, CurrentDate, motto, notes }) => (
        <>
          <article
            data-js="article"
            className="entry"
          >
            <div className="entry__date">
              <p key={id} className="date">
                {CurrentDate}
              </p>
            </div>
            <FavoriteButton />
            <h2 key={id}>“{motto} “</h2>
            <p key={id}>{notes}</p>
          </article>
          <Divider />
        </>
      ))}
    </>
  );
}
