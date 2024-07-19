import {WidgetType} from '@/types/designer';
import * as prettier from 'prettier';
import * as parsers from 'prettier/plugins/html';

export const generateSFC = (widgets: WidgetType[] | undefined) => {
	return widgets && widgets.length > 0 ? widgets.map((item) => generateCode(item)).join('') : '';
};

export const generateCode = (widget: WidgetType) => {
	return generateFuncs[widget.name](widget);
};

export const prettierCode = (code: string) => {
	return prettier.format(code, {
		parser: 'html',
		plugins: [parsers],
	});
};

const generateFuncs: Record<string, (widget: WidgetType) => string> = {
	Container: (widget: WidgetType): string => {
		return `
			<el-container>
				${generateSFC(widget.children)}
			</el-container>
		`;
	},
	Header: (widget: WidgetType): string => {
		return `
			<el-header height="${widget.props.height}">
				${generateSFC(widget.children)}
			</el-header>
		`;
	},
	Aside: (widget: WidgetType): string => {
		return `
			<el-aside width="${widget.props.width}">
				${generateSFC(widget.children)}
			</el-aside>
		`;
	},
	Main: (widget: WidgetType): string => {
		return `
			<el-main>
				${generateSFC(widget.children)}
			</el-main>
		`;
	},
	Footer: (widget: WidgetType): string => {
		return `
			<el-footer height="${widget.props.height}">
				${generateSFC(widget.children)}
			</el-footer>
		`;
	},
	Row: (widget: WidgetType): string => {
		return `
			<el-row :gutter="${widget.props.gutter}" justify="${widget.props.justify}">
				${generateSFC(widget.children)}
			</el-row>
		`;
	},
	Col: (widget: WidgetType): string => {
		return `
			<el-col :span="${widget.props.span}" :offset="${widget.props.offset}" :push="${widget.props.push}" :pull="${widget.props.pull}">
				${generateSFC(widget.children)}
			</el-col>
		`;
	},
	Button: (widget: WidgetType): string => {
		return `
			<el-button type="${widget.props.type}" size="${widget.props.size}">${widget.props.text}</el-button>
		`;
	},
	Link: (widget: WidgetType): string => {
		return `
			<el-link type="${widget.props.type}" :underline="${widget.props.underline}" :disabled="${widget.props.disabled}" href="${widget.props.href}" target="${widget.props.target}">${widget.props.text}</el-link>
		`;
	},
	Text: (widget: WidgetType): string => {
		return `
			<el-text type="${widget.props.type}" size="${widget.props.size}" :truncated="${widget.props.truncated}" :line-clamp="${widget.props.lineClamp}">${widget.props.text}</el-text>
		`;
	},
};
