<template>
	<el-button>{{ props.text }}</el-button>
</template>

<script setup lang="ts">
defineOptions({
	name: 'ButtonWidget',
});

import {ButtonProps} from '@/types/button';

const props = defineProps<ButtonProps>();
</script>
