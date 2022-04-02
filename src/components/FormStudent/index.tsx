import {FormEvent, useContext, useRef, useState} from 'react';
import {Student, StudentsContext} from '../../contexts/Students.context';
import {isNullOrEmpty} from '../../utils/empty';
import {Button} from '../Button';
import {Input} from '../Input';
import {StyledForm} from './style';

interface Validation<T> {
	value?: T;
	error?: string;
}

interface FormStudent {
	name: Validation<string>;
	grade: Validation<number>;
}

export const FormStudent = () => {
	const [{name, grade}, setStudent] = useState<FormStudent>({name: {}, grade: {}});
	const {students, setStudents} = useContext(StudentsContext);

	const nameInputRef = useRef<HTMLInputElement>(null);
	const gradeInputRef = useRef<HTMLInputElement>(null);

	const trySubmit = (e: FormEvent) => {
		e.preventDefault();

		const studentName = name.value;
		const studentGrade = grade.value;

		if (isNullOrEmpty.String(studentName)) {
			setStudent({name: {...name, error: "Student's name can not be empty"}, grade});
			nameInputRef.current?.select();
			return;
		}

		if (students.some((student) => student.name.toLowerCase() === studentName?.toLowerCase())) {
			setStudent({name: {...name, error: `${studentName} is already listed`}, grade});
			nameInputRef.current?.select();
			return;
		}

		if (isNullOrEmpty.Number(studentGrade)) {
			setStudent({
				name,
				grade: {...grade, error: `${studentName}'s grade can not be empty`},
			});
			gradeInputRef.current?.select();
			return;
		}

		if (studentGrade! < 0 || studentGrade! > 10) {
			setStudent({
				name,
				grade: {
					...grade,
					error: `${studentName}'s grade should be a number between 0 and 10`,
				},
			});
			gradeInputRef.current?.select();
			return;
		}

		setStudents([...students, {name: studentName!, grade: studentGrade!}]);
		setStudent({name: {}, grade: {}});
	};

	return (
		<StyledForm onSubmit={trySubmit}>
			<Input
				label='Student name'
				value={name.value ?? ''}
				error={name.error}
				onChange={(value) => setStudent({grade, name: {value}})}
				ref={nameInputRef}
			/>
			<Input
				label={`${isNullOrEmpty.String(name.value) ? 'Student' : name.value + "'s"} grade`}
				value={grade.value ?? ''}
				type='number'
				error={grade.error}
				onChange={(value) => setStudent({name, grade: {value: +value}})}
				ref={gradeInputRef}
			/>
			<Button
				text={`Add ${isNullOrEmpty.String(name.value) ? 'Student' : name.value!}`}
				className='primary'
				type='submit'
			/>
		</StyledForm>
	);
};
