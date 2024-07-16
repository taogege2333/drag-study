<template>
	<component
		v-for="widget in widgets"
		:key="widget.id"
		:is="widget.renderComponent"
		v-bind="widget.props">
		<preview-page v-if="widget.children" :widgets="widget.children"></preview-page>
	</component>
</template>

<script setup lang="ts">
defineOptions({
	name: 'PreviewPage',
});

import {computed} from 'vue';
import {WidgetType} from '@/types/designer';

const props = defineProps<{widgets: WidgetType[]}>();
const widgets = computed(() => props.widgets);
</script>
