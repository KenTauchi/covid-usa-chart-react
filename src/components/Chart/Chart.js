import { render } from "@testing-library/react";
import React, { Component } from "react";

import { Bar, Line, Pie } from "react-chartjs-2";

class Chart extends Component {
  // state = {
  //   chartData: this.props.chartData,
  // };

  render() {
    console.log(this.props.chartData);
    return (
      <div className="chart">
        <Bar data={this.props.chartData} />
      </div>
    );
  }
}

export default Chart;
