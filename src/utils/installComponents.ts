import withWidgetWrapper from './withWidgetWrapper';

const modules: any = import.meta.glob(
	[
		'../components/Setting/**/*.vue',
		'../components/Widget/**/*.vue',
		'../components/Render/**/*.vue',
	],
	{
		eager: true,
	},
);

export default {
	install(app: any) {
		for (const path in modules) {
			const name = modules[path].default.name;
			app.component(
				name,
				name.includes('Widget') ? withWidgetWrapper(modules[path].default) : modules[path].default,
			);
		}
	},
};
