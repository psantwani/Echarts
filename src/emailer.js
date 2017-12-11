import React, { Component } from 'react';
import Queries from './queries/index';
import Line from './charts/line';
import Pie from './charts/pie';
import DataTable from './components/data_table';

export default class Emailer extends Component {

  constructor(props){
    super(props);
    this.state = {
      isDataReady: false,
      chart_1_data: {},
      chart_2_data: {},
      chart_3_data: {}
    }
  }

  async componentDidMount(){
    let chart_1_data = await Queries.chart_1_query();
    let chart_2_data = await Queries.chart_2_query();
    let chart_3_data = await Queries.chart_3_query();
    this.setState({
       chart_1_data,
       chart_2_data,
       chart_3_data,
       isDataReady: true
    });
  }
  
  render(){ 
    if(this.state.isDataReady){
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
            <DataTable
              id="chart 3"
              title="Graph 3"
              data={this.state.chart_3_data}
            />
            <hr />
        </div>
    );
    }
    else{
      return(
        <div>
          Loading
        </div>
      )
    }
  }
} 