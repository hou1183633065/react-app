
import React from "react";

class Layout extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, {this.props.name}</h1>
        <div>{this.props.children}</div>
      </div>
    )
  }
}
export default Layout