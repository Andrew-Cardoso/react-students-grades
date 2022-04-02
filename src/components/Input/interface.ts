type Primary = string | boolean | number | null;

export interface InputProps {
	value: Primary;
	label: string;
	onChange: (value: string) => void;
	min?: number;
	max?: number;
	error?: string;
	type?: 'text' | 'number';
}
