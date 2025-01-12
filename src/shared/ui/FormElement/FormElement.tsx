import { ReactNode, useId } from 'react'
import { Control, Controller, ControllerRenderProps, FieldValues, Path, UseControllerProps } from 'react-hook-form'
import { StyleProp, StyleSheet, View, ViewStyle, Text } from 'react-native'
import * as yup from 'yup'

import { CustomText } from '../CustomText'

interface IFormElementProps<TFieldValues extends FieldValues>
  extends ControllerRenderProps<TFieldValues, Path<TFieldValues>> {
  id?: string
}

interface IFormElement<TFieldValues extends FieldValues>
  extends Pick<UseControllerProps<TFieldValues>, 'name' | 'rules' | 'control'> {
  control: Control<TFieldValues>
  label?: ReactNode
  style?: StyleProp<ViewStyle>
  validateSchema?: yup.ObjectSchema<TFieldValues>
  renderElement: (props: IFormElementProps<TFieldValues>) => ReactNode
}

export const FormElement = <TFieldValues extends FieldValues>({
  control,
  name,
  rules,
  label,
  style,
  validateSchema,
  renderElement,
  ...props
}: IFormElement<TFieldValues>) => {
  const elementId = useId()

  const isRequired =
		!(validateSchema?.describe().fields[name] as yup.SchemaDescription)?.optional || Boolean(rules?.required)

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field, fieldState: { error }}) => (
        <View style={[styles.wrapper, style]}>
          {label && (
            <Text style={styles.label}>
              {label}
              {isRequired && <Text style={styles.asterisk}>*</Text>}
            </Text>
          )}

          {renderElement({
            id: elementId,
            ...props,
            ...field,
          })}

          {error?.message && (
            <CustomText variant="paragraphMedium" style={styles.error}>
              {error.message}
            </CustomText>
          )}
        </View>
      )}
    />
  )
}

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: 6,
  },
  label: {
    fontFamily: 'Manrope_400Regular',
    fontSize: 14,
  },
  asterisk: {
    color: '#f00', // можно передать динамически через пропс
  },
  error: {
    color: '#f00', // динамически подстраивать под тему
  },
})
