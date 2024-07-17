<template>
	<el-button
		:class="{selected: currentWidget?.id === widget.id}"
		:type="widget.props.type"
		:size="widget.props.size"
		@click.stop="handleClick"
		>{{ widget.props.text }}</el-button
	>
</template>

<script setup lang="ts">
defineOptions({
	name: 'ButtonWidget',
});

import {useWidget} from '@/hooks/useWidget';
import {ButtonWidgetType} from '@/types/button';

const props = defineProps<{widget: ButtonWidgetType}>();
const {widget, currentWidget, handleClick} = useWidget<ButtonWidgetType>(props);
</script>
