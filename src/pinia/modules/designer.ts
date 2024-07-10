import {defineStore} from 'pinia';
import {cloneDeep} from 'lodash-es';
import {WidgetType} from '@/types/designer';
import {generateId, getWidgetById, updateWidgetChildren, updateWidgetProps} from '@/utils/utils';

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
		setWidgets(widgets: WidgetType[], id: string | undefined) {
			if (id) {
				const temp = updateWidgetChildren(this.widgets, id, widgets);
				if (temp) {
					this.widgets = temp;
				}
			} else {
				this.widgets = cloneDeep(widgets);
			}
		},
		/**
		 * 更新组件的属性
		 * @param id
		 * @param props
		 */
		updateWidgetProps(id: string, props: any) {
			const temp = updateWidgetProps(this.widgets, id, props);
			if (temp) {
				this.widgets = temp;
			}
		},
		/**
		 * 在尾部添加组件
		 * @param widget
		 * @returns
		 */
		pushWidget(widget: WidgetType) {
			const id = `${widget.name}-${generateId()}`;
			this.widgets = [...this.widgets, cloneDeep({...widget, id})];
			return id;
		},
		/**
		 * 设置当前选中的组件
		 * @param id
		 */
		setCurrentWidget(id: string = '') {
			this.currentWidget = getWidgetById(this.widgets, id);
		},
	},
});
