import React, { Fragment } from "react";
import { useState } from "react";
import { ReactComponent as StarFilled } from "./star-filled.svg";
import { ReactComponent as Star } from "./star.svg";
import "./FavoriteButton.css";

export function FavoriteButton() {
  const [filledStar, setFilledStar] = useState(false);

  return (
    <>
      <div className="favorite-button__container">
        <button
          className="favorite-button"
          onClick={() => {
            setFilledStar(!filledStar);
          }}
        >
          {filledStar ? <StarFilled /> : <Star />}
        </button>
      </div>
    </>
  );
}
