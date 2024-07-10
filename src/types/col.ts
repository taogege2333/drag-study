import {WidgetType} from './designer';

export interface ColPropsType {
	span: number;
	offset: number;
	push: number;
	pull: number;
}

export interface ColWidgetType extends WidgetType {
	props: ColPropsType;
}
