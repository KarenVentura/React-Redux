import React, { Component } from "react";
import CSSModules from "react-css-modules";
import { Link } from "react-router";
import style from "./style.scss";
import { routeFor } from "../../common";

class App extends Component {

  render() {
    const { onChangeColor, color } = this.props;
    return (
      <div>
        <h1>holis holis</h1>
        { this.props.children }
      </div>
    );
  }

};

export default CSSModules(App, style);
