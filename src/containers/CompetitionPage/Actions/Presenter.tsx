import React from 'react';
import block from "bem-cn";
import {Props} from "./index";
import {Roles} from "../../../constants/roles";
import {Button} from "../../../components/Button";
import {VariantTable} from "../../../constants/variantTable";

const bem = block('action');

export const Presenter: React.FC<Props> = ({
	role	,
	attempts,
	competitionId,
	racerId,
	variantTable = VariantTable.STAGE,
}) => {

	const isList = variantTable === VariantTable.LIST;

	const handleRace = () => {

	}

	const handleAccept = () => {

	}

	const handleReject = () => {

	}

	return (
		<div className={bem()}>
			{role === Roles.RACER &&
				<div>
					<Button disabled={!attempts}>Заезд</Button>
					<span>Количество попыток: {attempts}</span>
				</div>
			}
			{role === Roles.ADMIN && isList &&
				<div>
					<Button>Принять</Button>
					<Button>Отклонить</Button>
				</div>
			}
		</div>
	);
}