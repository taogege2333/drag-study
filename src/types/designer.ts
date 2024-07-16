export interface WidgetType {
	id?: string;
	name: string;
	widgetComponent: string;
	settingComponent: string;
	type: string;
	props: any;
	children?: WidgetType[];
	defaultLayout?: number;
	layouts?: any[];
	disbaleRemove?: boolean;
}

export interface LayoutWidgetType extends WidgetType {
	children: WidgetType[];
}

export interface ContainerWidgetType extends LayoutWidgetType {
	defaultLayout: number;
	layouts: any[];
}
