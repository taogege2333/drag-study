export const BASE = {
	type: 'base',
	components: [
		{
			name: 'button',
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
			name: 'link',
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
