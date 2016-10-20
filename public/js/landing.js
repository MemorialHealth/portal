
// Revenue Chart
(function(){

  
    /* REVENUE */
    var revData = [
        /* Oct */
        [1443657600000, 61019.46, 999999],
        [1444262400000, 72351.49, 999999],
        [1444867200000, 62534.16, 999999],
        [1445472000000, 57172.72, 999999],

        [1446336000000, 112630.92, 999999],
        [1446940800000, 118346.87, 999999],
        [1447545600000, 104859.52, 999999],
        [1448150400000, 123146.33, 999999],

        [1448928000000, 112630.92, 999999],
        [1449532800000, 118346.87, 999999],
        [1450137600000, 104859.52, 999999],
        [1450742400000, 149902.72, 999999],

        /* Jan */
        [1451606400000, 152849.36, 999999],
        [1452211200000, 153574.54, 999999],
        [1452816000000, 137351.32, 999999],
        [1453420800000, 161024.71, 999999],

        [1454284800000, 134846.65, 999999],
        [1454889600000, 129345.97, 999999],
        [1455494400000, 131899.49, 999999],
        [1456099200000, 131834.92, 999999],

        /* Mar */
        [1456790400000, 157654.35, 999999],
        [1457395200000, 164894.68, 999999],
        [1458000000000, 172714.23, 999999],
        [1458604800000, 178993.63, 999999],

        [1459468800000, 177652.43, 999999],
        [1460073600000, 168246.36, 999999],
        [1460678400000, 172598.74, 999999],
        [1461283200000, 184337.23, 999999],

        /* May */
        [1462060800000, 156258.33, 999999],
        [1462665600000, 142647.35, 999999],
        [1463270400000, 147681.34, 999999],
        [1463875200000, 136107.3, 999999],

        [1464739200000, 162743.89, 999999],
        [1465344000000, 189349.46, 999999],
        [1465948800000, 197625.89, 999999],
        [1466553600000, 207083.1, 999999],

    ];
    var revData2 = [
        /* July */
        [1467331200000, 192485.36, 999999],
        [1467936000000, 198754.94, 999999],
        [1468540800000, 207453.99, 999999],
        [1469145600000, 215696.15, 999991],

        [1470009600000, 212894.75, 999992],
        [1470614400000, 217254.25, 999993],
        [1471219200000, 212346.97, 999994],
        [1471824000000, 212528.94, 999995],

        /* Sep */
        [1472688000000, 222461.98, 999996],
        [1473292800000, 234798.36, 999997],
        [1473897600000, 232165.43, 999998],
        [1474502400000, 251101.63, 999999]
    ];

    var ytd = [

        61019.46
        ,133370.95
        ,195905.11
        ,253077.83
        ,365708.75
        ,484055.62
        ,588915.14
        ,712061.47
        ,845318.79
        ,980172.95
        ,1117524.27
        ,1267426.99
        ,1420276.35
        ,1573850.89
        ,1730730.53
        ,1891755.24
        ,2026601.89
        ,2155947.86
        ,2287847.35
        ,2419682.27
        ,2577336.62
        ,2742231.30
        ,2914945.53
        ,3093939.16
        ,3271591.59
        ,3439837.95
        ,3612436.69
        ,3796773.92
        ,3953032.25
        ,4095679.60
        ,4243360.94
        ,4379468.24
        ,4542212.13
        ,4731561.59
        ,4929187.48
        ,5136270.58

    ];


    var total = 0;

    // Create the chart
    $('#revenueChart').highcharts('StockChart', {

        chart:{
            backgroundColor:'rgba(255,255,255,0)',
        },
        xAxis: {
            range: 180 * 24 * 3600 * 1000, // 7 days
            tickColor:'rgba(255,255,255,0.3)',
            visible:false,
            minPadding: 0,
            maxPadding:0,
            endOnTick:true
        },
        yAxis: {
            gridLineColor:'rgba(255,255,255,0.3)',
            lineColor:'rgba(255,255,255,0.3)',
            tickColor:'rgba(255,255,255,0.3)',
            gridLineDashStyle:'dash'
        },
        rangeSelector: {
            enabled: false,
            inputBoxBorderColor:'rgba(255,255,255,0.3)',
        },

        exporting:{
            enabled:false
        },

        credits:{
            enabled:false
        },

        title: {
            text: ''
        },

        navigator: {
            outlineColor: 'rgba(255,255,255,0)',
            outlineWidth: 0,
            xAxis: {
                gridLineWidth: 0,
            }
        },

        tooltip:{
            /*
            headerFormat:'<span style="font-size: 10px">{point.key}</span><br/>',
            pointFormat:'<span style="color:{point.color}"></span>{series.name}: <b>{point.y}</b><br/><small>YTD: {point.total}</small>',
            */
            formatter: function () {
                var s = '<small>' + Highcharts.dateFormat('%A, %b %e, %Y', this.x) + '</small>';

                var index = revData.map(function(item){return item[0]}).indexOf(this.x);

                if(ytd[index] > 0) {
                    s += '<br><b>Revenue: '+numeral(this.y).format('$0,0.00')+'</b>';
                    s += '<br><small>YTD: '+numeral(ytd[index]).format('$0,0.00')+'</small>';
                } else {
                    s += '<br><b>Proj. Revenue: '+numeral(this.y).format('$0,0.00')+'</b>';
                }


                return s;
            }
        },

        scrollbar: {
            barBorderColor:'rgba(255,255,255,0.3)',
            barBackgroundColor: 'rgba(255,255,255,0.7)',
            barBorderRadius: 7,
            barBorderWidth: 0,
            buttonBackgroundColor: 'rgba(255,255,255,0.7)',
            buttonBorderWidth: 0,
            buttonBorderRadius: 7,
            trackBackgroundColor: 'none',
            trackBorderWidth: 1,
            trackBorderRadius: 8,
            trackBorderColor: 'rgba(255,255,255,0.3)'
        },

        series: [
            {
                name: 'Revenue',
                data: revData,
                tooltip: {
                    valueDecimals: 0,
                    valuePrefix: '$',
                }
            },
            {
                name: 'Projected Revenue',
                data: revData2,
                color: 'rgba(228, 103, 103,1)',
                tooltip: {
                    valueDecimals: 0,
                    valuePrefix: '$',
                }
            }
        ]
    });
}) ()


