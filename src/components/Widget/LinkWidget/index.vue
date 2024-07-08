<template>
	<WidgetFrame :widget="widget">
		<el-link v-bind="props">{{ props.text }}</el-link>
	</WidgetFrame>
</template>

<script setup lang="ts">
defineOptions({
	name: 'LinkWidget',
});

import WidgetFrame from '@/components/Widget/WidgetFrame/index.vue';
import {LinkWidgetType} from '@/types/link';
import {computed} from 'vue';

const {widget} = defineProps<{widget: LinkWidgetType}>();
const props = computed(() => widget.props);
</script>
