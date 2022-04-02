import {useContext, useEffect} from 'react';
import {StudentsContext} from '../../contexts/Students.context';
import {StudentListProps} from './interface';
import {ListContainer, ListItem} from './style';

export const StudentsList = ({filter}: StudentListProps) => {
	const {students} = useContext(StudentsContext);
	return (
		<ListContainer>
			{(filter ? filter(students) : students)
				.sort((a, b) => a.name.localeCompare(b.name))
				.map(({name, grade}) => (
					<ListItem key={name}>
						{name} - {grade}
					</ListItem>
				))}
		</ListContainer>
	);
};
