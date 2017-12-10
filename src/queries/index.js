export default {
    chart_1_query: async() => {
        return {
            xAxisData: ["1990","1991","1992","1993","1994","1995"],
            seriesData: [5, 20, 36, 10, 10, 20]
        };
      },
    
      chart_2_query: async() => {
        return {
            legendData: ['Netbanking','Cards','Wallet','Card Vaults','Others'],
            seriesData: [
                {value:335, name:'Netbanking'},
                {value:310, name:'Cards'},
                {value:234, name:'Wallet'},
                {value:135, name:'Card Vaults'},
                {value:1548, name:'Others'}
            ]
        };
      }
}