<template>
	<el-link :type="props.type">{{ props.text }}</el-link>
</template>

<script setup lang="ts">
defineOptions({
	name: 'LinkRender',
});

import {LinkPropsType} from '@/types/link';

const props = defineProps<LinkPropsType>();
</script>
