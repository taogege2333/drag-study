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
			children: [
				{...cloneDeep(getWidgetByName(CHILD.components, 'Header')), id: `Header-${generateId()}`},
				{...cloneDeep(getWidgetByName(CHILD.components, 'Main')), id: `Main-${generateId()}`},
			],
		},
		{
			props: {
				direction: 'vertical',
			},
			children: [
				{...cloneDeep(getWidgetByName(CHILD.components, 'Header')), id: `Header-${generateId()}`},
				{...cloneDeep(getWidgetByName(CHILD.components, 'Main')), id: `Main-${generateId()}`},
				{...cloneDeep(getWidgetByName(CHILD.components, 'Footer')), id: `Footer-${generateId()}`},
			],
		},
		{
			props: {
				direction: 'horizontal',
			},
			children: [
				{...cloneDeep(getWidgetByName(CHILD.components, 'Aside')), id: `Aside-${generateId()}`},
				{...cloneDeep(getWidgetByName(CHILD.components, 'Main')), id: `Main-${generateId()}`},
			],
		},
		{
			props: {
				direction: 'horizontal',
			},
			children: [
				{...cloneDeep(getWidgetByName(CHILD.components, 'Aside')), id: `Aside-${generateId()}`},
				{
					...cloneDeep(getWidgetByName(LAYOUT.components, 'Container')),
					id: `Container-${generateId()}`,
					props: {
						direction: 'vertical',
					},
					children: [
						{
							...cloneDeep(getWidgetByName(CHILD.components, 'Header')),
							id: `Header-${generateId()}`,
						},
						{...cloneDeep(getWidgetByName(CHILD.components, 'Main')), id: `Main-${generateId()}`},
					],
				},
			],
		},
		{
			props: {
				direction: 'vertical',
			},
			children: [
				{...cloneDeep(getWidgetByName(CHILD.components, 'Header')), id: `Header-${generateId()}`},
				{
					...cloneDeep(getWidgetByName(LAYOUT.components, 'Container')),
					id: `Container-${generateId()}`,
					props: {
						direction: 'horizontal',
					},
					children: [
						{...cloneDeep(getWidgetByName(CHILD.components, 'Aside')), id: `Aside-${generateId()}`},
						{...cloneDeep(getWidgetByName(CHILD.components, 'Main')), id: `Main-${generateId()}`},
					],
				},
			],
		},
		{
			props: {
				direction: 'vertical',
			},
			children: [
				{...cloneDeep(getWidgetByName(CHILD.components, 'Header')), id: `Header-${generateId()}`},
				{
					...cloneDeep(getWidgetByName(LAYOUT.components, 'Container')),
					id: `Container-${generateId()}`,
					props: {
						direction: 'horizontal',
					},
					children: [
						{...cloneDeep(getWidgetByName(CHILD.components, 'Aside')), id: `Aside-${generateId()}`},
						{...cloneDeep(getWidgetByName(CHILD.components, 'Main')), id: `Main-${generateId()}`},
					],
				},
				{...cloneDeep(getWidgetByName(CHILD.components, 'Footer')), id: `Footer-${generateId()}`},
			],
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
 * 使用递归根据id更新组件
 * @param widgets
 * @param id
 * @param props
 * @returns
 */
export const updateWidget = (
	widgets: WidgetType[],
	id: string,
	widget: WidgetType,
): WidgetType[] | undefined => {
	if (widgets.length === 0) return;
	const widgetsCopy = cloneDeep(widgets);
	for (let i = 0; i < widgetsCopy.length; i++) {
		const item = widgetsCopy[i];
		if (item.id === id) {
			widgetsCopy[i] = widget;
			return widgetsCopy;
		}
		if (item.children) {
			const temp = updateWidget(item.children, id, widget);
			if (temp) {
				item.children = temp;
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
