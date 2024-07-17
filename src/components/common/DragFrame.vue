<template>
	<vue-draggable
		class="w-full h-full"
		v-model="children"
		group="widget"
		ghostClass="ghost"
		:animation="150"
		@add="onAdd"
		@move="onMove"
		:data-name="name">
		<component
			v-for="widget in children"
			:key="widget.id"
			:is="widget.widgetComponent"
			:data-name="widget.name"
			:widget="widget" />
	</vue-draggable>
</template>

<script setup lang="ts">
import {useDesignerStore} from '@/pinia/modules/designer';
import {WidgetType} from '@/types/designer';
import {computed, nextTick} from 'vue';
import {VueDraggable} from 'vue-draggable-plus';
import type {SortableEvent} from 'vue-draggable-plus';
import {checkMove} from '@/utils/utils';

const designer = useDesignerStore();
const props = defineProps<{widgets: WidgetType[]; id?: string; name?: string}>();
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

const onMove = (e: any) => {
	const target = e.dragged.dataset.name;
	const to = e.to.dataset.name;
	return checkMove(target, to);
};
</script>
