import {WidgetType} from './designer';
import {Size, Type} from './types';

export interface ButtonPropsType {
	text: string;
	size: Size;
	type: Type;
}

export interface ButtonWidgetType extends WidgetType {
	props: ButtonPropsType;
}