// Map Chart


// Prepare demo data
    var mapData = [
        {
            "hc-key": "us-oh-085",
            "value": 0
        },
        {
            "hc-key": "us-oh-035",
            "value": 1
        },
        {
            "hc-key": "us-oh-103",
            "value": 2
        },
        {
            "hc-key": "us-oh-153",
            "value": 3
        },
        {
            "hc-key": "us-oh-063",
            "value": 4
        },
        {
            "hc-key": "us-oh-173",
            "value": 5
        },
        {
            "hc-key": "us-oh-039",
            "value": 6
        },
        {
            "hc-key": "us-oh-077",
            "value": 7
        },
        {
            "hc-key": "us-oh-093",
            "value": 8
        },
        {
            "hc-key": "us-oh-145",
            "value": 9
        },
        {
            "hc-key": "us-oh-087",
            "value": 10
        },
        {
            "hc-key": "us-oh-015",
            "value": 11
        },
        {
            "hc-key": "us-oh-001",
            "value": 12
        },
        {
            "hc-key": "us-oh-049",
            "value": 13
        },
        {
            "hc-key": "us-oh-067",
            "value": 14
        },
        {
            "hc-key": "us-oh-013",
            "value": 15
        },
        {
            "hc-key": "us-oh-081",
            "value": 16
        },
        {
            "hc-key": "us-oh-105",
            "value": 23331
        },
        {
            "hc-key": "us-oh-163",
            "value": 18
        },
        {
            "hc-key": "us-oh-079",
            "value": 19
        },
        {
            "hc-key": "us-oh-009",
            "value": 64713
        },
        {
            "hc-key": "us-oh-059",
            "value": 21
        },
        {
            "hc-key": "us-oh-031",
            "value": 22
        },
        {
            "hc-key": "us-oh-129",
            "value": 23
        },
        {
            "hc-key": "us-oh-097",
            "value": 24
        },
        {
            "hc-key": "us-oh-045",
            "value": 25
        },
        {
            "hc-key": "us-oh-047",
            "value": 26
        },
        {
            "hc-key": "us-oh-141",
            "value": 27
        },
        {
            "hc-key": "us-oh-071",
            "value": 28
        },
        {
            "hc-key": "us-oh-101",
            "value": 29
        },
        {
            "hc-key": "us-oh-065",
            "value": 30
        },
        {
            "hc-key": "us-oh-149",
            "value": 31
        },
        {
            "hc-key": "us-oh-091",
            "value": 32
        },
        {
            "hc-key": "us-oh-161",
            "value": 33
        },
        {
            "hc-key": "us-oh-137",
            "value": 34
        },
        {
            "hc-key": "us-oh-133",
            "value": 35
        },
        {
            "hc-key": "us-oh-155",
            "value": 36
        },
        {
            "hc-key": "us-oh-055",
            "value": 37
        },
        {
            "hc-key": "us-oh-007",
            "value": 38
        },
        {
            "hc-key": "us-oh-143",
            "value": 39
        },
        {
            "hc-key": "us-oh-147",
            "value": 40
        },
        {
            "hc-key": "us-oh-165",
            "value": 41
        },
        {
            "hc-key": "us-oh-017",
            "value": 42
        },
        {
            "hc-key": "us-oh-113",
            "value": 43
        },
        {
            "hc-key": "us-oh-033",
            "value": 44
        },
        {
            "hc-key": "us-oh-061",
            "value": 45
        },
        {
            "hc-key": "us-oh-073",
            "value": 46
        },
        {
            "hc-key": "us-oh-037",
            "value": 47
        },
        {
            "hc-key": "us-oh-019",
            "value": 48
        },
        {
            "hc-key": "us-oh-151",
            "value": 49
        },
        {
            "hc-key": "us-oh-075",
            "value": 50
        },
        {
            "hc-key": "us-oh-099",
            "value": 51
        },
        {
            "hc-key": "us-oh-005",
            "value": 52
        },
        {
            "hc-key": "us-oh-041",
            "value": 53
        },
        {
            "hc-key": "us-oh-083",
            "value": 54
        },
        {
            "hc-key": "us-oh-011",
            "value": 55
        },
        {
            "hc-key": "us-oh-089",
            "value": 56
        },
        {
            "hc-key": "us-oh-095",
            "value": 57
        },
        {
            "hc-key": "us-oh-069",
            "value": 58
        },
        {
            "hc-key": "us-oh-171",
            "value": 59
        },
        {
            "hc-key": "us-oh-157",
            "value": 60
        },
        {
            "hc-key": "us-oh-127",
            "value": 61
        },
        {
            "hc-key": "us-oh-131",
            "value": 62
        },
        {
            "hc-key": "us-oh-025",
            "value": 63
        },
        {
            "hc-key": "us-oh-027",
            "value": 64
        },
        {
            "hc-key": "us-oh-159",
            "value": 65
        },
        {
            "hc-key": "us-oh-021",
            "value": 66
        },
        {
            "hc-key": "us-oh-109",
            "value": 67
        },
        {
            "hc-key": "us-oh-003",
            "value": 68
        },
        {
            "hc-key": "us-oh-023",
            "value": 69
        },
        {
            "hc-key": "us-oh-107",
            "value": 70
        },
        {
            "hc-key": "us-oh-053",
            "value": 71
        },
        {
            "hc-key": "us-oh-117",
            "value": 72
        },
        {
            "hc-key": "us-oh-111",
            "value": 14465
        },
        {
            "hc-key": "us-oh-135",
            "value": 74
        },
        {
            "hc-key": "us-oh-119",
            "value": 75
        },
        {
            "hc-key": "us-oh-139",
            "value": 76
        },
        {
            "hc-key": "us-oh-051",
            "value": 77
        },
        {
            "hc-key": "us-oh-167",
            "value": 48951
        },
        {
            "hc-key": "us-oh-175",
            "value": 79
        },
        {
            "hc-key": "us-oh-169",
            "value": 80
        },
        {
            "hc-key": "us-oh-115",
            "value": 14843
        },
        {
            "hc-key": "us-oh-057",
            "value": 82
        },
        {
            "hc-key": "us-oh-043",
            "value": 83
        },
        {
            "hc-key": "us-oh-125",
            "value": 84
        },
        {
            "hc-key": "us-oh-029",
            "value": 85
        },
        {
            "hc-key": "us-oh-123",
            "value": 86
        },
        {
            "hc-key": "us-oh-121",
            "value": 14363
        }
    ];



    // Initiate the chart
    $('#ohioMap').highcharts('Map', {

        title : {
            text : ''
        },

        chart:{
            backgroundColor:'rgba(255,255,255,0)',
        },

        exporting:{
            enabled:false
        },

        credits: {
            enabled:false
        },

        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },

        colorAxis: {
            min: 0
        },

        series : [{
            data : mapData,
            mapData: Highcharts.maps['countries/us/us-oh-all'],
            joinBy: 'hc-key',
            name: 'Population',
            states: {
                hover: {
                    color: '#BADA55'
                }
            },
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }]
    });




