import {defineComponent, h} from 'vue';
import {useWidget} from '@/hooks/useWidget';
import {WidgetType} from '@/types/designer';

export default function withWidgetWrapper(wrappedComponent: any) {
	return defineComponent({
		name: 'withWidgetWrapper',
		props: {
			widget: {
				required: true,
				type: Object as () => WidgetType,
			},
		},
		setup(props, {slots, attrs}) {
			const {widget, currentWidget, handleClick} = useWidget(props);
			return () =>
				h(
					wrappedComponent,
					{
						...attrs,
						...props,
						class: {
							selected: currentWidget.value?.id === widget.value.id,
						},
						onClick: handleClick,
					},
					slots,
				);
		},
	});
}
