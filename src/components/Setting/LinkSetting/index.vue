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
		</el-form>
	</div>
</template>

<script setup lang="ts">
defineOptions({
	name: 'LinkSetting',
});

import {ref, computed} from 'vue';
import {LinkWidgetType} from '@/types/link';
import {Type} from '@/types/types';
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
	{label: 'default', value: Type.Default},
]);

useUpdateProps(widget.value.id as string, widget.value, form);
</script>
