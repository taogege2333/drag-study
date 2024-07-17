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
				<el-button
					v-if="currentWidget && !currentWidget?.disbaleRemove"
					type="primary"
					link
					@click="desiginer.copyWidget"
					>复制</el-button
				>
				<el-button type="primary" link @click="handleClickPreview">预览</el-button>
			</el-row>
		</el-col>
	</el-row>

	<el-dialog v-model="previewVisible" title="预览" width="60%">
		<preview-page :widgets="widgets"></preview-page>
	</el-dialog>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import {storeToRefs} from 'pinia';
import PreviewPage from '@/components/common/PreviewPage.vue';
import {useDesignerStore} from '@/pinia/modules/designer';

const desiginer = useDesignerStore();
const {currentWidget, widgets} = storeToRefs(desiginer);
const previewVisible = ref(false);

const handleClickPreview = () => (previewVisible.value = true);
</script>

<style lang="scss" scoped>
.el-row,
.el-col {
	height: 100%;
}
</style>
