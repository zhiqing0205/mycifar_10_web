<!--
 * @Description:
 * @Version: 2.0
 * @Author: Zhiqing Zhong
 * @Date: 2022-01-31 02:47:52
 * @LastEditors: Zhiqing Zhong
 * @LastEditTime: 2022-02-23 00:34:24
-->
<template>
    <div class="record">
		<el-table :data="tableData" height="650" style="width: 100%">
			<el-table-column prop="image" label="Imgage" width="240">
				<template #default="scope">
					<img :src="scope.row.image" style="height: 80px;" />
				</template>
			</el-table-column>
			<el-table-column prop="result" label="Result" width="120">
				<template #default="scope">
				
						<el-tag>{{ scope.row.result }}</el-tag>
				</template>
			</el-table-column>
			<el-table-column prop="probability" label="Probability" width="120"/>
			<el-table-column prop="probability_list" label="ProbabilityList" />
			<el-table-column prop="time" label="Date" width="180" />
			
		</el-table>
    </div>
</template>

<script>
import {defineComponent, onMounted, ref} from "vue";
import {classifyRecord} from "@/api/classify";

export default defineComponent({
    name: "Home",
    setup() {
		const tableData = ref([])
	    
	    const getData = () => {
			classifyRecord().then(res => {
				tableData.value = res.data
			})
	    }
	    
	    onMounted(() => {
		    getData()
		})
	    
        return {
			tableData
        };
    },
});
</script>

<style scoped>

</style>
