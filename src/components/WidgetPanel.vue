<template>
	<el-collapse
		v-for="widgetClassify in widgetClassifyList"
		:key="widgetClassify.name"
		v-model="activeNames"
		:accordion="false">
		<el-collapse-item :title="widgetClassify.title" :name="widgetClassify.name">
			<vue-draggable
				v-model="widgetClassify.list"
				:group="{name: 'widget', pull: 'clone', put: false}"
				:animation="150"
				:sort="false"
				class="flex flex-row flex-wrap justify-between"
				:clone="clone"
				@move="onMove">
				<div
					class="w-32 mb-2 text-center py-1 border border-solid border-gray-300 rounded cursor-move"
					v-for="item in widgetClassify.list"
					:key="item.name"
					:data-name="item.name"
					@dblclick="handleDblClick(item)">
					{{ item.name }}
				</div>
			</vue-draggable>
		</el-collapse-item>
	</el-collapse>
</template>

<script lang="ts" setup>
import {ref} from 'vue';
import {LAYOUT, BASE} from '@/data';
import {useDesignerStore} from '@/pinia/modules/designer';
import {WidgetType} from '@/types/designer';
import {VueDraggable} from 'vue-draggable-plus';
import {clone, checkMove} from '@/utils/utils';

const designer = useDesignerStore();
const activeNames = ref(['layout', 'base']);
const widgetClassifyList = [
	{
		title: '布局',
		name: 'layout',
		list: LAYOUT.components,
	},
	{
		title: '基础',
		name: 'base',
		list: BASE.components,
	},
];

const handleDblClick = (item: WidgetType) => {
	const id = designer.pushWidget(item);
	designer.setCurrentWidget(id);
};

const onMove = (e: any) => {
	const target = e.dragged.dataset.name;
	const to = e.to.dataset.name;
	return checkMove(target, to);
};
</script>
