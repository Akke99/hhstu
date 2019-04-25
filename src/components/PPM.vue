<template>
  <div class="ordertracking_box">
    <div class="serach">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-1 col-sm-1">K&S订单号：</div>
          <div class="col-md-3 col-sm-3">
            <input type="text" class="form-control" placeholder="订单号">
          </div>

          <div class="col-md-1 col-sm-1">客户：</div>
          <div class="col-md-3 col-sm-3">
            <input type="text" class="form-control" placeholder="客户">
          </div>

          <div class="col-md-1 col-sm-1">供应商：</div>
          <div class="col-md-3 col-sm-4">
            <input type="text" class="form-control" placeholder="供应商">
          </div>
        </div>
        <div class="row">
          <div class="col-md-1 col-sm-1">零件名称：</div>
          <div class="col-md-3 col-sm-3">
            <input type="text" class="form-control" placeholder="零件名称">
          </div>

          <div class="col-md-1 col-sm-1">零件编码：</div>
          <div class="col-md-3 col-sm-3">
            <input type="text" class="form-control" placeholder="零件编码">
          </div>

          <div class="col-md-1 col-sm-1">检验项目：</div>
          <div class="col-md-3 col-sm-3">
            <input type="text" class="form-control" placeholder="检验项目">
          </div>
        </div>
        <div class="row">
          <div class="col-md-1 col-sm-1">检验日期：</div>
          <div class="col-md-3 col-sm-4">
            <input type="date" class="form-control" placeholder="检查时间" required="required">
          </div>
          <div class="col-md-1 col-sm-1">分组依据：</div>
          <div class="col-md-3 col-sm-4">
            <input type="text" class="form-control" placeholder="分组依据" required="required">
          </div>
          <div class="col-md-1 col-sm-1"></div>
          <div class="col-md-3 col-sm-4">
          </div>
        </div>
        <div class="row">
          <div class="col-md-1 col-sm-1"></div>
          <div class="col-md-3 col-sm-4">           
          </div>
          <div class="col-md-1 col-sm-1"></div>
          <div class="col-md-3 col-sm-4"></div>
          <div class="col-md-1 col-sm-1"></div>
          <div class="col-md-3 col-sm-4">
        <button class="btn btn-primary">查询</button>
        <button class="btn btn-default">重置</button>
          </div>
        </div>

      </div>
    </div>
    <div class="space" style="height:30px;background-color:#F0F2F5;"></div>
    <div id="myChart" style="width:700px;height:600px"></div>
  </div>
</template>

