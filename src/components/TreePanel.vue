<template>
	<el-tree
		:data="widgets"
		:props="{children: 'children', label: 'name'}"
		node-key="id"
		:current-node-key="designer.currentWidget?.id"
		highlight-current
		default-expand-all
		:expand-on-click-node="false"
		@current-change="onChange"></el-tree>
</template>

<script setup lang="ts">
import {useDesignerStore} from '@/pinia/modules/designer';
import {WidgetType} from '@/types/designer';
import {storeToRefs} from 'pinia';

const designer = useDesignerStore();
const {widgets} = storeToRefs(designer);

const onChange = (current: WidgetType) => {
	designer.setCurrentWidget(current.id);
};
</script>
