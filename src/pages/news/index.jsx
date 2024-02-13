import React from "react";
import "./style.scss";
import newsData from "../../data/news.json";

export const News = () => {
  return (
    <div className="news">
      <div className="news-container">
        {newsData.map((news) => {
          return (
            <div key={news.id} className="news-content">
              <div>
                <a href="">
                  <img src={news.image} alt="" />
                </a>
              </div>
              <div>
                <span className="data">{news.data}</span>
                <h3 className="name">{news.name}</h3>
                <p className="description">{news.description}</p>
                <a href="">More details</a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
