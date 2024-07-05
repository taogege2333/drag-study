<template>
	<div>buttonSetting</div>
	<div>{{ props }}</div>
</template>

<script setup lang="ts">
defineOptions({
	name: 'ButtonSetting',
});

import {ButtonProps} from '@/types/button';

const props = defineProps<ButtonProps>();
</script>
