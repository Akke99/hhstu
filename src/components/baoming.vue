<template>
	<div>
		<!-- 添加土地资源 -->
		<!-- style="float: right;width: 100px;height: 50px;background-color: #808080;color: #B3C0D1;border-radius: 10px;border-bottom: 5px;" -->
		<el-button style="float: right;width: 120px;height: 50px;background-color: #808080;color: #B3C0D1;border-radius: 10px;border-bottom: 5px;"
		 @click="add_land">添加个人信息</el-button>


		<!-- 显示土地资源 -->
		<div>
			<!-- <el-button type="primary">添加</el-button>
			<el-button type="primary">修改</el-button>
			<el-button type="danger">删除</el-button><input v-model="input" type="text" placeholder="搜索"> -->
		</div>
		<el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
			<el-table-column type="selection" width="55">
			</el-table-column>
			<el-table-column label="姓名" width="120">
				<template slot-scope="scope">{{ scope.row.name }}</template>
			</el-table-column>
			<el-table-column prop="sex" label="性别" width="120">
			</el-table-column>
			<el-table-column prop="age" label="年龄" show-overflow-tooltip>
			</el-table-column>
			<el-table-column prop="major" label="报考专业" show-overflow-tooltip>
			</el-table-column>
			<el-table-column prop="department" label="报考系别" show-overflow-tooltip>
			</el-table-column>
			<el-table-column prop="academy" label="报考院别" show-overflow-tooltip>
			</el-table-column>
			<el-table-column prop="location" label="生源地" show-overflow-tooltip>
			</el-table-column>
			<el-table-column prop="create_on" label="预报名时间" show-overflow-tooltip>
			</el-table-column>
			<el-table-column v-if="show" prop="id" label="id" show-overflow-tooltip>
			</el-table-column>
			<el-table-column label="操作">



				<template slot-scope="scope">
					<el-button size="mini" @click="handleEdit(scope.$index, scope.row);dialogFormVisible = true">编辑</el-button>

					<!-- 编辑土地资源页面 -->
					<el-dialog title="学生信息" :visible.sync="dialogFormVisible">
						<el-form :model="form">
							<el-form-item label="姓名" :label-width="formLabelWidth">
								<el-input v-model="form.name" autocomplete="off" @change="landsource_change"></el-input>
							</el-form-item>
							<el-form-item label="性别" :label-width="formLabelWidth">
								<el-input v-model="form.sex" autocomplete="off" @change="landsource_change"></el-input>
							</el-form-item>
							<el-form-item label="年龄" :label-width="formLabelWidth">
								<el-input v-model="form.age" autocomplete="off" @change="landsource_change"></el-input>
							</el-form-item>
							<el-form-item label="报考专业" :label-width="formLabelWidth">
								<el-input v-model="form.major" autocomplete="off" @change="landsource_change"></el-input>
							</el-form-item>
							<el-form-item label="报考系别" :label-width="formLabelWidth">
								<el-input v-model="form.major" autocomplete="off" @change="landsource_change"></el-input>
							</el-form-item>
							<el-form-item label="报考院别" :label-width="formLabelWidth">
								<el-input v-model="form.department" autocomplete="off" @change="landsource_change"></el-input>
							</el-form-item>
							<el-form-item label="生源地" :label-width="formLabelWidth">
								<el-input v-model="form.location" autocomplete="off" @change="landsource_change"></el-input>
							</el-form-item>
							<el-form-item label="预报名时间" :label-width="formLabelWidth">
								<el-input v-model="form.create_on" autocomplete="off" @change="landsource_change"></el-input>
							</el-form-item>
							<el-form-item label="id" :label-width="formLabelWidth" style="display: none;">
								<el-input v-model="form.id" autocomplete="off"></el-input>
							</el-form-item>
						</el-form>
						<div slot="footer" class="dialog-footer">
							<el-button @click="dialogFormVisible = false">取 消</el-button>
							<el-button type="primary" @click="change_landsoureinfo">确 定</el-button>
						</div>
					</el-dialog>




					<el-button v-if="localStorage.getItem("role_id") == 1" size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)" slot="reference">删除</el-button>




				</template>
			</el-table-column>
		</el-table>
		<div style="margin-top: 20px">
			<!-- <el-button @click="toggleSelection([tableData[1], tableData[2]])">切换第二、第三行的选中状态</el-button> -->
			<!-- <el-button @click="toggleSelection()">取消选择</el-button> -->
		</div>
		<el-pagination background layout="prev, pager, next" :total="count" @current-change="handleCurrentChange">
		</el-pagination>
	</div>
