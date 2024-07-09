<template>
	<WidgetFrame :widget="widget">
		<template #default="props">
			<el-button :type="props.type" :size="props.size">{{ props.text }}</el-button>
		</template>
	</WidgetFrame>
</template>

<script setup lang="ts">
defineOptions({
	name: 'ButtonWidget',
});

import WidgetFrame from '@/components/Widget/WidgetFrame/index.vue';
import {ButtonWidgetType} from '@/types/button';

const {widget} = defineProps<{widget: ButtonWidgetType}>();
</script>
