import React from 'react';

export interface Student {
	name: string;
	grade: number | null;
}

interface Context {
	students: Student[];
	setStudents: (students: Student[]) => void;
}

const StudentsContext = React.createContext<Context>({students: [], setStudents: () => {}});
const StudentsProvider = StudentsContext.Provider;

export {StudentsContext, StudentsProvider};
