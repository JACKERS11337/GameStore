import React from "react";
import newsData from "../../../../data/news.json";
import "./style.scss";
import { IoMdClose } from "react-icons/io";

export const NewsModalBody = ({ newsOpen, onClose }) => {
  const newsNumber = newsData.find((news) => news.id === newsOpen);
  console.log(newsNumber);
  return (
    <div className="news-more">
      <div>
        <h4>{newsNumber.name}</h4>
        <IoMdClose className="close" onClick={onClose} />
      </div>
      <img src={newsNumber.image} alt={newsNumber.name} />
      <p>{newsNumber.more}</p>
    </div>
  );
};
