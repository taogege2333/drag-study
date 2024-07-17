<template>
	<el-button :type="widget.props.type" :size="widget.props.size">{{ widget.props.text }}</el-button>
	<!-- <el-button :type="props.type" :size="props.size">{{ props.text }}</el-button> -->
</template>

<script setup lang="ts">
defineOptions({
	name: 'ButtonWidget',
});

// import {useWidget} from '@/hooks/useWidget';
import {ButtonWidgetType} from '@/types/button';
// import {ButtonPropsType} from '@/types/button';
import {computed} from 'vue';

// const props = defineProps<ButtonPropsType>();
const props = defineProps<{widget: ButtonWidgetType}>();
const widget = computed(() => props.widget);
// const {widget, currentWidget, handleClick} = useWidget<ButtonWidgetType>(props);
</script>
