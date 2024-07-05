<template>
	<el-link v-bind="props">{{ props.text }}</el-link>
</template>

<script setup lang="ts">
defineOptions({
	name: 'LinkWidget',
});

import {LinkProps} from '@/types/link';

const props = defineProps<LinkProps>();
</script>
