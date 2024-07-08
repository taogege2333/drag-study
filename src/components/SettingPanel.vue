<template>
	<div>
		<component
			v-if="designer.currentWidget"
			:is="designer.currentWidget?.settingComponent"
			:widget="designer.currentWidget" />
	</div>
</template>

<script setup lang="ts">
import {useDesignerStore} from '@/pinia/modules/designer';

const designer = useDesignerStore();
</script>
