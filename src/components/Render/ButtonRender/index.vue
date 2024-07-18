<template>
	<el-button :type="props.type" :size="props.size">{{ props.text }}</el-button>
</template>

<script setup lang="ts">
defineOptions({
	name: 'ButtonRender',
});

import {ButtonPropsType} from '@/types/button';

const props = defineProps<ButtonPropsType>();
</script>
