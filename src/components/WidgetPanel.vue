<template>
	<el-collapse v-model="activeNames" :accordion="false">
		<el-collapse-item title="基础" name="base">
			<VueDraggable
				v-model="list"
				:group="{name: 'widget', pull: 'clone', put: false}"
				:animation="150"
				:sort="false"
				class="flex flex-row flex-wrap justify-between"
				:clone="clone">
				<div
					class="w-32 text-center py-1 border border-solid border-gray-300 rounded cursor-move"
					v-for="item in list"
					:key="item.name"
					@dblclick="handleDblClick(item)">
					{{ item.name }}
				</div>
			</VueDraggable>
		</el-collapse-item>
	</el-collapse>
</template>

<script lang="ts" setup>
import {ref} from 'vue';
import {BASE} from '@/data';
import {useDesignerStore} from '@/pinia/modules/designer';
import {WidgetType} from '@/types/designer';
import {VueDraggable} from 'vue-draggable-plus';
import {clone} from '@/utils/utils';

const designer = useDesignerStore();
const list = ref(BASE.components);
const activeNames = ref(['base']);

const handleDblClick = (item: WidgetType) => {
	const id = designer.pushWidget(item);
	designer.setCurrentWidget(id);
};
</script>
