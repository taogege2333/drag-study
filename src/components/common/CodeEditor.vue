<template>
	<div id="editorEl" style="height: 100%; height: 400px"></div>
</template>

<script setup lang="ts">
import {nextTick, onMounted, reactive} from 'vue';
import * as monaco from 'monaco-editor';

const props = defineProps<{code: string}>();
const options = reactive<monaco.editor.IStandaloneEditorConstructionOptions>({
	value: props.code, // 编辑器的值
	language: 'html', //语言
	theme: 'vs-dark', // 编辑器主题：vs, hc-black, or vs-dark
	autoIndent: 'advanced', // 自动缩进
	readOnly: true, // 是否只读
});

onMounted(() => {
	nextTick(() => {
		monaco.editor.create(document.getElementById('editorEl') as HTMLElement, options);
	});
});
</script>
