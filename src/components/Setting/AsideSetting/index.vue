<template>
	<div>
		<el-form label-width="auto">
			<el-form-item label="width：">
				<el-row>
					<el-col :span="23">
						<el-input-number v-model="form.width" />
					</el-col>
					<el-col :span="1">px</el-col>
				</el-row>
			</el-form-item>
		</el-form>
	</div>
</template>

<script setup lang="ts">
defineOptions({
	name: 'AsideSetting',
});

import {ref, computed} from 'vue';
import {useUpdateProps} from '@/hooks/useUpdateProps';
import {WidgetType} from '@/types/designer';

const props = defineProps<{widget: WidgetType}>();
const widget = computed(() => props.widget);
const form = ref({width: Number(widget.value.props.width.replace('px', ''))});
const formComputed = computed(() => ({width: form.value.width + 'px'}));

useUpdateProps(widget.value.id as string, widget.value, formComputed);
</script>
