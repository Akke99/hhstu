<template>
	<div class="login_page">
		<img src="../assets/img5.jpg" alt="">
		<div>
			<div class="login_input">输入账号：<input v-model="username" type="text" style="margin: 3px;" placeholder="请输入您的手机号"></div>
			<div class="login_input">输入密码：<input v-model="pwd" type="password"></div>
			<div class="login_input">重复密码：<input v-model="pwd1" type="password"></div>
			<el-button type="primary" @click="regist" class="button_login">注册</el-button>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				username: "",
				pwd: "",
				pwd1:""
				
			}
		},
		methods: {
			// 注册按钮方法
			regist() {
				var _this = this;
				var reg = /(^1(3|4|5|7|8)\d{9}$)/;
				// var peg = /^(?![A-Z]+$)(?![a-z]+$)(?!\d+$)\S{6,16}$/;
				console.log(this.pwd1,this.pwd)
				if (this.username == "" || this.pwd == "" || reg.test(this.username) == false || this.pwd != this.pwd1) {
						this.$message({
						message: '请填写有效的注册信息或检查密码一致',
						type: 'warning'
					})
				
				} else {
					this.$axios({
						method: "POST",
						url: 'https://nei.netease.com/api/apimock/21128e891ba80c0ca964d988855a7079/api/register/',
						data: {
							name: this.username,
							pwd: this.pwd
						}
					}).then((res) => {
						console.log(res)
						// 存localStorage
						// 取localStorage.getItem("user_id")
						localStorage.setItem("roid_id", "1")
						localStorage.setItem("user_id", res.data.data.id)
						_this.$router.push({
							path: '/homepage'
						})

					})
				}
			}
		}
	}
</script>

<style>
	img {

		width: 1000px;
		height: 500px;
	}

	.login_page {
		/* 弹性 */
		display: flex;
		/* 横向 */
		justify-content: space-around;
		/* 纵向 */
		align-items: center;
	}

	.login_input {
		margin-bottom: 10px;
		/* border: 2px solid #B3C0D1; */
		border-radius: 5px;
	}

	.button_login {
		width: 100px;
		height: 30px;
		line-height: 8px;
	}
</style>
