<template>
	<div class="add_css">
		<div>姓名：<input v-model="form_add.name"></input></div>
		<div>性别：<input v-model="form_add.sex"></input></div>
		<div>年龄：<input v-model="form_add.age"></input></div>
		<div>报考专业：<input v-model="form_add.major"></input></div>
		<div>报考系别：<input v-model="form_add.department"></input></div>
		<div>报考院别：<input v-model="form_add.academy"></input></div>
		<div>生源地：<input v-model="form_add.location"></input></div>
		<el-button @click="add_landsource">提交</el-button>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				form_add: {
					name: '',
					sex: '',
					age: '',
					major: '',
					department: "",
					academy: "",
					location: "",
				        },
				data: ""
			}
		},
		methods: {
			add_landsource() {
				var _this = this
				_this.data = {
					name: _this.form_add.name,
					sex: _this.form_add.sex,
					age: _this.form_add.age,
					major: _this.form_add.major,
					department: _this.form_add.department,
					academy: _this.form_add.academy,
					location: _this.form_add.location,
					user_id: localStorage.getItem("user_id")
				}
				_this.$axios({
					url: "http://192.168.0.107:8000/api/create_student/",
					method: "POST",
					data: _this.data
				}).then((res) => {
					_this.$router.push({
						path: '/baoming'
					})
				})

			}
		}
	}
</script>

<style>

</style>
