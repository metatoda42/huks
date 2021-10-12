import List from "./BdayComponents/list";
import React, { useState } from "react";
import data from "./BDayData/data";

function BDayApp() {
  const [people, setPeople] = useState(data);

  return (
    <main>
      <section className="container">
        <h3>{people.length} Birthday Today</h3>
        <List people={people}></List>
        <button onClick={() => setPeople([])}>Clear All</button>
      </section>
    </main>
  );
}
export default BDayApp;
