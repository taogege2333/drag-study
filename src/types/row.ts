import {WidgetType} from './designer';
import {Justify} from './types';

export interface RowPropsType {
	gutter: number;
	justify: Justify;
}

export interface RowWidgetType extends WidgetType {
	props: RowPropsType;
}
