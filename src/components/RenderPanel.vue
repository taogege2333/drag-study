<template>
	<drag-frame :widgets="widgets"></drag-frame>
</template>

<script setup lang="ts">
import {useDesignerStore} from '@/pinia/modules/designer';
import DragFrame from '@/components/DragFrame.vue';
import {storeToRefs} from 'pinia';

const designer = useDesignerStore();
const {widgets} = storeToRefs(designer);
</script>
