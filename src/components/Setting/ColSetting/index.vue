<template>
	<div>
		<el-form label-width="auto">
			<el-form-item label="span：">
				<el-input-number v-model="form.span" :min="0" :max="24" />
			</el-form-item>
			<el-form-item label="offset：">
				<el-input-number v-model="form.offset" :min="0" :max="24" />
			</el-form-item>
			<el-form-item label="push：">
				<el-input-number v-model="form.push" :min="0" :max="24" />
			</el-form-item>
			<el-form-item label="pull：">
				<el-input-number v-model="form.pull" :min="0" :max="24" />
			</el-form-item>
		</el-form>
	</div>
</template>

<script setup lang="ts">
defineOptions({
	name: 'ColSetting',
});

import {ref, computed} from 'vue';
import {useSettingForm} from '@/hooks/useSettingForm';
import {ColWidgetType} from '@/types/col';

const {widget} = defineProps<{widget: ColWidgetType}>();
const props = computed(() => widget.props);
const form = ref({...props.value});

useSettingForm(form, widget.id as string);
</script>
