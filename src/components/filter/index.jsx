import { useState } from "react";
import "./style.scss";
import filterData from "../../data/filter.json";

export const Filter = () => {
  const [activeGame, setActiveGame] = useState();
  const [activeRating, setActiveRating] = useState();

  return (
    <div className="filter-container">
      <div className="filter-content">
        <div className="filter-game">
          <h4> Game Genre</h4>

          {filterData.map((game, index) => {
            const active = index === activeGame ? "active" : "";
            return (
              <div>
                <label onClick={() => setActiveGame(index)}>
                  <span key={game.id} className={active}></span>
                  {game.name}
                </label>
              </div>
            );
          })}
        </div>
        <div className="filter-rating">
          <h4> Rating</h4>
          {filterData.map((game, index) => {
            const active = index === activeRating ? "active" : "";
            return (
              <div>
                <label onClick={() => setActiveRating(index)}>
                  <span key={game.id} className={active}></span>
                  {game.target}
                </label>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
