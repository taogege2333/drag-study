import {WidgetType} from './designer';
import {Type, LinkTarget} from './types';

export interface LinkPropsType {
	text: string;
	type: Type;
	underline: boolean;
	disabled: boolean;
	href: string;
	target: LinkTarget;
}

export interface LinkWidgetType extends WidgetType {
	props: LinkPropsType;
}
