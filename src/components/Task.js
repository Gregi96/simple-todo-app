import React from "react";

const Task = (props) => {
  const { id, text, active, date, finishDate } = props.task;

  if (active) {
    return (
      <div>
        <section className="AllInformation">
          <div>
            <strong>{text}</strong> <br /> Zrobić do: {date}
          </div>
          <section className="buttons">
            <button
              className="check-button"
              onClick={() => {
                props.changeStatus(id);
              }}
            >
              <i className="fas fa-check"></i>
            </button>
            <button
              className="delete-button"
              onClick={() => {
                props.deleteTask(id);
              }}
            >
              X
            </button>{" "}
          </section>
        </section>
      </div>
    );
  } else {
    return (
      <div>
        <section className="AllInformation">
          <div>
            <strong>{text}</strong> <br /> Zrobione w: {finishDate}
            {/* <em style={{ fontSize: 10 }}>Usuń z historii</em>{" "} */}
          </div>
          <button
            className="delete-button buttons"
            onClick={() => {
              props.deleteTask(id);
            }}
          >
            X
          </button>{" "}
        </section>
      </div>
    );
  }
};

export default Task;
