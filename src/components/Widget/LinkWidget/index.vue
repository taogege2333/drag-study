<template>
	<el-link v-bind="widget.props">{{ widget.props.text }}</el-link>
</template>

<script setup lang="ts">
defineOptions({
	name: 'LinkWidget',
});

import {computed} from 'vue';
import {LinkWidgetType} from '@/types/link';

const props = defineProps<{widget: LinkWidgetType}>();
const widget = computed(() => props.widget);
</script>
