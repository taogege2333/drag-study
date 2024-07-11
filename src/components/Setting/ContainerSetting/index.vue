<template>
	<div>
		<ul>
			<li @click="handleClick(0)" :class="{select: defaultLayout === 0}">
				<CustomContainer direction="vertical">
					<CustomHeader></CustomHeader>
					<CustomMain></CustomMain>
				</CustomContainer>
			</li>
			<li @click="handleClick(1)" :class="{select: defaultLayout === 1}">
				<CustomContainer direction="vertical">
					<CustomHeader></CustomHeader>
					<CustomMain></CustomMain>
					<CustomFooter></CustomFooter>
				</CustomContainer>
			</li>
			<li @click="handleClick(2)" :class="{select: defaultLayout === 2}">
				<CustomContainer>
					<CustomAside></CustomAside>
					<CustomMain></CustomMain>
				</CustomContainer>
			</li>
			<li @click="handleClick(3)" :class="{select: defaultLayout === 3}">
				<CustomContainer>
					<CustomAside></CustomAside>
					<CustomContainer direction="vertical">
						<CustomHeader></CustomHeader>
						<CustomMain></CustomMain>
					</CustomContainer>
				</CustomContainer>
			</li>
			<li @click="handleClick(4)" :class="{select: defaultLayout === 4}">
				<CustomContainer direction="vertical">
					<CustomHeader></CustomHeader>
					<CustomContainer>
						<CustomAside></CustomAside>
						<CustomMain></CustomMain>
					</CustomContainer>
				</CustomContainer>
			</li>
			<li @click="handleClick(5)" :class="{select: defaultLayout === 5}">
				<CustomContainer direction="vertical">
					<CustomHeader></CustomHeader>
					<CustomContainer>
						<CustomAside></CustomAside>
						<CustomMain></CustomMain>
					</CustomContainer>
					<CustomFooter></CustomFooter>
				</CustomContainer>
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
defineOptions({
	name: 'ContainerSetting',
});

import CustomContainer from '@/components/common/layout/CustomContainer.vue';
import CustomHeader from '@/components/common/layout/CustomHeader.vue';
import CustomAside from '@/components/common/layout/CustomAside.vue';
import CustomMain from '@/components/common/layout/CustomMain.vue';
import CustomFooter from '@/components/common/layout/CustomFooter.vue';
import {ref, computed} from 'vue';
import {ContainerWidgetType} from '@/types/designer';
import {useDesignerStore} from '@/pinia/modules/designer';

const props = defineProps<{widget: ContainerWidgetType}>();
const widget = computed(() => props.widget);
const defaultLayout = ref(widget.value.defaultLayout);
const designer = useDesignerStore();

const handleClick = (index: number) => {
	defaultLayout.value = index;
	designer.updateWidget(widget.value.id as string, {
		...widget.value,
		defaultLayout: index,
		...widget.value.layouts[index],
	});
};
</script>

<style lang="scss" scoped>
ul {
	display: flex;
	flex-flow: row wrap;
	justify-content: space-around;

	li {
		margin-bottom: 20px;

		// &:nth-of-type(2n + 1) {
		// 	margin-right: 20px;
		// }

		&.select {
			filter: hue-rotate(160deg);
		}
	}
}
</style>
