<template>
	<div id="myChart" :style="{width: '600px', height: '450px'}"></div>
</template>
<script>
	export default {
		data() {
			return {}
		},
		//钩子函数
		mounted() {
			this.draw();
		},
		methods: {
			draw() {
				// 初始化echarts实例
				let myChart = this.$echarts.init(document.getElementById('myChart'))
				// 绘制图表
				var option = {
					title: {
						text: '热门专业TOP10',//感觉头部有点乱，没使用自带的标题
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
						data: ['1月', '2月', '3月', '4月', '5月', '6', '7', '8', '9', '10'], //x轴的数据
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
						data: [500, 200, 400, 500, 300, 250, 240, 230, 210, 280], //数据
						type: 'bar', //柱状图
						itemStyle: {
							normal: {
								color: '#FD6B71', //设置柱子颜色
								abel: {
									show: true, //柱子上显示值
									position: 'top', //值在柱子上方显示
									textStyle: {
										color: 'black' //值得颜色
									}
								}
							}
						},
						barWidth: 20 //设置柱子宽度，单位为px
					}],
				}
				//防止越界，重绘canvas
				window.onresize = myChart.resize;
				myChart.setOption(option); //设置option
			}
		}
	}
</script>
