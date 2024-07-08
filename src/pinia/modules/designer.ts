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
		setWidgets(widgets: WidgetType[]) {
			this.widgets = cloneDeep(widgets);
		},
		pushWidget(widget: WidgetType) {
			const id = `${widget.name}-${generateId()}`;
			this.widgets.push(cloneDeep({...widget, id}));
			return id;
		},
		removeWidget(widget: WidgetType) {
			this.widgets.splice(
				this.widgets.findIndex((item) => item.id === widget.id),
				1,
			);
		},
		setCurrentWidget(id: string = '') {
			this.currentWidget = cloneDeep(this.widgets.find((item) => item.id === id)) ?? null;
		},
	},
});
