import { ReactNode } from 'react'
import {
	Control,
	Controller,
	ControllerRenderProps,
	FieldValues,
	Path,
	PathValue,
	UseControllerProps,
} from 'react-hook-form'

import { CustomText } from '../CustomText'

interface IFormElementRentProps<TFieldValues extends FieldValues>
	extends ControllerRenderProps<TFieldValues, Path<TFieldValues>> {
	required?: boolean
	defaultValue?: PathValue<TFieldValues, Path<TFieldValues>> | undefined
}

interface IFormElement<TFieldValues extends FieldValues> extends UseControllerProps<TFieldValues> {
	control: Control<TFieldValues>
	label?: ReactNode
	renderElement: (props: IFormElementRentProps<TFieldValues>) => ReactNode
}

export const FormElement = <TFieldValues extends FieldValues>({
	control,
	name,
	rules,
	label,
	defaultValue,
	renderElement,
}: IFormElement<TFieldValues>) => (
	<Controller
		control={control}
		name={name}
		rules={rules}
		render={({ field, fieldState: { error } }) => (
			<>
				{label && <CustomText variant="paragraphMedium">{label}</CustomText>}

				{renderElement({
					required: Boolean(rules?.required),
					defaultValue,
					...field,
				})}

				{error?.message && <CustomText variant="paragraphMedium">{error.message}</CustomText>}
			</>
		)}
	/>
)
