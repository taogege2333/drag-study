import {WidgetType} from '@/types/designer';
import {cloneDeep} from 'lodash-es';
import {CHILD} from '@/data/index';

// 根据组件名获取子组件
const getChildWidget = (widgetName: string): WidgetType => {
	return CHILD.find((item) => item.name === widgetName) as WidgetType;
};

// 生成id;
export const generateId = () => {
	return 'xxxxxxxx'.replace(/[xy]/g, function (c) {
		const r = (Math.random() * 16) | 0;
		const v = c == 'x' ? r : (r & 0x3) | 0x8;
		return v.toString(16);
	});
};

export const clone = (widget: WidgetType) => {
	const widgetCopy = cloneDeep({...widget, id: `${widget.name}-${generateId()}`});
	// 如果是row组件，添加3个col
	if (widgetCopy.name === 'Row') {
		widgetCopy.children = new Array(3).fill(0).map(() => ({
			...cloneDeep(getChildWidget('Col')),
			id: `Col-${generateId()}`,
		}));
	}
	return widgetCopy;
};

/**
 * 使用递归根据id获取当前选中的组件
 * @param widgets
 * @param id
 * @returns
 */
export const getWidgetById = (widgets: WidgetType[], id: string): WidgetType | null => {
	if (widgets.length === 0) return null;
	const widgetsCopy = cloneDeep(widgets);
	for (let i = 0; i < widgetsCopy.length; i++) {
		const widget = widgetsCopy[i];
		if (widget.id === id) {
			return widget;
		}
		if (widget.children) {
			const res = getWidgetById(widget.children, id);
			if (res) return res;
		}
	}
	return null;
};

/**
 * 使用递归根据id更新组件的props
 * @param widgets
 * @param id
 * @param props
 * @returns
 */
export const updateWidgetProps = (
	widgets: WidgetType[],
	id: string,
	props: any,
): WidgetType[] | undefined => {
	if (widgets.length === 0) return;
	const widgetsCopy = cloneDeep(widgets);
	for (let i = 0; i < widgetsCopy.length; i++) {
		const widget = widgetsCopy[i];
		if (widget.id === id) {
			widget.props = props;
			return widgetsCopy;
		}
		if (widget.children) {
			const temp = updateWidgetProps(widget.children, id, props);
			if (temp) {
				widget.children = temp;
				return widgetsCopy;
			}
		}
	}
};

// 使用递归根据id更新组件的children
export const updateWidgetChildren = (
	widgets: WidgetType[],
	id: string,
	children: WidgetType[],
): WidgetType[] | undefined => {
	if (widgets.length === 0) return;
	const widgetsCopy = cloneDeep(widgets);
	for (let i = 0; i < widgetsCopy.length; i++) {
		const widget = widgetsCopy[i];
		if (widget.id === id) {
			widget.children = children;
			return widgetsCopy;
		}
		if (widget.children) {
			const temp = updateWidgetChildren(widget.children, id, children);
			if (temp) {
				widget.children = temp;
				return widgetsCopy;
			}
		}
	}
};