// Donut
var chartWidth = $("#APDaysChart").width();

    var radius = chartWidth/2.2;



    FusionCharts.ready(function () {
        var cSatScoreChart = new FusionCharts({
            type: 'angulargauge',
            renderAt: 'APDaysChart',
            width: chartWidth,
            height: '300',
            dataFormat: 'json',
            dataSource: {
                "chart": {
                    "caption": "",
                    "subcaption": "",
                    "plotToolText": "Current Score: $value",
                    "chartBottomMargin": "50",
                    "showValue": "1",
                    "theme": "fint",
                    "basefontcolor": "#FFFFFF",
                    "canvasBgColor":"#333333",
                    "canvasBgAlpha": "0",
                    "bgAlpha": "0",
                },
                "colorRange": {
                    "color": [{
                        "minValue": "0",
                        "maxValue": "15",
                        "code": "#e05252"
                    }, {
                        "minValue": "15",
                        "maxValue": "30",
                        "code": "#e6bf4c"
                    }, {
                        "minValue": "30",
                        "maxValue": "60",
                        "code": "#4db366"
                    }, {
                        "minValue": "60",
                        "maxValue": "75",
                        "code": "#e6bf4c"
                    }, {
                        "minValue": "75",
                        "maxValue": "90",
                        "code": "#e05252"
                    }]
                },
                "dials": {
                    "dial": [{
                        "value": "54.9"
                    }]
                },
                "trendPoints": {
                    "point": [
                        {
                            "startValue": "30",
                            "color": "#386F8B",
                            "dashed": "1"
                        },
                        {
                            "startValue": "45",
                            "color": "#386F8B",
                            "dashed": "1"
                        },
                        {
                            "startValue": "45",
                            "endValue": "60",
                            "color": "#386F8B",
                            "radius": radius,
                            "innerRadius": "80"
                        }
                    ]
                },
                "annotations": {
                    "origw": chartWidth,
                    "origh": "330",
                    "autoscale": "1",
                    "showBelow": "0",
                    "groups": [
                        {
                            "id": "arcs",
                            "items": [






                                {
                                    "id": "state-cs-bg",
                                    "type": "rectangle",
                                    "x" : "$chartCenterX-2",
                                    "y": "$chartEndY - 45",
                                    "tox": "$chartCenterX - 133",
                                    "toy": "$chartEndY - 25",
                                    "fillcolor": "#4db366"
                                },
                                {
                                    "id": "state-cs-text",
                                    "type": "Text",
                                    "color": "#ffffff",
                                    "label": "Inside Normal Range",
                                    "fontSize": "12",
                                    "align": "right",
                                    "x": "$chartCenterX - 7",
                                    "y": "$chartEndY - 35"
                                },





                                {
                                    "id": "national-cs-bg",
                                    "type": "rectangle",
                                    "x" : "$chartCenterX+2",
                                    "y": "$chartEndY - 45",
                                    "tox": "$chartCenterX + 133",
                                    "toy": "$chartEndY - 25",
                                    "fillcolor": "#e6bf4c"
                                },
                                {
                                    "id": "national-cs-text",
                                    "type": "Text",
                                    "color": "#ffffff",
                                    "label": "Outside Normal Range",
                                    "fontSize": "12",
                                    "align": "left",
                                    "x": "$chartCenterX + 7",
                                    "y": "$chartEndY - 35"
                                },







                                {
                                    "id": "store-cs-bg",
                                    "type": "rectangle",
                                    "x" : "$chartCenterX-133",
                                    "y": "$chartEndY - 22",
                                    "tox": "$chartCenterX + 133",
                                    "toy": "$chartEndY - 2",
                                    "fillcolor": "#386F8B"
                                },
                                {
                                    "id": "state-cs-text",
                                    "type": "Text",
                                    "color": "#ffffff",
                                    "label": "Optimal Range: 45 to 60",
                                    "fontSize": "12",
                                    "align": "center",
                                    "x": "$chartCenterX + 10",
                                    "y": "$chartEndY - 12"
                                }
                            ]
                        }
                    ]
                }
            }
        }).render();
    });




