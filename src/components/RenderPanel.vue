<template>
	<VueDraggable
		class="w-full h-full"
		v-model="widgets"
		group="widget"
		ghostClass="ghost"
		:animation="150"
		@add="onAdd">
		<component
			v-for="widget in widgets"
			:key="widget.id"
			:is="widget.widgetComponent"
			:widget="widget" />
	</VueDraggable>
</template>

<script setup lang="ts">
import {computed} from 'vue';
import {useDesignerStore} from '@/pinia/modules/designer';
import {VueDraggable, type SortableEvent} from 'vue-draggable-plus';

const designer = useDesignerStore();

const widgets = computed({
	get() {
		return designer.widgets;
	},
	set(value) {
		designer.setWidgets(value);
	},
});

const onAdd = (e: SortableEvent) => {
	designer.setCurrentWidget(designer.widgets[e.newIndex as number].id);
};
</script>
