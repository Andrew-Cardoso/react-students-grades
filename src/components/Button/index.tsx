import {ButtonProps} from './interface';
import {StyledButton} from './style';

export const Button = ({text, className, type, align, justify}: ButtonProps) => (
	<StyledButton
		children={text}
		className={className ?? 'default'}
		type={type ?? 'button'}
		justify={justify}
		align={align}
	/>
);