function heatmap(lower,upper) {
    $('.heatmapTable td').each(function(){
        if($(this).text() > '') {
            var num = parseInt($(this).text());
        } else {
            var num = 0;
        }
        var color = 'rgb(224,82,82)';
        if(num < 27) {
            color = 'rgb(228,103,103)';
        }
        if(num < 18) {
            color = 'rgb(232,127,127)';
        }
        if(num < 9) {
            color = 'rgb(236,148,148)';
        }
        if(num < 1) {
            color = 'rgba(255,255,255,0)';
        }
        if(num < lower || num > upper) {
            $(this).css('opacity',0);
        } else {
            $(this).css('opacity',100);
        }

        $(this).css('background',color);

    });

}

var slider = document.getElementById('heatmapSlider');

noUiSlider.create(slider, {
    start: [0, 40],
    connect: true,
    range: {
        'min': 0,
        'max': 40
    }
});

var skipValues = [
    document.getElementById('lowerValue'),
    document.getElementById('upperValue')
];

slider.noUiSlider.on('update', function( values, handle ) {
    skipValues[handle].innerHTML = Math.round(values[handle]);

    var lower = $('#lowerValue').text();
    var upper = $('#upperValue').text();
    heatmap(lower,upper);
});

var lower = $('#lowerValue').text();
var upper = $('#upperValue').text();

heatmap(lower,upper);