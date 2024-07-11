import {ContainerWidgetType, LayoutWidgetType, WidgetType} from '@/types/designer';

// 子组件,依赖于父组件,不显示在widget面板中
export const CHILD: {type: string; components: WidgetType[]} = {
	type: 'child',
	components: [
		{
			name: 'Col',
			widgetComponent: 'ColWidget',
			settingComponent: 'ColSetting',
			type: 'base',
			props: {
				span: 8,
				offset: 0,
				push: 0,
				pull: 0,
			},
			children: [],
		},
		{
			name: 'Header',
			widgetComponent: 'HeaderWidget',
			settingComponent: 'HeaderSetting',
			type: 'layout',
			props: {
				height: '60px',
			},
			children: [],
		},
		{
			name: 'Aside',
			widgetComponent: 'AsideWidget',
			settingComponent: 'AsideSetting',
			type: 'layout',
			props: {
				width: '200px',
			},
			children: [],
		},
		{
			name: 'Main',
			widgetComponent: 'MainWidget',
			settingComponent: 'MainSetting',
			type: 'layout',
			props: {},
			children: [],
		},
		{
			name: 'Footer',
			widgetComponent: 'FooterWidget',
			settingComponent: 'FooterSetting',
			type: 'layout',
			props: {
				height: '60px',
			},
			children: [],
		},
	],
};

export const LAYOUT: {type: string; components: LayoutWidgetType[]} = {
	type: 'layout',
	components: [
		{
			name: 'Container',
			widgetComponent: 'ContainerWidget',
			settingComponent: 'ContainerSetting',
			type: 'layout',
			props: {},
			children: [],
			defaultLayout: 0,
			layouts: [],
		} as ContainerWidgetType,
		{
			name: 'Row',
			widgetComponent: 'RowWidget',
			settingComponent: 'RowSetting',
			type: 'layout',
			props: {
				gutter: 0,
				justify: 'start',
			},
			children: [],
		},
	],
};

export const BASE: {type: string; components: WidgetType[]} = {
	type: 'base',
	components: [
		{
			name: 'Button',
			widgetComponent: 'ButtonWidget',
			settingComponent: 'ButtonSetting',
			type: 'base',
			props: {
				text: 'Button',
				size: 'default',
				type: 'primary',
			},
		},
		{
			name: 'Link',
			widgetComponent: 'LinkWidget',
			settingComponent: 'LinkSetting',
			type: 'base',
			props: {
				text: 'Link',
				type: 'primary',
			},
		},
	],
};
