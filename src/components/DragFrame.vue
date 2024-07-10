<template>
	<VueDraggable
		class="w-full h-full"
		v-model="children"
		group="widget"
		ghostClass="ghost"
		:animation="150"
		@add="onAdd">
		<component
			v-for="widget in children"
			:key="widget.id"
			:is="widget.widgetComponent"
			:widget="widget" />
	</VueDraggable>
</template>

<script setup lang="ts">
import {useDesignerStore} from '@/pinia/modules/designer';
import {WidgetType} from '@/types/designer';
import {computed, nextTick} from 'vue';
import {VueDraggable, type SortableEvent} from 'vue-draggable-plus';

const designer = useDesignerStore();
const props = defineProps<{widgets: WidgetType[]; id?: string}>();
const children = computed({
	get() {
		// 直接监听props.widgets，不能使用解构，解构出来的widgets不具有响应式，无法监听变化
		return props.widgets;
	},
	set(value) {
		designer.setWidgets(value, props.id);
	},
});

const onAdd = (e: SortableEvent) => {
	nextTick(() => {
		designer.setCurrentWidget(children.value[e.newIndex as number].id);
	});
};
</script>
