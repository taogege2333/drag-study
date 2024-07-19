<template>
	<el-row>
		<el-col :span="12"></el-col>
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
				<el-button type="primary" link @click="generateCode">生成代码</el-button>
			</el-row>
		</el-col>
	</el-row>

	<el-dialog v-model="previewVisible" title="预览" width="60%">
		<preview-page :widgets="widgets"></preview-page>
	</el-dialog>

	<el-dialog v-model="codeVisible" title="代码" width="60%" destroy-on-close>
		<code-editor :code="code"></code-editor>
		<template #footer>
			<el-button type="primary" @click="handleClickCopy">复制代码</el-button>
			<el-button type="primary" @click="exportVueFile">导出vue文件</el-button>
		</template>
	</el-dialog>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import {storeToRefs} from 'pinia';
import PreviewPage from '@/components/common/PreviewPage.vue';
import CodeEditor from './common/CodeEditor.vue';
import {useDesignerStore} from '@/pinia/modules/designer';
import {generateSFC, prettierCode} from '@/utils/generateCode';

const desiginer = useDesignerStore();
const {currentWidget, widgets} = storeToRefs(desiginer);
const previewVisible = ref(false);
const codeVisible = ref(false);
const code = ref('');

const handleClickPreview = () => (previewVisible.value = true);

const generateCode = async () => {
	code.value = await prettierCode(generateSFC(widgets.value));
	codeVisible.value = true;
};
const handleClickCopy = async () => {
	try {
		navigator.clipboard.writeText(code.value);
		ElMessage({
			message: '复制成功',
			type: 'success',
		});
	} catch (error) {
		ElMessage({
			message: '复制失败',
			type: 'error',
		});
	}
};

const exportVueFile = () => {
	// 生成vue文件虚拟链接
	const link = document.createElement('a');
	link.style.display = 'none';
	link.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(code.value);
	link.download = 'index.vue';
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
};
</script>

<style lang="scss" scoped>
.el-row,
.el-col {
	height: 100%;
}
</style>
