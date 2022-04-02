import { Student } from "../../contexts/Students.context";

export interface StudentListProps {
	filter?: (students: Student[]) => Student[];
}
