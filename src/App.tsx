import {useState} from 'react';
import {FormStudent} from './components/FormStudent';
import {StudentsList} from './components/StudentsList';
import {Student, StudentsProvider} from './contexts/Students.context';

const filterStudents = (filter: (student: Student) => boolean) => (students: Student[]) =>
	students.filter(filter);

const filterBestStudents = filterStudents(({grade}) => grade! >= 9);
const filterBadGradeStudents = filterStudents(({grade}) => grade! < 7);

const App = () => {
	const [students, setStudents] = useState<Student[]>([]);

	return (
		<main>
			<h2 style={{color: '#44A'}}>Students Grades</h2>
			<StudentsProvider value={{students, setStudents}}>
				<StudentsList />
				<FormStudent />
				<h3 style={{marginTop: '2rem', color: '#4A4'}}>Students With Best Grade</h3>
				<StudentsList filter={filterBestStudents} />
				<h3 style={{color: '#A44'}}>Unapproved Students</h3>
				<StudentsList filter={filterBadGradeStudents} />
			</StudentsProvider>
		</main>
	);
};

export default App;
