import React, { ForwardedRef, forwardRef } from 'react'
import { StyleSheet, TextInput, TextInputProps, useColorScheme, TextStyle } from 'react-native'

const BaseInput = (props: TextInputProps, ref?: ForwardedRef<TextInput>) => {
  const theme = useColorScheme()
  const dynamicStyles = theme === 'dark' ? darkStyles : lightStyles

  return <TextInput
    ref={ref}
    style={[styles.root, dynamicStyles]}
    {...props}
  />
}

export const Input = forwardRef(BaseInput)

const styles = StyleSheet.create({
  root: {
    height: 43,               
    borderWidth: 1,
    borderRadius: 27,      
    fontFamily: 'Manrope_400Regular',
    fontSize: 14,
    paddingHorizontal: 14,    
  } as TextStyle, 
})

const lightStyles = {
  borderColor: '#000',
  color: '#0F0F14',
  backgroundColor: '#FFF',
} as TextStyle

const darkStyles = {
  borderColor: '#FFF',
  color: '#FFF',
  backgroundColor: '#333',
} as TextStyle
