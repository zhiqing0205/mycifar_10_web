<template>
	<el-menu
		default-active="/"
		class="el-menu-demo"
		mode="horizontal"
		:ellipsis="false"
		:router="true"
	>
		<el-menu-item index="/">HomePage</el-menu-item>
		<el-menu-item index="/classify">ImageClassify</el-menu-item>
		<el-menu-item index="/record">ClassifyRecord</el-menu-item>
		<el-menu-item index="/about">About</el-menu-item>
		<div class="flex-grow" />
		<el-sub-menu index="3">
			<template #title>Register</template>
			<el-menu-item index="/register">Register</el-menu-item>
			<el-menu-item index="/login">Login</el-menu-item>
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