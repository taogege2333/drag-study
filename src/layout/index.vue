<template>
	<el-container class="select-none">
		<el-header>1</el-header>
		<el-container>
			<el-aside>
				<el-tabs v-model="activeName">
					<el-tab-pane label="组件" name="widget"><WidgetPanel /></el-tab-pane>
					<el-tab-pane label="树形结构" name="tree"><tree-panel /></el-tab-pane>
				</el-tabs>
			</el-aside>
			<el-container>
				<el-header class="tools"><tools-panel /></el-header>
				<el-main><RenderPanel /> </el-main>
			</el-container>
			<el-aside><SettingPanel /></el-aside>
		</el-container>
	</el-container>
</template>

<script setup lang="ts">
import WidgetPanel from '@/components/WidgetPanel.vue';
import SettingPanel from '@/components/SettingPanel.vue';
import RenderPanel from '@/components/RenderPanel.vue';
import ToolsPanel from '@/components/ToolsPanel.vue';
import TreePanel from '@/components/TreePanel.vue';
import {ref} from 'vue';

const activeName = ref('widget');
</script>

<style lang="scss" scoped>
@mixin common {
	height: calc(100vh - 70px);
	background: white;
	box-shadow: var(--el-box-shadow-lighter);
}

.el-header {
	@include common;
	height: var(--el-header-height);
	margin-bottom: 10px;
}

.el-aside {
	@include common;
	padding: 20px;
}

.el-main {
	@include common;
	height: calc(100vh - 140px);
	padding: 0;
	margin: 0 10px;
}

.tools {
	margin-right: 10px;
	margin-left: 10px;
}

.el-tabs {
	/* stylelint-disable-next-line */
	:deep(.el-tabs__nav) {
		width: 100%;
	}

	/* stylelint-disable-next-line */
	:deep(.el-tabs__item) {
		flex: 1;
	}
}
</style>
