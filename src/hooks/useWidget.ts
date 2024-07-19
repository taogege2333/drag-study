import {useDesignerStore} from '@/pinia/modules/designer';
import {WidgetType} from '@/types/designer';
import {storeToRefs} from 'pinia';
import {computed} from 'vue';

export function useWidget<T extends WidgetType>(props: {widget: T}) {
	const widget = computed(() => props.widget);
	const designer = useDesignerStore();
	const {currentWidget} = storeToRefs(designer);

	const handleClick = (e: Event) => {
		e.stopPropagation();
		e.preventDefault();
		designer.setCurrentWidget(widget.value.id);
	};

	return {
		widget,
		currentWidget,
		handleClick,
	};
}
