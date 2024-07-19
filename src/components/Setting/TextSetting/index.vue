<template>
	<div>
		<el-form label-width="auto">
			<el-form-item label="text：">
				<el-input v-model="form.text" />
			</el-form-item>
			<el-form-item label="type：">
				<el-select v-model="form.type">
					<el-option
						v-for="item in typeOptions"
						:key="item.value"
						:label="item.label"
						:value="item.value" />
				</el-select>
			</el-form-item>
			<el-form-item label="size：">
				<el-select v-model="form.size">
					<el-option
						v-for="item in sizeOptions"
						:key="item.value"
						:label="item.label"
						:value="item.value" />
				</el-select>
			</el-form-item>
			<el-form-item label="truncated：">
				<el-switch v-model="form.truncated" />
			</el-form-item>
			<el-form-item label="lineClamp：">
				<el-input-number v-model="form.lineClamp" :min="0" />
			</el-form-item>
		</el-form>
	</div>
</template>

<script setup lang="ts">
defineOptions({
	name: 'TextSetting',
});

import {TextWidgetType} from '@/types/text';
import {ref, computed} from 'vue';
import {Type, Size} from '@/types/types';
import {useUpdateProps} from '@/hooks/useUpdateProps';

const props = defineProps<{widget: TextWidgetType}>();
const widget = computed(() => props.widget);
const form = ref({...widget.value.props});
const typeOptions = ref([
	{label: 'primary', value: Type.Primary},
	{label: 'success', value: Type.Success},
	{label: 'info', value: Type.Info},
	{label: 'warning', value: Type.Warning},
	{label: 'danger', value: Type.Danger},
]);

const sizeOptions = ref([
	{label: 'small', value: Size.Small},
	{label: 'default', value: Size.Default},
	{label: 'large', value: Size.Large},
]);

useUpdateProps(widget.value.id as string, widget.value, form);
</script>
