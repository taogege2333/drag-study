<template>
	<div>
		<component
			v-if="designer.currentWidget"
			:is="designer.currentWidget?.settingComponent"
			v-bind="designer.currentWidget?.props" />
	</div>
</template>

<script setup lang="ts">
import {useDesignerStore} from '@/pinia/modules/designer';

const designer = useDesignerStore();
</script>
