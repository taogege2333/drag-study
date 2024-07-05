<template>
	<div>
		<component
			v-for="widget in designer.widgets"
			:key="widget.id"
			:is="widget.widgetComponent"
			v-bind="widget.props" />
	</div>
</template>

<script setup lang="ts">
import {useDesignerStore} from '@/pinia/modules/designer';

const designer = useDesignerStore();
</script>
