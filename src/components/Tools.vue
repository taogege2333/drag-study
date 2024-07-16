<template>
	<el-row>
		<el-col :span="12">1</el-col>
		<el-col :span="12">
			<el-row justify="end" align="middle">
				<el-button
					v-if="currentWidget && !currentWidget?.disbaleRemove"
					type="danger"
					link
					@click="desiginer.removeWidget"
					>删除</el-button
				>
			</el-row>
		</el-col>
	</el-row>
</template>

<script setup lang="ts">
import {useDesignerStore} from '@/pinia/modules/designer';
import {storeToRefs} from 'pinia';

const desiginer = useDesignerStore();
const {currentWidget} = storeToRefs(desiginer);
</script>

<style lang="scss" scoped>
.el-row,
.el-col {
	height: 100%;
}
</style>
