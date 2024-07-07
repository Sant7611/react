import { useState } from "react";

// handling multiple inputs in form

export default function MultipleForms() {
  const [name, setName] = useState({ fname: "", lname: "" });
  function handleSubmission(e){
    console.log(name);
    e.preventDefault();
  }
  return (
    <div>
      {name.fname}={name.lname}
      <form>
        <input
          type="text"
          onChange={(e) => setName({ ...name, fname: e.target.value })}
          value={name.fname}
        />
        <input
          type="text"
          onChange={(e) => setName({ ...name, lname: e.target.value })}
          value={name.lname}
        />
        <button onClick={(e)=>handleSubmission(e)}>Submit</button>
      </form>
    </div>
  );
}
