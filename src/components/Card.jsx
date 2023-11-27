import React from "react";
import { useNavigate } from "react-router";

const Card = ({ item }) => {
  console.log(item, "card");
  const navi = useNavigate();
  return (
    <div
      style={{
        width: "150px",
        height: "200px",
        border: "2px solid red",
        display: "flex",
        flexWrap: "wrap",
        gap: "15px",
      }}
    >
      <p>{item.title.slice(0, 6)}</p>
      <div>
        <img
          style={{ width: "80px", height: "100px" }}
          src={item.image}
          alt=""
        />
      </div>
      <div>
        <button onClick={() => navi("/detail", { state: { item } })}>
          detail{" "}
        </button>
      </div>
    </div>
  );
};

export default Card;
