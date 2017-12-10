import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';

export default class LineChart extends Component {

  render() {
    let options = {
        title: {
            text: this.props.title,
            left: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
            orient: 'horizontal',
            x: 'center',
            y: 'bottom',
            padding: 5,
            data:this.props.data.legendData
        },
        series: [
            {
                name:'Series -A',
                type:'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:this.props.data.seriesData || []
            }
        ]
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