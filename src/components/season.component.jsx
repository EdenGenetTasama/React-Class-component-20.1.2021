import React from "react";

export default class Season extends React.Component {
  constructor(props) {
    super(props);
    this.state = { numOfEpisode: 0 };
    this.ChangeEpisUp = this.ChangeEpisUp.bind(this);
    this.ChangeEpisDown = this.ChangeEpisDown.bind(this);
  }

  ChangeEpisUp() {
    let until25 = this.state.numOfEpisode + 1;
    this.setState({ numOfEpisode: until25 });
    if (until25 > 25) {
      this.setState({ numOfEpisode: 25 });
      alert("that is no more");
    }
  }


  ChangeEpisDown() {
    let until0 = this.state.numOfEpisode - 1;
    this.setState({ numOfEpisode: until0 });
    if (until0 < 0) {
      this.setState({ numOfEpisode: 0 });
    }
  }
  render() {
    return (
      <div>
        <p>{this.state.numOfEpisode}</p>
        <button onClick={this.ChangeEpisUp}>Up ☻</button>
        <button onClick={this.ChangeEpisDown}>Down ☺</button>
        {/* <input type="text" value={this.state.numOfEpisode} /> */}

      </div>
    );
  }
}
