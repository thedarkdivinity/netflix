import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import "./styles.css";
import sdata from "./sdata";
function ncard(val) {
  return (
    <Card
      imgsrc={val.imgsrc}
      title={val.title}
      sname={val.sname}
      link={val.link}
    />
  );
}

ReactDOM.render(
  <>
    <h1 className="heading">List of top 5 netflix series in 2020</h1>
    {sdata.map(ncard)}
  </>,
  document.getElementById("root")
);
