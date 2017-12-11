export default {
    chart_1_query: async() => {
        return {
            xAxisData: ["1990","1991","1992","1993","1994","1995"],
            seriesData: [5, 20, 36, 10, 10, 20]
        };
      },
    
      chart_2_query: async() => {
        return {
            legendData: ['Name','Place','Animal','Thing','Others'],
            seriesData: [
                {value:335, name:'Piyush'},
                {value:310, name:'New Zeland'},
                {value:234, name:'Panda'},
                {value:135, name:'Money'},
                {value:1548, name:'Others'}
            ]
        };
      },

      chart_3_query: async() => {
        return {
            columns: [{
                Header: "First Name",
                accessor: "firstName"
            },
            {
                Header: "Last Name",
                id: "lastName",
                accessor: d => d.lastName
            },
            {
                Header: "Age",
                id: "age",
                accessor: d => d.age
            },
            ],
            tableData: [
                {firstName: "Piyush", lastName: "Santwani", age:"26"},
                {firstName: "Supriti", lastName: "Shukla", age:"26"},
                {firstName: "Anuj", lastName: "Gupta", age:"24"}
            ]
        };
      }
}