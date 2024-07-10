export interface WidgetType {
	id?: string;
	name: string;
	widgetComponent: string;
	settingComponent: string;
	type: string;
	children?: WidgetType[];
	props: any;
	[key: string]: any;
}
