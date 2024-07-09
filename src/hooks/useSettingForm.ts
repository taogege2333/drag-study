import {useDesignerStore} from '@/pinia/modules/designer';
import {watch} from 'vue';

/**
 * 监听设置表单的变化，更新组件的属性
 * @param form
 * @param id
 */
export function useSettingForm(form: any, id: string) {
	const designer = useDesignerStore();
	watch(
		form,
		(newValue) => {
			designer.updateWidgetProps(id, newValue);
		},
		{deep: true},
	);
}
