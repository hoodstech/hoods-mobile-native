import { memo } from 'react'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'

type ActionButtonProps = TouchableOpacityProps & {
  onTap?: () => void;
}

// TODO: адаптировать под текущий button
// eslint-disable-next-line react/display-name
export const ActionButton = memo(
  ({ onTap, style, children, ...rest }: ActionButtonProps) => {
    return (
      <TouchableOpacity onPress={onTap} {...rest} style={style}>
        {children}
      </TouchableOpacity>
    )
  },
)
