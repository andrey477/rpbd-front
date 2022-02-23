import {Status} from "../../constants/status";

export const getBadgeText = (status: Status): string => {
	switch (status) {
		case Status.APPROVED:
			return 'Принято';
			break;
		case Status.REJECTED:
			return 'Отклонено';
			break;
		default: {
			return 'В рассмотрении';
		}
	}
}