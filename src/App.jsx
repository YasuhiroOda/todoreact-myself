import { useState } from "react";
import "./styles.css";

export const App = () => {
  const [inputtext, setinputtext] = useState("");
  const onChangeTodotext = (event) => setinputtext(event.target.value);
  const [incompletetext, setincompletetext] = useState([]);
  const [completetext, setcompletetext] = useState([]);

  const onClickAdd = () => {
    if (inputtext === "") return;
    const newincompletetext = [...incompletetext, inputtext];
    setincompletetext(newincompletetext);
    setinputtext("");
  };

  const onClickDelete = (index) => {
    const newincompletetext = [...incompletetext];
    newincompletetext.splice(index, 1);
    setincompletetext(newincompletetext);
  };

  const onClickDelete2 = (index) => {
    const newcompletetext = [...completetext];
    newcompletetext.splice(index, 1);
    setcompletetext(newcompletetext);
  };

  const onClickComplete = (index) => {
    const newincompletetext = [...incompletetext];
    newincompletetext.splice(index, 1);
    setincompletetext(newincompletetext);

    const newcompletetext = [...completetext, incompletetext[index]];
    setcompletetext(newcompletetext);
  };

  const onClickBack = (index) => {
    const newcomplete = [...completetext];
    newcomplete.splice(index, 1);
    setcompletetext(newcomplete);

    const newincompletetext = [...incompletetext, completetext[index]];
    setincompletetext(newincompletetext);
  };

  return (
    <>
      <div className="container">
        <h1>Todolist</h1>
        {incompletetext.length >= 5 && (
          <p style={{ color: "red" }}>Don't do more than 5 tasks</p>
        )}

        <div class="input-area">
          <input
            placeholder="Todo"
            value={inputtext}
            onChange={onChangeTodotext}
            disabled={incompletetext.length >= 5}
          />
          <button onClick={onClickAdd}>Enter</button>
        </div>
        <div className="incomplete-list">
          <p>incomplete-area</p>
          {incompletetext.map((todo, index) => {
            return (
              <ul key={todo} className="incomplete-element">
                <li className="lili">{todo}</li>
                <button onClick={() => onClickComplete(index)}>Complete</button>
                <button onClick={() => onClickDelete(index)}>Delete</button>
              </ul>
            );
          })}
        </div>
        <div className="complete-list">
          <p>complete area</p>
          {completetext.map((todo, index) => {
            return (
              <ul className="complete-element">
                <li>{todo}</li>
                <button onClick={() => onClickBack(index)}>Back</button>
                <button onClick={() => onClickDelete2(index)}>Delete</button>
              </ul>
            );
          })}
        </div>
      </div>
    </>
  );
};
