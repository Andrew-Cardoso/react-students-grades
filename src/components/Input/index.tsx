import React, {ForwardedRef, forwardRef} from 'react';
import {InputProps} from './interface';
import {StyledError, StyledInput, StyledInputContainer, StyledLabel} from './style';

const InputComponent = forwardRef(
	(
		{label, value, error, onChange, type, min, max}: InputProps,
		ref: ForwardedRef<HTMLInputElement>,
	) => {
		return (
			<StyledInputContainer>
				<StyledLabel children={label} />
				<StyledInput
					value={value}
					onChange={({target}) => onChange(target.value)}
					type={type ?? 'text'}
					min={min}
					max={max}
					ref={ref}
				/>
				<StyledError hasError={!!error}>{error}</StyledError>
			</StyledInputContainer>
		);
	},
);

export const Input = React.memo(InputComponent);
