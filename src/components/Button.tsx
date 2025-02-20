import clsx from 'clsx';
import { createContext, useContext } from 'react';
import {
  Text,
  TextProps,
  TouchableOpacity,
  TouchableOpacityProps,
  ActivityIndicator,
} from 'react-native';

type Variants = 'primary' | 'secondary';

type ButtonProps = TouchableOpacityProps & {
  variant?: Variants;
  isLoading?: boolean;
};

const ThemeContext = createContext<{ variant?: Variants }>({});

const Button = ({
  variant = 'primary',
  isLoading,
  children,
  ...props
}: ButtonProps) => {
  return (
    <TouchableOpacity
      className={clsx(
        'w-full h-11 flex-row items-center justify-center rounded-lg gap-2',
        {
          'bg-lime-300': variant === 'primary',
          'bg-zinc-800': variant === 'secondary',
        }
      )}
      activeOpacity={0.7}
      disabled={isLoading}
      {...props}
    >
      <ThemeContext.Provider value={{ variant }}>
        {isLoading ? <ActivityIndicator className="text-lime-950" /> : children}
      </ThemeContext.Provider>
    </TouchableOpacity>
  );
};

const Title = ({ children, ...props }: TextProps) => {
  const { variant } = useContext(ThemeContext);
  return (
    <Text
      className={clsx('text-base font-semibold', {
        'text-lime-950': variant === 'primary',
        'text-zinc-200': variant === 'secondary',
      })}
      {...props}
    >
      {children}
    </Text>
  );
};

Button.Title = Title;

export { Button };
