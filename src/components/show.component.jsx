import React from "react";
import "../styles/showStyle.css";

export default class Show extends React.Component {
  constructor(props) {
    super(props);
    this.state = { like: 0 };
    this.ChangeLikeUp = this.ChangeLikeUp.bind(this);
    this.ChangeLikeDown = this.ChangeLikeDown.bind(this);
    this.ChangeLikeRestart = this.ChangeLikeRestart.bind(this);
  }
  ChangeLikeUp() {
    let likeUp = this.state.like + 1;
    this.setState({ like: likeUp });
  }
  ChangeLikeDown() {
    let likeDown = this.state.like - 1;
    this.setState({ like: likeDown });
    if (likeDown < 0) {
      this.setState({ like: 0 });
    }
  }
  ChangeLikeRestart() {
    let zeroLike = 0;
    this.setState({ like: zeroLike });
  }
  render() {
    let { showName, rating, yearOut } = this.props;
    return (
      <div>
        <h1>{showName}</h1>
        <h2>{rating}</h2>
        <h3>{yearOut}</h3>
        <div>
          <h1>The like button</h1>
          {this.state.like}
        </div>
        <article className="buttonStyle">
          <button onClick={this.ChangeLikeUp}>Up</button>
          <button onClick={this.ChangeLikeDown}>Down</button>
          <button onClick={this.ChangeLikeRestart}>0</button>
        </article>
      </div>
    );
  }
}
