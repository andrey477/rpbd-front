export declare namespace TableType {
	interface Column<T> {
		id: string;
		code: keyof T;
		title: string;
	}
}