<template>
	<el-link
		v-bind="widget.props"
		:class="{selected: currentWidget?.id === widget.id}"
		@click.stop="handleClick"
		>{{ widget.props.text }}</el-link
	>
</template>

<script setup lang="ts">
defineOptions({
	name: 'LinkWidget',
});

import {useWidget} from '@/hooks/useWidget';
import {LinkWidgetType} from '@/types/link';

const props = defineProps<{widget: LinkWidgetType}>();
const {widget, currentWidget, handleClick} = useWidget<LinkWidgetType>(props);
</script>
