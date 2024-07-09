<template>
	<WidgetFrame :widget="widget">
		<template #default="props">
			<el-link v-bind="props">{{ props.text }}</el-link>
		</template>
	</WidgetFrame>
</template>

<script setup lang="ts">
defineOptions({
	name: 'LinkWidget',
});

import WidgetFrame from '@/components/Widget/WidgetFrame/index.vue';
import {LinkWidgetType} from '@/types/link';

const {widget} = defineProps<{widget: LinkWidgetType}>();
</script>
