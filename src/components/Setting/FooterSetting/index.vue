<template>
	<div>
		<el-form label-width="auto">
			<el-form-item label="height：">
				<el-row>
					<el-col :span="23">
						<el-input-number v-model="form.height" />
					</el-col>
					<el-col :span="1">px</el-col>
				</el-row>
			</el-form-item>
		</el-form>
	</div>
</template>

<script setup lang="ts">
defineOptions({
	name: 'FooterSetting',
});

import {ref, computed} from 'vue';
import {useUpdateProps} from '@/hooks/useUpdateProps';
import {WidgetType} from '@/types/designer';

const props = defineProps<{widget: WidgetType}>();
const widget = computed(() => props.widget);
const form = ref({height: Number(widget.value.props.height.replace('px', ''))});
const formComputed = computed(() => ({height: form.value.height + 'px'}));

useUpdateProps(widget.value.id as string, widget.value, formComputed);
</script>
