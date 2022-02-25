export declare namespace Race {
	interface Data {
		attempts: number; // попытки
		rating: {
			stage_1: Stage,
			stage_2: Stage,
			stage_3: Stage,
		}; // оценки судей
	}

	interface Stage {
		first: number | null;
		second: number | null;
		third: number | null;
	}
}