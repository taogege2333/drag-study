<template>
	<div>
		<component
			v-if="currentWidget"
			:is="currentWidget?.settingComponent"
			:widget="currentWidget"
			:key="currentWidget.id" />
	</div>
</template>

<script setup lang="ts">
import {computed} from 'vue';
import {useDesignerStore} from '@/pinia/modules/designer';

const designer = useDesignerStore();
const currentWidget = computed(() => designer.currentWidget);
</script>
