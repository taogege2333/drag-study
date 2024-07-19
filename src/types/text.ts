import {WidgetType} from './designer';
import {Size, Type} from './types';

export interface TextPropsType {
	text: string;
	type: Type;
	size: Size;
	truncated: boolean;
	lineClamp: number;
}

export interface TextWidgetType extends WidgetType {
	props: TextPropsType;
}
