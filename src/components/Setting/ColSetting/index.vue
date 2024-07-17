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
import {useUpdateProps} from '@/hooks/useUpdateProps';
import {ColWidgetType} from '@/types/col';

const props = defineProps<{widget: ColWidgetType}>();
const widget = computed(() => props.widget);
const form = ref({...widget.value.props});

useUpdateProps(widget.value.id as string, widget.value, form);
</script>
