import React from "react"; 

export default class EditSeason extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameSeries: props.nameSeries,
      seasonOfSeries: props.seasonOfSeries,
      dateOut: props.dateOut,
      isOver: props.isOver,
    };
    this.ChangeNameSeries = this.ChangeNameSeries.bind(this);
  }

  ChangeNameSeries(event) {
    this.setState({ nameSeries: event.target.value });
    console.log(this.nameSeries)
  }
  

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.nameSeries}
          onChange={this.ChangeNameSeries}
        />
        <input type="number" value={this.state.seasonOfSeries} />
        <input type="date" value={this.state.dateOut} />
        <input type="checkbox" checked={this.state.isOver} />
      </div>
    );
  }
}
