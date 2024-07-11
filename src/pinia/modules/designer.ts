import {defineStore} from 'pinia';
import {cloneDeep} from 'lodash-es';
import {WidgetType} from '@/types/designer';
import {generateId, getWidgetById, updateWidgetChildren, updateWidget} from '@/utils/utils';

export const useDesignerStore = defineStore('designer', {
	state: () => ({
		widgets: [] as WidgetType[],
		currentWidget: null as WidgetType | null,
	}),
	actions: {
		/**
		 * 设置组件或子组件
		 * @param widgets
		 */
		setWidgets(widgets: WidgetType[], parentId: string | undefined) {
			if (parentId) {
				const temp = updateWidgetChildren(this.widgets, parentId, widgets);
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
		updateWidget(id: string, widget: WidgetType) {
			const temp = updateWidget(this.widgets, id, widget);
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
