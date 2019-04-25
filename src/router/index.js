import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/components/login'
import regist from '@/components/regist'
import homepage from '@/components/homepage'
import baoming from '@/components/baoming'
import PPM from '@/components/PPM'
import admissions from '@/components/admissions'
import add_student from '@/components/add_student'
import zhuzhuangtu from '@/components/zhuzhuangtu'
// import chat from '@/components/chat'

Vue.use(Router)


export default new Router({
	routes: [{
			path: '/',
			name: 'HelloWorld',
			component: HelloWorld
		},
		{
			path: '/login',
			name: 'login',
			component: login
		},
		{
			path: '/regist',
			name: 'regist',
			component: regist
		},
		{
			path: '/homepage',
			name: 'homepage',
			component: homepage
		},
		{
			path: '/baoming',
			name: 'baoming',
			component: baoming
		},
		{
			path: '/PPM',
			name: 'PPM',
			component: PPM
		},
		{
			path: '/admissions',
			name: 'admissions',
			component: admissions
		},
		{
			path: '/add_student',
			name: 'add_student',
			component: add_student,
		},
		{
			path: '/zhuzhuangtu',
			name: 'zhuzhuangtu',
			component: zhuzhuangtu
		}
	]
})
