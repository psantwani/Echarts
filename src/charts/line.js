import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';

export default class LineChart extends Component {

  render() {

    let options = {
        title: {
            text: this.props.title,
            left: 'center'
        },
        grid: {
            show: false
        },
        tooltip: {},
        xAxis: {
            data: this.props.data.xAxisData
        },
        yAxis: {},
        series: [{
            name: 'Test',
            type: 'line',
            data: this.props.data.seriesData
        }]
    };

    return(
        <ReactEcharts
        option={options}
        notMerge={true}
        lazyUpdate={true}
        theme={'new theme'}
      />
    );
  }
}