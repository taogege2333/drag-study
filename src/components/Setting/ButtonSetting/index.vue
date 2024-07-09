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
		</el-form>
	</div>
</template>

<script setup lang="ts">
defineOptions({
	name: 'ButtonSetting',
});

import {ButtonWidgetType} from '@/types/button';
import {ref, computed} from 'vue';
import {Type, Size} from '@/types/types';
import {useSettingForm} from '@/hooks/useSettingForm';

const {widget} = defineProps<{widget: ButtonWidgetType}>();
const props = computed(() => widget.props);
const form = ref({...props.value});
const typeOptions = ref([
	{label: 'primary', value: Type.Primary},
	{label: 'success', value: Type.Success},
	{label: 'info', value: Type.Info},
	{label: 'warning', value: Type.Warning},
	{label: 'danger', value: Type.Danger},
	{label: 'default', value: Type.Default},
]);

const sizeOptions = ref([
	{label: 'small', value: Size.Small},
	{label: 'default', value: Size.Default},
	{label: 'large', value: Size.Large},
]);

useSettingForm(form, widget.id as string);
</script>
