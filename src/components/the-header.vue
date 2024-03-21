<template>
	<el-menu
		default-active="/"
		class="el-menu-demo"
		mode="horizontal"
		:ellipsis="false"
		:router="true"
	>
		<el-menu-item index="/">首页</el-menu-item>
		<el-menu-item index="/classify">图片分类</el-menu-item>
		<el-menu-item index="/record">分类记录</el-menu-item>
		<el-menu-item index="/about">关于</el-menu-item>
		<div class="flex-grow" />
		<el-sub-menu index="3">
			<template #title>注册</template>
			<el-menu-item index="/register">注册</el-menu-item>
			<el-menu-item index="/login">登录</el-menu-item>
		</el-sub-menu>
	</el-menu>
</template>

<script>
import {defineComponent, ref} from "vue";
import {useRouter} from "vue-router";

export default defineComponent({
	name: "Home",
	setup() {
		return {
		
		};
	},
});
</script>

<style>
.flex-grow {
	flex-grow: 1;
}
</style>