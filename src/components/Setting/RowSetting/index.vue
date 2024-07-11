<template>
	<div>
		<el-form label-width="auto">
			<el-form-item label="gutter：">
				<el-input-number v-model="form.gutter" :min="0" />
			</el-form-item>
			<el-form-item label="justify：">
				<el-select v-model="form.justify">
					<el-option
						v-for="item in justifyOptions"
						:key="item.value"
						:label="item.label"
						:value="item.value" />
				</el-select>
			</el-form-item>
		</el-form>
	</div>
</template>

<script setup lang="ts">
defineOptions({
	name: 'RowSetting',
});

import {ref, computed} from 'vue';
import {useUpdateProps} from '@/hooks/useUpdateProps';
import {RowWidgetType} from '@/types/row';
import {Justify} from '@/types/types';

const props = defineProps<{widget: RowWidgetType}>();
const widget = computed(() => props.widget);
const form = ref({...widget.value.props});

const justifyOptions = [
	{label: 'start', value: Justify.Start},
	{label: 'end', value: Justify.End},
	{label: 'center', value: Justify.Center},
	{label: 'space-around', value: Justify.SpaceAround},
	{label: 'space-between', value: Justify.SpaceBetween},
];

useUpdateProps(widget.value.id as string, widget.value, form);
</script>
