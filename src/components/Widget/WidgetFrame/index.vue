<template>
	<div class="frame inline-block" :style="style" @mousedown="handleClick">
		<slot v-bind="widget.props" />
	</div>
</template>

<script setup lang="ts">
import {useDesignerStore} from '@/pinia/modules/designer';
import {WidgetType} from '@/types/designer';
import {computed} from 'vue';

const {widget} = defineProps<{widget: WidgetType}>();
const designer = useDesignerStore();

const handleClick = () => {
	designer.setCurrentWidget(widget.id);
};

const style = computed(() => {
	return {
		outline: `1px solid ${designer.currentWidget?.id === widget.id ? 'red' : 'transparent'}`,
	};
});
</script>
