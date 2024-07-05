const modules = import.meta.glob(
	['../components/Setting/**/*.vue', '../components/Widget/**/*.vue'],
	{
		eager: true,
	},
);

export default {
	install(app: any) {
		for (const path in modules) {
			const name = modules[path].default.name;
			app.component(name, modules[path].default);
		}
	},
};
