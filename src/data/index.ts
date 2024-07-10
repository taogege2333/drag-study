import {WidgetType} from '@/types/designer';

// 子组件,依赖于父组件,不显示在widget面板中
export const CHILD: WidgetType[] = [
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
];

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
		{
			name: 'Row',
			widgetComponent: 'RowWidget',
			settingComponent: 'RowSetting',
			type: 'base',
			props: {
				gutter: 0,
				justify: 'start',
			},
			children: [],
		},
	],
};
