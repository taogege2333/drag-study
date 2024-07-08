export const BASE = {
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
