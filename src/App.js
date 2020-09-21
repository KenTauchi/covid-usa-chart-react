import React, { Component } from "react";
import "./App.css";

import Chart from "./components/Chart/Chart";

let stateArr = [];
let casesArr = [];
let colorArr = [];

const mykey = process.env.REACT_APP_API_KEY;

class App extends Component {
  state = {
    chartData: {
      labels: stateArr,
      datasets: [
        {
          label: "n/b of total cases in the US by state",
          data: casesArr,
          backgroundColor: colorArr,
        },
      ],
    },
  };

  componentDidMount() {
    fetch(`https://finnhub.io/api/v1/covid19/us?token=${mykey}`)
      .then((response) => response.json())
      .then((caseData) => {
        caseData.map((data) => {
          casesArr.push(data.case);
          stateArr.push(data.state);
          if (data.case < 100000) {
            colorArr.push("rgba(54, 162, 235, 0.6)");
          } else if (data.case >= 100000 && data.case < 200000) {
            colorArr.push("rgba(255, 206, 86, 0.6)");
          } else if (data.case >= 200000 && data.case < 300000) {
            colorArr.push("rgba(153, 102, 255, 0.6)");
          } else if (data.case >= 300000) {
            colorArr.push("rgba(255, 99, 132, 0.6)");
          }
        });
      });
  }

  componentDidUpdate() {
    console.log("componentDidUpdate!");
  }

  render() {
    return (
      <div className="App">
        <Chart
          legendPosition="bottom"
          chartData={this.state.chartData}
          label="true"
        />
      </div>
    );
  }
}

export default App;
