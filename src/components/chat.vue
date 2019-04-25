<template>
	<div class="container">
		<h2 class="text-center">在线聊天室</h2>
		<p>昵称:{{nickName}}</p>
		<form action="" class="form-horizontal">
			<div class="form-group">
				<div class="chat-list form-control">
					<p v-for="item in chatList">{{item.nickName}} : {{item.content}}</p>
				</div>
			</div>
			<div class="form-group">
				<div class="col-sm-11">
					<input type="text" class="form-control" v-model="content" placeholder="请输入内容">
				</div>
				<button class="btn btn-primary col-sm-1" @click.prevent="send">发送</button>
			</div>
		</form>
	</div>
</template>

<script>
	new Vue({
		el: ".container",
		mounted: function() {
			this.nickName = prompt("input your name")
			this.ws = new WebSocket("ws://localhost:3000")
			this.ws.onopen = function() {
				console.log("连接成功")
			}
			var _this = this
			this.ws.onmessage = function(ev) {
				var item = JSON.parse(ev.data)
				_this.chatList.push(item)
			}
		},
		data: {
			ws: null,
			nickName: "",
			chatList: [],
			content: ""
		},
		methods: {
			send() {
				var data = {
					nickName: this.nickName,
					content: this.content
				}
				//将信息发送到后端
				this.ws.send(JSON.stringify(data))
			}
		},
		var webSocket = require('ws')

		var wss = new webSocket.Server({
			port: 3000
		})
		//监听客户端的连接事件
		wss.on("connection", function(ws) {
			console.log("新用户连接")
			//接收前端的信息
			ws.on("message", function(data) {
				wss.clients.forEach(function(client) {
					//将信息广播
					client.send(data)
				})
			})
		})

		console.log("websocket server is running")
	})
</script>

<style>
</style>
