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
			<el-form-item label="target：">
				<el-select v-model="form.target">
					<el-option
						v-for="item in targetOptions"
						:key="item.value"
						:label="item.label"
						:value="item.value" />
				</el-select>
			</el-form-item>
			<el-form-item label="href：">
				<el-input v-model="form.href" />
			</el-form-item>
			<el-form-item label="disabled：">
				<el-switch v-model="form.disabled" />
			</el-form-item>
			<el-form-item label="underline：">
				<el-switch v-model="form.underline" />
			</el-form-item>
		</el-form>
	</div>
</template>

<script setup lang="ts">
defineOptions({
	name: 'LinkSetting',
});

import {ref, computed} from 'vue';
import {LinkWidgetType} from '@/types/link';
import {Type, LinkTarget} from '@/types/types';
import {useUpdateProps} from '@/hooks/useUpdateProps';

const props = defineProps<{widget: LinkWidgetType}>();
const widget = computed(() => props.widget);
const form = ref({...widget.value.props});

const typeOptions = ref([
	{label: 'primary', value: Type.Primary},
	{label: 'success', value: Type.Success},
	{label: 'info', value: Type.Info},
	{label: 'warning', value: Type.Warning},
	{label: 'danger', value: Type.Danger},
]);

const targetOptions = ref([
	{label: '_blank', value: LinkTarget.Blank},
	{label: '_self', value: LinkTarget.Self},
	{label: '_parent', value: LinkTarget.Parent},
	{label: '_top', value: LinkTarget.Top},
]);

useUpdateProps(widget.value.id as string, widget.value, form);
</script>
