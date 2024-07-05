<template>
	<el-collapse v-model="activeNames" :accordion="false">
		<el-collapse-item title="基础" name="base">
			<ul class="flex flex-row flex-wrap justify-between">
				<li
					class="w-32 text-center py-1 border border-solid border-gray-300 rounded cursor-move select-none"
					v-for="item in BASE.components"
					:key="item.name"
					@dblclick="handleDblClick(item)">
					{{ item.name }}
				</li>
			</ul>
		</el-collapse-item>
	</el-collapse>
</template>

<script lang="ts" setup>
import {ref} from 'vue';
import {BASE} from '@/data';
import {useDesignerStore} from '@/pinia/modules/designer';
import {WidgetType} from '@/types/designer';

const designer = useDesignerStore();
const activeNames = ref(['base']);

const handleDblClick = (item: WidgetType) => {
	const id = designer.addWidget(item);
	designer.setCurrentWidget(id);
	console.log(designer.widgets);
};
</script>
