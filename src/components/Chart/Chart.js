import { render } from "@testing-library/react";
import React, { Component } from "react";

import { Bar, Line, Pie } from "react-chartjs-2";

import "./chart.styles.css";

class Chart extends Component {
  render() {
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);

    return (
      <div className="chart">
        <Bar
          data={this.props.chartData}
          options={{
            title: {
              display: true,
              text: "Number of total COVID cases in the US by state ",
              fontSize: 25,
            },
          }}
        />
        <p>As of {today.toDateString()}</p>
      </div>
    );
  }
}

export default Chart;
