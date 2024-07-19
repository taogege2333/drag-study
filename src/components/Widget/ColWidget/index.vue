<template>
	<el-col v-bind="widget.props" class="border border-slate-300 border-dashed">
		<drag-frame :widgets="widget.children" :id="widget.id" :name="widget.name"></drag-frame>
	</el-col>
</template>

<script setup lang="ts">
defineOptions({
	name: 'ColWidget',
});

import DragFrame from '@/components/common/DragFrame.vue';
import {computed} from 'vue';
import {ColWidgetType} from '@/types/col';

const props = defineProps<{widget: ColWidgetType}>();
const widget = computed(() => props.widget);
</script>
