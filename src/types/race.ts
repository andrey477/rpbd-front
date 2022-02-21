export declare namespace Race {
	interface Data {
		attempts: number; // попытки
		rating: {
			stage_1: number[],
			stage_2: number[],
			stage_3: number[],
		}; // оценки судей
	}
}