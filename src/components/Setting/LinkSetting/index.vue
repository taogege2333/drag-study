<template>
	<div>linkSetting</div>
	<div>{{ props }}</div>
</template>

<script setup lang="ts">
defineOptions({
	name: 'LinkSetting',
});

import {LinkProps} from '@/types/link';

const props = defineProps<LinkProps>();
</script>
