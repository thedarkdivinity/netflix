import React from "react";
import sdata from "./sdata";
import Card from "./Card";
function ncard(val) {
  return (
    <Card
      key={val.id}
      imgsrc={val.imgsrc}
      title={val.title}
      sname={val.sname}
      link={val.link}
    />
  );
}

function App() {
  return (
    <>
      <h1 className="heading">List of top 5 netflix series in 2020</h1>
      {sdata.map(ncard)}
    </>
  );
}
export default App;
