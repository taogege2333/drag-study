import {defineStore} from 'pinia';
import {WidgetType} from '@/types/designer';
import {
	generateId,
	getWidgetById,
	updateWidgetChildren,
	updateWidget,
	removeWidget,
} from '@/utils/utils';

export const useDesignerStore = defineStore('designer', {
	state: () => ({
		widgets: [] as WidgetType[],
		currentWidget: null as WidgetType | null,
	}),
	actions: {
		/**
		 * 设置当前选中的组件
		 * @param id
		 */
		setCurrentWidget(id: string = '') {
			this.currentWidget = getWidgetById(this.widgets, id);
		},
		/**
		 * 设置组件或子组件
		 * @param widgets
		 */
		setWidgets(widgets: WidgetType[], parentId: string | undefined) {
			if (parentId) {
				updateWidgetChildren(this.widgets, parentId, widgets);
			} else {
				this.widgets = widgets;
			}
		},
		/**
		 * 更新组件的属性
		 * @param id
		 * @param props
		 */
		updateWidget(id: string, widget: WidgetType) {
			updateWidget(this.widgets, id, widget);
		},
		/**
		 * 在尾部添加组件
		 * @param widget
		 * @returns
		 */
		pushWidget(widget: WidgetType) {
			const id = `${widget.name}-${generateId()}`;
			this.widgets.push({...widget, id});
			return id;
		},
		removeWidget() {
			if (this.currentWidget) {
				removeWidget(this.widgets, this.currentWidget.id as string);
				this.currentWidget = null;
			}
		},
	},
});
