import React, { useState } from "react";
import "./style.scss";
import newsData from "../../data/news.json";
import { Slider } from "../../components/slider";
import { NewsModalBody } from "../../components/modal/newsModal/newsModalBody";
import { NewsModal } from "../../components/modal/newsModal";

export const News = () => {
  const [newsOpen, setNewsOpen] = useState(0);

  function onOpen(id) {
    setNewsOpen(id);
    document.body.style.overflow = "hidden";
  }

  function onClose() {
    setNewsOpen(-1);
    document.body.style.overflow = "unset";
  }

  return (
    <div className="news">
      <Slider />
      <div className="news-container">
        {newsData.map((news) => {
          return (
            <div key={news.id} className="news-content">
              <div>
                <img src={news.image} alt="news-image" />
              </div>
              <div>
                <span className="data">{news.data}</span>
                <h3 className="name">{news.name}</h3>
                <p className="description">{news.description}</p>
                <button onClick={() => onOpen(news.id)}>More details</button>
              </div>
            </div>
          );
        })}
      </div>
      {newsOpen > 0 && (
        <NewsModal onClose={onClose}>
          <NewsModalBody onClose={onClose} newsOpen={newsOpen} />
        </NewsModal>
      )}
    </div>
  );
};
