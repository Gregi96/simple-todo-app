import React, { Component } from "react";

class AddTask extends Component {
  minDate = new Date().toISOString().slice(0, 10);

  state = {
    text: "",
    date: this.minDate,
  };

  changeText = (e) => {
    const text = e.target.value;
    if (text.length > 20) {
      alert("Dlugość wpisanego zadania nie może byc większa od 20 znaków");
      return;
    }

    this.setState({
      text: e.target.value,
    });
  };

  //   const add = this.props.add(text, date, checked);

  AddTask = () => {
    if (this.state.text.length > 2) {
      const Addback = this.props.Add(this.state.text, this.state.date);
      if (Addback) {
        this.setState({
          text: "",
          date: this.minDate,
        });
      }
    }
  };

  handleDate = (e) => {
    this.setState({
      date: e.target.value,
    });
  };

  render() {
    let maxDate = this.minDate.slice(0, 4) * 1 + 1;
    maxDate = maxDate + "-12-31";

    return (
      <div className="AddTask">
        <section>
          <span>Dodaj kolejne zadanie</span>
          <input
            type="text"
            placeholder="dodaj zadanie"
            value={this.state.text}
            onChange={this.changeText}
          />{" "}
        </section>
        <section>
          <span>Do kiedy zrobić</span>
          <input
            type="date"
            value={this.state.date}
            min={this.minDate}
            max={maxDate}
            onChange={this.handleDate}
          />
          <button onClick={this.AddTask}>+</button>
        </section>
      </div>
    );
  }
}

export default AddTask;
