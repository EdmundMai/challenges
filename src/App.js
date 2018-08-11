import React, { Component } from "react";
import { connect } from "react-redux";

import Charities from "./components/Charities";

export class App extends Component {
  componentDidMount() {
    const { loadHomepageFn } = this.props;
    loadHomepageFn();
  }

  render() {
    const { charities, donations, postPaymentRequestFn, status } = this.props;
    return (
      <Charities
        list={charities}
        donations={donations}
        postPaymentRequestFn={postPaymentRequestFn}
        status={status}
      />
    );
  }
}

export default App;
