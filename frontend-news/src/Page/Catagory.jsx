import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import NewsCart from "./NewsCart";

const Catagory = () => {
  const { id } = useParams();
  const catagoryNews = useLoaderData({});
  return (
    <div>
      <p>
        {
            id && <h2>This Catagory News : {catagoryNews.length}</h2>
        }
      </p>
      {catagoryNews.map((news) => (
        <NewsCart key={news._id} news={news}></NewsCart>
      ))}
    </div>
  );
};

export default Catagory;
