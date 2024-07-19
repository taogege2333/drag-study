<template>
	<el-button :type="widget.props.type" :size="widget.props.size">{{ widget.props.text }}</el-button>
</template>

<script setup lang="ts">
defineOptions({
	name: 'ButtonWidget',
});

import {ButtonWidgetType} from '@/types/button';
import {computed} from 'vue';

const props = defineProps<{widget: ButtonWidgetType}>();
const widget = computed(() => props.widget);
</script>
