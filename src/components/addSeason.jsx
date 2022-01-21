import React from "react";

export default class AddSeason extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showName: "", season: "", dateOut: "", isFinish: "" };
    this.GetInfoName = this.GetInfoName.bind(this);
    this.GetSeason = this.GetSeason.bind(this);
    this.GetDateOut = this.GetDateOut.bind(this);
    this.GetIsFinish = this.GetIsFinish.bind(this);
  }
  GetInfoName(event) {
    this.setState({ showName: event.target.value });
    console.log(event.target.value);
  }
  GetSeason(event) {
    this.setState({ season: event.target.value });
    console.log(event.target.value);
  }
  GetDateOut(event) {
    this.setState({ dateOut: event.target.value });
  }
  GetIsFinish(event) {
    this.setState({ isFinish: event.target.checked});
  }

  render() {
    return (
      <div>
        <input
          onChange={this.GetInfoName}
          type="text"
          value={this.state.showName}
        />
        <input type="number" onChange={this.GetSeason} />
        <input type="date" onChange={this.GetDateOut} />
        <input type="checkbox" checked={this.state.isFinish} onClick={this.GetIsFinish} />
        {/* <button type="button" onClick={}></button> */}
        <div>
          <h1> {this.state.showName}  {this.state.season} {this.state.dateOut}  {this.state.isFinish} </h1>
        </div>
      </div>
    );
  }
}
