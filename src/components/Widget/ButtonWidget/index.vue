<template>
	<WidgetFrame :widget="widget">
		<el-button :type="props.type" :size="props.size">{{ props.text }}</el-button>
	</WidgetFrame>
</template>

<script setup lang="ts">
defineOptions({
	name: 'ButtonWidget',
});

import {computed} from 'vue';
import WidgetFrame from '@/components/Widget/WidgetFrame/index.vue';
import {ButtonWidgetType} from '@/types/button';

const {widget} = defineProps<{widget: ButtonWidgetType}>();
const props = computed(() => widget.props);
</script>