<script>
export default {
  name: "hello",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      which: [
        "2018.11.11",
        "2018.11.11",
        "2018.11.11",
        "2018.11.11",
        "2018.11.11",
        "2018.11.11",
        "2018.11.11",
        "2018.11.11",
        "2018.11.11",
        "2018.11.11",
        "2018.11.11",
        "2018.11.11",
        "2018.11.11",
        "2018.11.11",
        "2018.11.11",
        "2018.11.11",
        "2018.11.11",
        "2018.11.11",
        "2018.11.11",
        "2018.11.11",
        "2018.11.11"
      ]
    };
  },
  //   created(){

  //       this.setData={
  //         which:"123"
  //       }
  //       console.log(this.which)
  //   },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      var data = [
        7056,
        6000,
        5000,
        6500,
        4800,
        5300,
        7100,
        7056,
        3003,
        5200,
        6000,
        7500,
        3000,
        7100,
        7056,
        3003,
        4800,
        6200,
        5300,
        7100,
        7056
      ];
      var data1 = [
        300,
        150,
        280,
        270,
        260,
        250,
        230,
        240,
        310,
        215,
        295,
        280,
        264,
        315,
        308,
        306,
        298,
        275,
        264,
        294,
        234
      ];
      var data2 = [
        55,
        66,
        60,
        51,
        68,
        64,
        65,
        66,
        70,
        65,
        61,
        59,
        58,
        56,
        54,
        51,
        52,
        50,
        49,
        48,
        50
      ];
      //背景轴
      var yMax = 10000;
      var dataShadow = [];
      for (var i = 0; i < data.length; i++) {
        dataShadow.push(yMax);
      }
      var zoomSize = 6;
      myChart.on("click", function(params) {
        console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)]);
        myChart.dispatchAction({
          type: "dataZoom",
          startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
          endValue:
            dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)]
        });
      });
      myChart.setOption({
        color: ["#003366", "#006699", "#4cabce", "#e5323e"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        //图例
        legend: {
          data: ["检验数量", "不良数量", "PPM"],
          textStyle: {
            color: "red" //legend字体颜色
          }
        },
        //标题
        //x轴
        xAxis: {
          name: "不良项目",
          //x轴名称位置 start/end
          nameLocation: "start",
          nameGap:"20",
          //样式
          nameTextStyle: {
            color: "red"
          },
          data: this.which,
          //x轴坐标设置
          axisLabel: {
            //是否显示在轴里
            inside: false,
            rotate: 40,
            textStyle: {
              color: "red"
            }
          },
          //坐标轴短杠
          axisTick: {
            show: false
          },
          //坐标轴是否显示
          axisLine: {
            show: true
          },
          z: 10
        },
        yAxis: [
          {
            type: "value",
            axisLabel: {
              show: true,
              interval: "auto",
              formatter: "{value} "
            },
            max: 10000,
            splitNumber: 10,
            splitLine: {
              show: true,
              lineStyle: {
                type: "dashed"
              }
            },
            splitArea: {
              show: false
            }
          },
          {
            type: "value",
            max: 100,
            axisLabel: {
              show: true,
              interval: "auto",
              formatter: "{value} %"
            },
            splitNumber: 8,
            splitLine: {
              show: true,
              lineStyle: {
                type: "dashed"
              }
            },
            splitArea: {
              show: false
            }
          }
        ],
        dataZoom: [
          {
            type: "inside"
          }
        ],
        series: [
          //柱状1
          {
            name: "检验数量",
            type: "bar",
            yAxisIndex: "0",
            itemStyle: {
              normal: {
                color: "green"
              },
              //鼠标移入颜色
              emphasis: {
                color: "#5B9BD5"
              }
            },
            data: data
          },
          //柱状2
          {
            //name与图例中相同
            name: "不良数量",
            //柱状
            type: "bar",
            //柱与柱之间的间隔，只用设置一次，通用
            barGap: 0,
            //双轴向哪一个轴对齐
            yAxisIndex: "0",
            itemStyle: {
              normal: {
                color: ""
              },
              emphasis: {
                color: "#5B9BD5"
              }
            },
            //数据
            data: data1
          },
          //折线图
          {
            name: "PPM",
            type: "line",
            yAxisIndex: "1",
            data: data2
          }
        ]
      });
      window.onresize = myChart.resize;
    }
  }
};
</script>

<style scoped>
.col-md-1 {
  line-height: 34px;
}
.space{
  margin-bottom: 20px;
}
.serach {
  margin-bottom: 20px;
}
.table_kind span {
  padding: 15px 20px;
  cursor: pointer;
}
.table_kind {
  height: 50px;
  width: 95%;
  margin: 0 auto;
  border-bottom: 2px solid gray;
  box-sizing: border-box;
  line-height: 50px;
  margin-bottom: 15px;
}
.col-md-8 {
  text-align: right;
}
.btn {
  margin-left: 10px;
}
.row > div {
  padding: 0;
}
.row .col-md-1 {
  text-align: right;
  padding-right: 5px;
}
.row {
  margin-bottom: 10px;
}
.search {
  padding: 10px;
}
#myChart {
  width: 900px;
  height: 600px;
  margin: 0 auto;
}
.ordertracking_box {
  width: 98%;
  margin: 0 auto;
  background-color: white;
  margin-top: 10px;
  min-height: 680px;
  padding: 20px;
  /* min-width: 990px; */
}
</style>
