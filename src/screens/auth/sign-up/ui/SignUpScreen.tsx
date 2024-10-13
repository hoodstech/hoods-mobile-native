import { useState } from 'react'
import { Image, KeyboardAvoidingView, StyleSheet, View } from 'react-native'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useMutation } from '@tanstack/react-query'

import { Button, CustomText, FormElement, Input } from '~/shared/ui'

const requiredMessage = 'Поле обязательно для заполнения'

// TODO согласовать правила валидации для полей
const signUpSchema = yup
	.object({
		email: yup.string().email('Невалидное значение почты').required(requiredMessage),
		password: yup.string().required(requiredMessage),
		name: yup.string(),
	})
	.required()

type TSignUpFormData = yup.InferType<typeof signUpSchema>

// TODO вынести общую логику для api ?
const signUpApiHandler = (data: TSignUpFormData) =>
	fetch('https://api.here.test/sign-up', {
		method: 'POST',
		body: JSON.stringify(data),
	}).then((res) => res.json())

export const SignUpScreen = () => {
	const [step, setStep] = useState<1 | 2>(1)

	const { isPending, mutate } = useMutation({
		mutationFn: signUpApiHandler,
		// TODO дальнейшая логика после успешной регистрации
		onSuccess: () => {},
		onError: () => {},
	})

	const isFirstStep = step === 1

	const {
		control,
		handleSubmit,
		formState: { isValid },
	} = useForm({
		mode: 'onBlur',
		disabled: isPending,
		resolver: yupResolver(signUpSchema),
		defaultValues: {
			email: '',
			password: '',
			name: '',
		},
	})

	const onSubmit: SubmitHandler<TSignUpFormData> = (values) => mutate(values)

	const handlePressButton = () => (isFirstStep ? setStep(2) : handleSubmit(onSubmit)())

	return (
		<KeyboardAvoidingView behavior="padding" style={styles.wrapper}>
			<Image source={require('~/shared/assets/images/sign-up.png')} />

			<CustomText variant="h1">{isFirstStep ? 'Hoods знает, что вам нужно' : 'Введите имя пользователя'}</CustomText>

			<CustomText variant="paragraphMedium">
				{isFirstStep
					? 'Введите свой эл.адрес и придумайте пароль'
					: 'Введите имя пользователя для своего аккаунта. Вы всегда можете изменить его'}
			</CustomText>

			{isFirstStep ? (
				<View>
					<FormElement
						name="email"
						control={control}
						validateSchema={signUpSchema}
						renderElement={(props) => <Input placeholder="Эл. почта" {...props} />}
					/>
					<FormElement
						name="password"
						control={control}
						validateSchema={signUpSchema}
						renderElement={(props) => <Input placeholder="Пароль" {...props} />}
					/>
				</View>
			) : (
				<FormElement
					name="name"
					control={control}
					validateSchema={signUpSchema}
					renderElement={(props) => <Input placeholder="Имя пользователя" {...props} />}
				/>
			)}

			<Button
				disabled={!isValid || isPending}
				title={isFirstStep ? 'Далее' : 'Завершить регистрацию'}
				onPress={handlePressButton}
			/>
		</KeyboardAvoidingView>
	)
}

const styles = StyleSheet.create({
	wrapper: {},
})
