import React, { Component } from "react";

import  {ThemeContext} from "./contexts/ThemeContext"

export default class PageContent extends Component {
    static contextType = ThemeContext;
    render() {
    const {isDarkMode} = this.context;
    const styles = {
        backgroundColor: isDarkMode?"#fc9842":"#7f5a83",
        backgroundImage: isDarkMode?"linear-gradient(315deg, #7f5a83 0%, #0d324d 74%)":"linear-gradient(315deg, #fc9842 0%, #fe5f75 74%)",
        height: "100vh",
        width: "100vw"
    };
    return <div style={styles}>{this.props.children}</div>;
  }
}