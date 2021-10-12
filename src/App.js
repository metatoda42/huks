import { useState } from "react";
import { data } from "./data";
import React from "react";
import { Counter } from "./Counter";
function App() {
  console.log(useState);
  //const [text, settext] = useState("Random Title");
  const [people, setpeople] = useState({
    name: "peter",
    age: 18,
    message: "Message",
  });

  const changeMessage = () => {
    setpeople({ ...people, message: "Hello World" });
  };
  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setpeople(newPeople);
  };

  return (
    // <div>
    //   {people.map((person) => {
    //     return (
    //       <div key={person.id}>
    //         {/* <h1>{text}</h1> */}
    //         {/* <HelloClass /> */}
    //         <h4>{person.name}</h4>
    //         <button
    //           onClick={() => {
    //             removeItem(person.id);
    //           }}
    //         >
    //           remove
    //         </button>
    //       </div>
    //     );
    //   })}
    //   <button onClick={() => setpeople([])}>Clear Item</button>
    // </div>
    <div className="App">
      <h4>{people.name}</h4>
      <h4>{people.age}</h4>
      <h4>{people.message}</h4>
      <button onClick={changeMessage}>Change Message</button>
      <Counter />
    </div>
  );
}

export default App;