</template>

<script>
	export default {
		name: 'App',
		data() {
			return {
				show: 0,
				input: "",
				tableData: [],
				count: 0,
				multipleSelection: [],
				page: "1",
				dialogTableVisible: false,
				dialogFormVisible: false,
				form: {
					name: '',
					sex: '',
					age: '',
					major: '',
					department: "",
					academy: "",
					location: "",
					created_on: "",
					id: ""
				},
				formLabelWidth: '120px',
				landsoure: "1",
				data: "",
				
			}
		},
		methods: {
			handleDelete(index) {
				console.log(localStorage.getItem("role_id"));
				this.$axios({
					method: "DELETE",
					url: "http://192.168.0.107:8000/api/delete_student_detail/" + this.tableData[index].id + "/",
					data: {
						user_id: localStorage.getItem("user_id")
					}
				}).then(res => {
					location.reload()
				})
			},
			add_land() {
				this.$router.push({
					path: '/add_student'
				})
			},
			//判断编辑页面表单变化依据
			landsource_change() {
				this.landsoure = "2"
			},
			//表单数据发生改变以后点击确定发生事件函数
			change_landsoureinfo() {
				if (this.landsoure == "1") {
					location.reload()
				} else {
					this.data = {
						name: this.form.name,
						sex: this.form.sex,
						age: this.form.age,
						major: this.form.major,
						department: this.form.department,
						academy: this.form.academy,
						location: this.form.location,
						user_id: localStorage.getItem("user_id")
					}
					console.log(this.form.id)
					this.$axios({
						method: "PUT",
						url: "http://192.168.0.107:8000/api/update_student_detail/" + this.form.id + "/",
						data: this.data,
					}).then(res => {
						location.reload()
					})
				}
			},
			toggleSelection(rows) {
				if (rows) {
					rows.forEach(row => {
						this.$refs.multipleTable.toggleRowSelection(row);
					});
				} else {
					this.$refs.multipleTable.clearSelection();
				}
			},
			handleSelectionChange(val) {
				this.multipleSelection = val;
			},
			
			//土地编辑
			handleEdit(index, row) {
				console.log(this.tableData[index]);
				this.form.name = this.tableData[index].name
				this.form.sex = this.tableData[index].sex
				this.form.age = this.tableData[index].age
				this.form.major = this.tableData[index].major
				this.form.department = this.tableData[index].department
				this.form.academy = this.tableData[index].academy
				this.form.location = this.tableData[index].location
				this.form.create_on = this.tableData[index].create_on
				this.form.state = this.tableData[index].state
				this.form.id = this.tableData[index].id

			},

			//点击页码刷新数据
			handleCurrentChange(val) {
				var _this = this;
				this.page =  val
				this.$axios({
					method: "GET",
					url: "http://192.168.20.67:8001/api/get_land_resources/?user_id=" + localStorage.getItem("user_id") + "&" +
						"page=" + _this.page,
				}).then(res => {
					console.log(res.data.count)
				
					// console.log(localStorage.getItem("user_id"))
					_this.count = res.data.count
				
					_this.tableData = res.data.data.map((value, index) => {
						return {
							name: value.name,
							sex: value.sex,
							age: value.age,
							major: value.major,
							department: value.department,
							academy: value.academy,
							location: value.location,
							create_on: value.create_on,
							id: value.id,
						}
					})
				
				})
			}
		},


		//页面刷新时候加载页面数据
		created() {
			var _this = this;
			this.$axios({
				method: "GET",
				url: "http://192.168.0.107:8000/api/get_students/?user_id=" + localStorage.getItem("user_id") + "&" +
					"page=" + _this.page,
			}).then(res => {
				console.log(res.data.data)

				// console.log(localStorage.getItem("user_id"))
				_this.count = res.data.count

				_this.tableData = res.data.data.map((value, index) => {
				
					
					return {
						name: value.name,
						sex: value.sex,
						age: value.age,
						major: value.major,
						department: value.department,
						academy: value.academy,
						location: value.location,
						create_on: value.create_on,
						id: value.id,
					}
				})

			})
		}
	}
</script>

<style>
</style>
