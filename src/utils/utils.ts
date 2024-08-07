import {ContainerWidgetType, WidgetType} from '@/types/designer';
import {cloneDeep} from 'lodash-es';
import {CHILD, LAYOUT} from '@/data/index';

// 根据组件名获取组件
const getWidgetByName = (list: WidgetType[], widgetName: string): WidgetType => {
	return list.find((item) => item.name === widgetName) as WidgetType;
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
			...cloneDeep(getWidgetByName(CHILD.components, 'Col')),
			id: `Col-${generateId()}`,
		}));
	}
	if (widgetCopy.name === 'Container') {
		widgetCopy.layouts = generateLayoutData();
		const layout = widgetCopy.layouts[(widgetCopy as ContainerWidgetType).defaultLayout];
		widgetCopy.props = layout.props;
		widgetCopy.children = layout.children;
	}
	return widgetCopy;
};

// 生成布局数据
export const generateLayoutData = () => {
	return [
		{
			props: {
				direction: 'vertical',
			},
			children: cloneDeep([
				{...getWidgetByName(CHILD.components, 'Header'), id: `Header-${generateId()}`},
				{...getWidgetByName(CHILD.components, 'Main'), id: `Main-${generateId()}`},
			]),
		},
		{
			props: {
				direction: 'vertical',
			},
			children: cloneDeep([
				{...getWidgetByName(CHILD.components, 'Header'), id: `Header-${generateId()}`},
				{...getWidgetByName(CHILD.components, 'Main'), id: `Main-${generateId()}`},
				{...getWidgetByName(CHILD.components, 'Footer'), id: `Footer-${generateId()}`},
			]),
		},
		{
			props: {
				direction: 'horizontal',
			},
			children: cloneDeep([
				{...getWidgetByName(CHILD.components, 'Aside'), id: `Aside-${generateId()}`},
				{...getWidgetByName(CHILD.components, 'Main'), id: `Main-${generateId()}`},
			]),
		},
		{
			props: {
				direction: 'horizontal',
			},
			children: cloneDeep([
				{...getWidgetByName(CHILD.components, 'Aside'), id: `Aside-${generateId()}`},
				{
					...getWidgetByName(LAYOUT.components, 'Container'),
					id: `Container-${generateId()}`,
					props: {
						direction: 'vertical',
					},
					children: [
						{
							...getWidgetByName(CHILD.components, 'Header'),
							id: `Header-${generateId()}`,
						},
						{...getWidgetByName(CHILD.components, 'Main'), id: `Main-${generateId()}`},
					],
					disbaleRemove: true,
					disableSetting: true,
				},
			]),
		},
		{
			props: {
				direction: 'vertical',
			},
			children: cloneDeep([
				{...getWidgetByName(CHILD.components, 'Header'), id: `Header-${generateId()}`},
				{
					...getWidgetByName(LAYOUT.components, 'Container'),
					id: `Container-${generateId()}`,
					props: {
						direction: 'horizontal',
					},
					children: [
						{...getWidgetByName(CHILD.components, 'Aside'), id: `Aside-${generateId()}`},
						{...getWidgetByName(CHILD.components, 'Main'), id: `Main-${generateId()}`},
					],
					disbaleRemove: true,
					disableSetting: true,
				},
			]),
		},
		{
			props: {
				direction: 'vertical',
			},
			children: cloneDeep([
				{...getWidgetByName(CHILD.components, 'Header'), id: `Header-${generateId()}`},
				{
					...getWidgetByName(LAYOUT.components, 'Container'),
					id: `Container-${generateId()}`,
					props: {
						direction: 'horizontal',
					},
					children: [
						{...getWidgetByName(CHILD.components, 'Aside'), id: `Aside-${generateId()}`},
						{...getWidgetByName(CHILD.components, 'Main'), id: `Main-${generateId()}`},
					],
					disbaleRemove: true,
					disableSetting: true,
				},
				{...getWidgetByName(CHILD.components, 'Footer'), id: `Footer-${generateId()}`},
			]),
		},
	];
};

/**
 * 使用递归根据id获取当前选中的组件
 * @param widgets
 * @param id
 * @returns
 */
export const getWidgetById = (widgets: WidgetType[], id: string): WidgetType | null => {
	if (widgets.length === 0) return null;
	for (let i = 0; i < widgets.length; i++) {
		const widget = widgets[i];
		if (widget.id === id) {
			return cloneDeep(widget);
		}
		if (widget.children) {
			const res = getWidgetById(widget.children, id);
			if (res) return res;
		}
	}
	return null;
};

/**
 * 使用递归根据id更新组件
 * @param widgets
 * @param id
 * @param props
 * @returns
 */
export const updateWidget = (widgets: WidgetType[], id: string, widget: WidgetType): boolean => {
	if (widgets.length === 0) return false;
	for (let i = 0; i < widgets.length; i++) {
		const item = widgets[i];
		if (item.id === id) {
			widgets[i] = cloneDeep(widget);
			return true;
		}
		if (item.children) {
			const res = updateWidget(item.children, id, widget);
			if (res) return true;
		}
	}
	return false;
};

// 使用递归根据id更新组件的children
export const updateWidgetChildren = (
	widgets: WidgetType[],
	id: string,
	children: WidgetType[],
): boolean => {
	if (widgets.length === 0) return false;
	for (let i = 0; i < widgets.length; i++) {
		const widget = widgets[i];
		if (widget.id === id) {
			widget.children = cloneDeep(children);
			return true;
		}
		if (widget.children) {
			const res = updateWidgetChildren(widget.children, id, children);
			if (res) return true;
		}
	}
	return false;
};

/**
 * 删除组件
 * @param widgets
 * @param id
 * @returns
 */
export const removeWidget = (widgets: WidgetType[], id: string): boolean => {
	if (widgets.length === 0) return false;
	for (let i = 0; i < widgets.length; i++) {
		const widget = widgets[i];
		if (widget.id === id) {
			widgets.splice(i, 1);
			return true;
		}
		if (widget.children) {
			const res = removeWidget(widget.children, id);
			if (res) return true;
		}
	}
	return false;
};

/**
 * 复制组件
 * @param widgets
 * @param id
 * @returns
 */
export const copyWidget = (widgets: WidgetType[], id: string): boolean => {
	if (widgets.length === 0) return false;
	for (let i = 0; i < widgets.length; i++) {
		const widget = widgets[i];
		if (widget.id === id) {
			const newWidget = cloneDeepWidget(widget);
			widgets.splice(i + 1, 0, newWidget);
			return true;
		}
		if (widget.children) {
			const res = copyWidget(widget.children, id);
			if (res) return true;
		}
	}
	return false;
};

const cloneDeepWidget = (widget: WidgetType, isFirst = true) => {
	const newWidget = isFirst ? cloneDeep(widget) : widget;
	newWidget.id = `${newWidget.name}-${generateId()}`;
	if (newWidget.children && newWidget.children.length > 0) {
		for (let i = 0; i < newWidget.children.length; i++) {
			newWidget.children[i] = cloneDeepWidget(newWidget.children[i], false);
		}
	}
	return newWidget;
};

export const checkMove = (target: string, to: string | undefined) => {
	console.log(target, to);
	return true;
};
