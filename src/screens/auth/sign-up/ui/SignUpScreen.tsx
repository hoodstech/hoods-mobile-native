import { useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, View, useColorScheme, Text } from 'react-native'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useNavigation, type NavigationProp } from '@react-navigation/native'
import { useMutation } from '@tanstack/react-query'

import { Button, FormElement, Input } from '~/shared/ui'
import { AppNavigationScreen } from '~/shared/config/navigation'

// TODO: Обновить стили, поправить работу экрана
// const requiredMessage = 'Поле обязательно для заполнения'

const signUpSchema = yup.object({
  // email: yup.string().email('Невалидное значение почты').required(requiredMessage),
  // password: yup.string().required(requiredMessage),
  // name: yup.string().required(requiredMessage),
  email: yup.string().notRequired(),
  password: yup.string().notRequired(),
  name: yup.string().notRequired(),
}).required()

type TSignUpFormData = yup.InferType<typeof signUpSchema>

const signUpApiHandler = (data: TSignUpFormData) =>
  fetch('https://api.here.test/sign-up', {
    method: 'POST',
    body: JSON.stringify(data),
  }).then((res) => res.json())

export const SignUpScreen = () => {
  const [step, setStep] = useState<1 | 2>(1)
  const theme = useColorScheme()
  const navigation = useNavigation<NavigationProp<AppNavigationScreen>>()
  const { isPending, mutate } = useMutation({
    mutationFn: signUpApiHandler,
    onSuccess: () => {
      navigation.navigate(AppNavigationScreen.MainScreens)
    },
    onError: () => {
      navigation.navigate(AppNavigationScreen.MainScreens)
    },
  })

  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<TSignUpFormData>({
    mode: 'onBlur',
    disabled: isPending,
    resolver: yupResolver(signUpSchema),
    defaultValues: { email: '', password: '', name: '' },
  })

  const onSubmit: SubmitHandler<TSignUpFormData> = async (values) => mutate(values)

  const handlePressButton = () => (step === 1 ? setStep(2) : handleSubmit(onSubmit)())

  const isDarkTheme = theme === 'dark'

  return (
    <KeyboardAvoidingView behavior="padding" style={[styles.wrapper, isDarkTheme && styles.darkWrapper]}>
      {step === 1 ? (
      <>
        <Text style={[styles.headerText, isDarkTheme && styles.darkText]}>
          Введите имя пользователя
        </Text>
        <Text style={[styles.subText, isDarkTheme && styles.darkText]}>
          Введите имя пользователя для своего аккаунта. Вы всегда можете изменить его
        </Text>
        <FormElement
          name="name"
          control={control}
          validateSchema={signUpSchema}
          style={styles.input}
          renderElement={({ onChange, ...props }) => <Input placeholder="Имя пользователя" onChangeText={onChange} {...props} />}
        />
      </>
    ) : (
      <>
        <Text style={[styles.headerText, styles.headerTextStep2, isDarkTheme && styles.darkText]}>
          Введите свой            эл.адрес и придумайте пароль
        </Text>
        <View style={styles.formGroup}>
          <FormElement
            name="email"
            control={control}
            validateSchema={signUpSchema}
            style={styles.lastInput}
            renderElement={({ onChange, ...props }) => <Input placeholder="Эл. почта" onChangeText={onChange} {...props} />}
          />
          <FormElement
            name="password"
            control={control}
            validateSchema={signUpSchema}
            style={styles.lastInput}
            renderElement={({ onChange, ...props }) => <Input placeholder="Придумайте пароль" onChangeText={onChange} secureTextEntry {...props} />}
          />
          <FormElement
            name="password"
            control={control}
            validateSchema={signUpSchema}
            style={styles.lastInput} 
            renderElement={({ onChange, ...props }) => <Input placeholder="Подтвердите пароль" onChangeText={onChange} secureTextEntry {...props} />}
          />
        </View>
      </>
    )}

      <Button
        disabled={!isValid || isPending}
        title={step === 1 ? 'Далее' : 'Завершить регистрацию'}
        onPress={handlePressButton}
        style={styles.button} isDarkTheme={false}/>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  darkWrapper: {
    backgroundColor: '#000',
  },
  headerText: {
    paddingTop: 21,
    fontSize: 32,
    fontWeight: '600',
    fontFamily: 'Manrope',
    lineHeight: 35.2,
    textAlign: 'left',
    color: '#0F0F14',
    marginBottom: 8,
    paddingLeft: 30,
  },
  headerTextStep2: {
    paddingTop: 20, 
  },
  subText: {
    fontSize: 12,
    textAlign: 'left',
    color: '#666',
    paddingLeft: 30,
  },
  darkText: {
    color: '#fff',
  },
  formGroup: {
    gap: 10,
  },
  button: {
    width: 265,
    height: 43,
    backgroundColor: '#000',
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 26,
    alignSelf: 'center',
    marginBottom: 108,
  },
  buttonStep2: {
    marginTop: 20, 
  },
  input: {
    width: 290,
    height: 43,
    alignSelf: 'center',
    paddingVertical: 12,
    paddingHorizontal: 14,
    gap: 10,
    borderRadius: 27,
    paddingTop: 30,
  },
  lastInput: {
    width: 290,
    height: 43,
    alignSelf: 'center',
    paddingVertical: 12,
    paddingHorizontal: 14,
    gap: 20,
    borderRadius: 27,
    paddingTop: 30,
  },
})

