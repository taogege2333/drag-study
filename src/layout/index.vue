<template>
	<el-container>
		<el-header>1</el-header>
		<el-container>
			<el-aside>2</el-aside>
			<el-main>3</el-main>
			<el-aside>4</el-aside>
		</el-container>
	</el-container>
</template>

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
