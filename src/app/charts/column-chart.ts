export const columnChartOptions:any={
    chart:{
        type:"column"
        // type:"circle"
        // type: 'bar'
    },
    title:{ text:"Monthly Revenue"},
    subtitle:{ text:"Monthly Revenue(hundred)"},
    xAxis:{
        categories:['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        crosshair: true
    },
    yAxis:{
        title:{text:'Revenue (millions)'}
    },

    plotOptions:{
      column:{
        pointPadding:0.2,
        borderWidth:0
      }
    },

    series:[{
        name:'Revenue',
        data:[48.8, 78.5, 98.0, 100, 20, 65, 68.5, 48.8, 78.5, 90.0, 70, 20.6,]
    }]
}