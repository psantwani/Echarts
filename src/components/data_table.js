import React from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";

export default class App extends React.Component {
  
  render() {    
    const { data } = this.props;
    return (
      <div>
        <h3 style={{ textAlign: 'center'}}>{this.props.title}</h3>
        <ReactTable
          data={data.tableData}
          columns={data.columns}
          showPagination={false}
          defaultPageSize={5}
        />        
      </div>
    );
  }
}