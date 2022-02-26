export declare namespace Race {
	interface Data {
		attempts: number; // попытки
		ratingOneStage: Stage;
		ratingTwoStage: Stage;
		ratingThirdStage: Stage;
	}

	interface Stage {
		first: number | null;
		second: number | null;
		third: number | null;
	}
}