<template>
	<drag-frame
		:widgets="widgets"
		style="padding: var(--el-main-padding); overflow: auto"></drag-frame>
</template>

<script setup lang="ts">
import {useDesignerStore} from '@/pinia/modules/designer';
import DragFrame from '@/components/common/DragFrame.vue';
import {storeToRefs} from 'pinia';

const designer = useDesignerStore();
const {widgets} = storeToRefs(designer);
</script>
