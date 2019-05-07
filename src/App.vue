<template>
	<div id="app">
		<el-container>
			<el-header v-if="$route.path=='/regist'||$route.path=='/login'">
				<div>{{$route.path}}</div>
			</el-header>
			<el-header v-if="$route.path=='/homepage'||$route.path=='/baoming'||$route.path=='/admissions'||$route.path=='/chat'||$route.path=='/zhuzhuangtu'">
				<!-- <div>11</div> -->
				<el-menu :default-active="activeIndex2" class="el-menu-demo center_css" mode="horizontal" @select="handleSelect"
				 background-color="#B3C0D1" text-color="#fff" active-text-color="#ffd04b" id="meau" style="margin-right: 50px;">
					<el-menu-item index="1" target="_blank"><a>学校概况</a></el-menu-item>
					<el-menu-item index="2" target="_blank"><a>招生情况</a></el-menu-item>
					<el-menu-item index="3" target="_blank"><a>聊天室</a></el-menu-item>
					<el-menu-item index="4" target="_blank"><a>预报名</a></el-menu-item>
					<el-dropdown trigger="click" style="margin-left: 200px;">
						<span class="el-dropdown-link">
							<span class="el-icon-bell" style="font-size:20px;color: #00FF00;"></span>通知<i class="el-icon-caret-bottom el-icon--right"></i>
						</span>
						<el-dropdown-menu slot="dropdown">
							<el-dropdown-item class="clearfix">
								评论
								<el-badge class="mark" :value="12" />
							</el-dropdown-item>
							<el-dropdown-item class="clearfix">
								回复
								<el-badge class="mark" :value="3" />
							</el-dropdown-item>
						</el-dropdown-menu>
					</el-dropdown>
					<div v-if="!is_login">
						<el-button type="primary" @click="login_page">登陆</el-button><el-button type="primary" @click="registed_page">注册</el-button>
					</div>
					<div v-if="is_login">
						{{this.is_login}}
					</div>
				</el-menu>
				
			</el-header>
			<el-main>
				<router-view />
			</el-main>
		</el-container>
	</div>
</template>

<script>
	export default {
		name: 'App',
		data() {
			return {
				activeIndex2: localStorage.getItem("index"),
				is_login:localStorage.getItem("user_id")
			}
		},
		methods: {
			login_page(){
				this.$router.push({
					path: '/login'
				})
			},registed_page(){
				this.$router.push({
					path: '/regist'
				})
			},
			handleSelect(key, keyPath) {
				localStorage.setItem("index",key)
				console.log(key, keyPath);
				if(key==4){
					this.$router.push({
						path: '/baoming'
					})
				}if(key==1){
					this.$router.push({
						path: '/homepage'
					})
				}if(key==2){
					this.$router.push({
						path: '/admissions'
					})
				}if(key==3){
					this.$router.push({
						path: '/chat'
					})
				}
			}
		},
		created() {
			localStorage.setItem("index",this.$route.path=='/homepage'?"1":this.$route.path=='/baoming'?"4":this.$route.path=='/admissions'?"2":"1")
			console.log(this.$route.path)
		}
	}
</script>

<style>
	a {
		text-decoration: none;
	}

	.el-header,
	.el-footer {
		background-color: #B3C0D1;
		color: #333;
		text-align: center;
		line-height: 60px;
	}

	.el-aside {
		background-color: #D3DCE6;
		color: #333;
		text-align: center;
		line-height: 200px;
	}

	.el-main {
		background-color: #E9EEF3;
		color: #333;
		text-align: center;
		/* line-height: 500px; */
		height: 800px;
	}

	body>.el-container {
		margin-bottom: 40px;
	}

	.el-container:nth-child(5) .el-aside,
	.el-container:nth-child(6) .el-aside {
		line-height: 260px;
	}

	.el-container:nth-child(7) .el-aside {
		line-height: 320px;
	}

	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}
	.center_css{
		display: flex;
		justify-content: space-around;	
	}
</style>
