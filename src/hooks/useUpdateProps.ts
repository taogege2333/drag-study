import {useDesignerStore} from '@/pinia/modules/designer';
import {WidgetType} from '@/types/designer';
import {watch} from 'vue';

/**
 * 监听设置表单的变化，更新组件的属性
 * @param form
 * @param id
 */
export function useUpdateProps(id: string, widget: WidgetType, form: any) {
	const designer = useDesignerStore();
	watch(
		form,
		(newValue) => {
			designer.updateWidget(id, {...widget, props: newValue});
		},
		{deep: true},
	);
}
