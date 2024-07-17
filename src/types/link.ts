import {WidgetType} from './designer';
import {Type} from './types';

export interface LinkPropsType {
	text: string;
	type: Type;
}

export interface LinkWidgetType extends WidgetType {
	props: LinkPropsType;
}
