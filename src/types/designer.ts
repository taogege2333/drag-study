export interface WidgetType {
	id?: string;
	name: string;
	widgetComponent: string;
	settingComponent: string;
	type: string;
	[key: string]: any;
}
