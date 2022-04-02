export type ButtonClassNames = 'default' | 'primary';
export type ButtonTypes = 'button' | 'submit' | 'reset';
type Alignments = 'center' | 'end' | 'start';

export interface ButtonProps {
	text: string;
	className?: ButtonClassNames;
	type?: ButtonTypes;
	align?: Alignments;
	justify?: Alignments;
}

export interface ButtonState {}
