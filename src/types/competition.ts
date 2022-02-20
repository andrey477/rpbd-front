import {Racers} from "./racers";
/*
* Всего будет три роли: racer, judge, admin
* admin - открыает соревнование, регистрирует судей
*	racer - есть возможно
* */


/*
* Модель соревнования.
*
* */
export declare namespace Competition {
	interface Data {
		racers: Racers.RacerData[]; // массив гонщиков
		stage: number; // этап соревнований
		isOpenRecord: boolean; // открыт ли приём участников. Если открыт, то stage = 0
		judges: string[]; // массив id судей. Судей должно быть трое
		isOpen: boolean; // открыто ли данное соревнование
	}
}

/*
* Модель гонщика
* */
// export declare namespace Racer {
// 	interface Data {
//
// 	}
// }