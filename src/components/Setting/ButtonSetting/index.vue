<template>
	<div>buttonSetting</div>
	<div>{{ widget.id }}</div>
	<div>{{ props }}</div>
</template>

<script setup lang="ts">
defineOptions({
	name: 'ButtonSetting',
});

import {ButtonWidgetType} from '@/types/button';
import {computed} from 'vue';

const {widget} = defineProps<{widget: ButtonWidgetType}>();
const props = computed(() => widget.props);
</script>
