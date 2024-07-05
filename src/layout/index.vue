<template>
	<el-container>
		<el-header>1</el-header>
		<el-container>
			<el-aside><WidgetPanel /></el-aside>
			<el-main><RenderPanel /></el-main>
			<el-aside><SettingPanel /></el-aside>
		</el-container>
	</el-container>
</template>

<script setup lang="ts">
import WidgetPanel from '@/components/WidgetPanel.vue';
import SettingPanel from '@/components/SettingPanel.vue';
import RenderPanel from '@/components/RenderPanel.vue';
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
	margin: 0 10px;
}
</style>
