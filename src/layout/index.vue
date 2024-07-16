<template>
	<el-container class="select-none">
		<el-header>1</el-header>
		<el-container>
			<el-aside><WidgetPanel /></el-aside>
			<el-container>
				<el-header class="tools"><Tools /></el-header>
				<el-main><RenderPanel /></el-main>
			</el-container>
			<el-aside><SettingPanel /></el-aside>
		</el-container>
	</el-container>
</template>

<script setup lang="ts">
import WidgetPanel from '@/components/WidgetPanel.vue';
import SettingPanel from '@/components/SettingPanel.vue';
import RenderPanel from '@/components/RenderPanel.vue';
import Tools from '@/components/Tools.vue';
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
</style>
