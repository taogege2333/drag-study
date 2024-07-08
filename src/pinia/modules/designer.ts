import {defineStore} from 'pinia';
import {cloneDeep} from 'lodash-es';
import {WidgetType} from '@/types/designer';
import {generateId} from '@/utils/utils';

export const useDesignerStore = defineStore('designer', {
	state: () => ({
		widgets: [] as WidgetType[],
		currentWidget: null as WidgetType | null,
	}),
	actions: {
		/**
		 * 设置画布中的组件
		 * @param widgets
		 */
		setWidgets(widgets: WidgetType[]) {
			this.widgets = cloneDeep(widgets);
		},
		/**
		 * 更新组件的属性
		 * @param id
		 * @param props
		 */
		updateWidgetProps(id: string, props: any) {
			const index = this.widgets.findIndex((item) => item.id === id);
			index !== -1 && (this.widgets[index].props = cloneDeep(props));
		},
		/**
		 * 在尾部添加组件
		 * @param widget
		 * @returns
		 */
		pushWidget(widget: WidgetType) {
			const id = `${widget.name}-${generateId()}`;
			this.widgets.push(cloneDeep({...widget, id}));
			return id;
		},
		/**
		 * 设置当前选中的组件
		 * @param id
		 */
		setCurrentWidget(id: string = '') {
			this.currentWidget = cloneDeep(this.widgets.find((item) => item.id === id)) ?? null;
		},
	},
});
