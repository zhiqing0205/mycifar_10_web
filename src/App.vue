<!--
 * @Author: Zhiqing 1775840762@qq.com
 * @Date: 2024-03-22 02:15:44
 * @LastEditors: Zhiqing 1775840762@qq.com
 * @LastEditTime: 2024-03-22 02:21:32
 * @FilePath: \mycifar_10_web\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
	<div class="common-layout">
		<el-container>
			<el-header>
				<the-header></the-header>
			</el-header>
			<el-main style="min-height: 80vh">
				<router-view/>
			</el-main>
			<el-footer>
				<the-footer></the-footer>
			</el-footer>
		</el-container>
	</div>
</template>

<script>
import { defineComponent } from "vue";
import TheHeader from "@/components/the-header.vue";
import TheFooter from "@/components/the-footer.vue";
export default defineComponent({
	components: {
		TheHeader,
		TheFooter,
	},
	setup() {
		return {};
	},
});

</script>

<style>

</style>
