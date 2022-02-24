import React from "react";
import block from "bem-cn";
import {PageWrapper} from "../PageWrapper";
import './style.scss';

interface Props {

}

const bem = block('main-page');

export const MainPage: React.FC<Props> = () => {
	return (
		<PageWrapper>
			<div className={bem()}>
				<div className={bem('task')}>
					<h1 className={bem('title')}>Описание</h1>
					<hr className={bem('line')}/>
					<p className={bem('text')}>
						Дрифт (англ. Drift) — техника прохождения поворотов и вид автоспорта, характеризующийся использованием
						управляемого заноса на максимально возможных для удержания на трассе скорости и угла к траектории.
						Соревнования проводятся на сухом асфальте, трассах с большим количеством поворотов. Также вид автоспорта,
						основанный на зрелищности прохождения поворотов в заносе. Используются автомобили только с задним приводом.
						Возможны также переделки полноприводного автомобиля в заднеприводный.
					</p>
				</div>

			</div>
		</PageWrapper>
	)
}