<template>
	<el-aside v-bind="widget.props" class="border border-slate-300 border-dashed">
		<drag-frame :widgets="widget.children" :id="widget.id" :name="widget.name"></drag-frame>
	</el-aside>
</template>

<script setup lang="ts">
defineOptions({
	name: 'AsideWidget',
});

import DragFrame from '@/components/common/DragFrame.vue';
import {computed} from 'vue';
import {LayoutWidgetType} from '@/types/designer';

const props = defineProps<{widget: LayoutWidgetType}>();
const widget = computed(() => props.widget);
</script>
