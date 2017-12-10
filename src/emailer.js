import React, { Component } from 'react';
import Queries from './queries/index';
import Line from './charts/line';
import Pie from './charts/pie'; 

export default class Emailer extends Component {

  constructor(props){
    super(props);
    this.state = {
      chart_1_data: {},
      chart_2_data: {}
    }
  }

  async componentDidMount(){
    let chart_1_data = await Queries.chart_1_query();
    let chart_2_data = await Queries.chart_2_query();
    this.setState({
       chart_1_data,
       chart_2_data
    });
  }
  
  render(){ 
    return(
        <div>
            <Line
                id="chart 1"
                title="Graph 1"
                data={this.state.chart_1_data}
            />
            <hr />
            <Pie
                id="chart 2"
                title="Graph 2"
                data={this.state.chart_2_data}
            />
            <hr />
        </div>
    );
  }
} 