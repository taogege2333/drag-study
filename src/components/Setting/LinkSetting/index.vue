<template>
	<div>linkSetting</div>
	<div>{{ widget.id }}</div>
	<div>{{ props }}</div>
</template>

<script setup lang="ts">
defineOptions({
	name: 'LinkSetting',
});

import {LinkWidgetType} from '@/types/link';
import {computed} from 'vue';

const {widget} = defineProps<{widget: LinkWidgetType}>();
const props = computed(() => widget.props);
</script>
