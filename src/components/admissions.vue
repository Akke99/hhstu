<template>
	<div class="main_css">

		<div class="seven_echarts" id="seven" :style="{width: '600px', height: '350px'}"></div>

		<div id="myChart" :style="{width: '600px', height: '350px'}"></div>
	</div>

</template>

<script type="text/javascript">
	export default {
		data() {
			return {
				seven1: {
					seven_chart: null,
					month_chart: null,
					seven_option: {
						title: {
							text: '黄河科技学院近年招生人数总览', //感觉头部有点乱，没使用自带的标题
							// subtext: '纯属虚构'
							x: 'center',
							align: 'center'
						},
						tooltip: {
							trigger: 'axis'
						},
						legend: {
							data: ['招生人数'],
							left: '75%', //图例的离左边位置，可以用像素，可以用百分比，也可以用center，right等
							top: "30px", //图例离顶部的位置
							itemWidth: 10, //图例图标的宽
							itemHeight: 10, //图例图标的高
							textStyle: {
								color: '#878787', //文字的具体的颜色
							}
						},
						grid: {
							left: '3%',
							right: '4%',
							bottom: '3%',
							containLabel: true
						},
						toolbox: {
							feature: {
								magicType: {
									type: ['line', 'bar']
								}, //柱状图和西和折线图切换
								restore: {}, //刷新
								saveAsImage: {}, //将图表以折线图的形式展现
							}
						},
						xAxis: {
							type: 'category',
							boundaryGap: false,
							data: []
						},
						yAxis: {
							name: "人",
							nameLocation: 'end',
							type: 'value',
							axisLabel: {
								formatter: '{value} '
							}
						},
						series: [{
								name: '招生人数',
								type: 'line',
								data: [],
								lineStyle: { //设置折线色颜色
									color: 'gray'
								},
								itemStyle: { //设置折线折点的颜色
									normal: {
										color: 'red'
									}
								}
							},
							{
								name: '平行于y轴的趋势线',
								type: 'line',
								markLine: {
									name: 'aa',
									data: [{
										name: '0℃标准线',
										yAxis: 0,
										lineStyle: { //设置折线色颜色
											color: 'black'
										},
									}, ],
									// symbol: ['arrow', 'none'], //将箭头向左  默认值是向右的
									// label: {
									// 	show: true,
									// 	position: 'middle', //markline描述位于中间   right，left，middle
									// 	formatter: '{b}: {c}', //显示name中的描述
									// }

								}
							}

						],
					},
				},
				zhuzhuang: {
					option: {
						title: {
							text: '热门专业TOP10', //感觉头部有点乱，没使用自带的标题
							x: 'center',
							align: 'center'
						},
						legend: {
							data: ['专业TOP10'], //与series的name对应
							left: '75%', //图例的离左边位置，可以用像素，可以用百分比，也可以用center，right等
							top: "30px", //图例离顶部的位置
							itemWidth: 10, //图例图标的宽
							itemHeight: 10, //图例图标的高
							textStyle: {
								color: '#878787', //文字的具体的颜色
							}
						},
						toolbox: {
							feature: {
								magicType: {
									type: ['line', 'bar']
								}, //柱状图和西和折线图切换
								restore: {}, //刷新
								saveAsImage: {}, //将图表以折线图的形式展现
							}
						},
						//x轴
						xAxis: {
							type: 'category',
							data: [], //x轴的数据
							splitLine: {
								show: true
							}, //去除网格分割线
							// splitArea: {show: true},//保留网格区域
							axisLine: { //坐标线
								lineStyle: {
									type: 'solid',
									color: 'black', //轴线的颜色
									width: '1' //坐标线的宽度
								}
							},
							axisTick: { //刻度
								show: false //不显示刻度线
							},
							axisLabel: {
								interval: 0,
								formatter: function(value) {

									var ret = ""; //拼接加\n返回的类目项  
									var maxLength = 2; //每项显示文字个数  
									var valLength = value.length; //X轴类目项的文字个数  
									var rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数  
									if (rowN > 1) //如果类目项的文字大于3,  
									{
										for (var i = 0; i < rowN; i++) {
											var temp = ""; //每次截取的字符串  
											var start = i * maxLength; //开始截取的位置  
											var end = start + maxLength; //结束截取的位置  
											//这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧  
											temp = value.substring(start, end) + "\n";
											ret += temp; //凭借最终的字符串  
										}
										return ret;
									} else {
										return value;
									}
								},
								textStyle: {
									color: '#878787', //坐标值的具体的颜色
								}
							},
							splitLine: {
								show: false //去掉分割线
							},
						},
						yAxis: {
							name: '报考人数：人', //轴的名字，默认位置在y轴上方显示,也可不写
							max: 1000, //最大刻度
							type: 'value',
							axisLine: { //线
								show: true
							},
							axisTick: { //刻度
								show: true
							},
							axisLabel: {
								textStyle: {

									color: 'black' //坐标值得具体的颜色
								}
							},
							minInterval: 100, //标值的最小间隔
							splitLine: {
								lineStyle: {
									color: ['#f6f6f6'], //分割线的颜色

								}
							}
						},
						series: [{
							name: '专业TOP10', //每组数据的名字，与图例对应
							data: [], //数据
							type: 'bar', //柱状图
							itemStyle: {
								normal: {
									color: '#FD6B71', //设置柱子颜色
									abel: {
										show: true, //柱子上显示值
										position: 'top', //值在柱子上方显示
										textStyle: {
											color: 'black' //值的颜色
										}
									}
								}
							},
							barWidth: 20 //设置柱子宽度，单位为px
						}],
					}
				}
			}

		},
		mounted: function() {
			this.get_echarts();
			this.draw();
		},
		methods: {
			get_echarts: function() {
				this.seven_chart = this.$echarts.init(document.getElementById("seven"));
				// 把配置和数据放这里
				this.$axios({
					method: "GET",
					url: "http://192.168.20.67:8000/api/getinfo_admission/?user_id=" + localStorage.getItem("user_id"),
				}).then(res => {
					// console.log(res)
					this.seven1.seven_option.xAxis.data = res.data.data_year_count.year
					this.seven1.seven_option.series[0].data = res.data.data_year_count.peo_count
					// console.log(this.seven1.seven_option)
					this.seven_chart.setOption(this.seven1.seven_option)
					// })
				})

			},
			beforeDestroy() {
				if (!this.seven_chart || !this.myChart) {
					return
				}
				this.seven_chart.dispose();
				this.myChart.dispose();
				this.seven_chart = null;
				this.myChart = null;
			},
			draw() {
				// 初始化echarts实例
				this.myChart = this.$echarts.init(document.getElementById('myChart'))
				// 绘制图表
				;
				this.$axios({
					method: "GET",
					url: "http://192.168.20.67:8000/api/getinfo_admission/?user_id=" + localStorage.getItem("user_id"),
				}).then(res => {
					// console.log(res)
					this.zhuzhuang.option.xAxis.data = res.data.data_top_ten_count.department
					this.zhuzhuang.option.series[0].data = res.data.data_top_ten_count.peo_top
					console.log(this.zhuzhuang.option)
					this.myChart.setOption(this.zhuzhuang.option); //设置option
					// })
				})
				//防止越界，重绘canvas
				// window.onresize = myChart.resize;

			}
		},



	}
</script>

<style type="text/css">
	.main_css {
		display: flex;
		/* 横向 */
		justify-content: space-around;
		/* 纵向 */
		align-items: center;
	}

	/* .content {
		width: 100%;
		
	} */

	.content p {
		margin-top: 1rem;
		font-size: 0.4rem;
		color: #666666;
	}

	.seven_echarts {
		height: 20rem;
		width: 40%;
	}
</style>
