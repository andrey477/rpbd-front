import React from "react";
import block from "bem-cn";
import {Link} from 'react-router-dom';
import {Button} from "../../components/Button";
import {store} from "../../store/store";
import {logoutUser} from "../../store/user/actions";
import {history} from "../../history";
import './style.scss';
import {Props} from "./index";
import {Roles} from "../../constants/roles";

const bem = block('header');

export const Presenter: React.FC<Props> = ({isAuth, role}) => {
	const handleClick = async () => {
		await store.dispatch(logoutUser());
		history.push('/login');
	}

	return (
		<header className={bem()}>
			<nav className={bem('nav').mix('blue darken-3')}>
				<div className="nav-wrapper">
					<Link to="/" className="brand-logo">Royals vsu drift</Link>
					{isAuth && (
						<ul id="nav-mobile" className="right hide-on-med-and-down">
							<li><Link to="/">Главная</Link></li>
							<li><Link to="/competition">Соревнования</Link></li>
							<li><Link to="/racers">Участники</Link></li>
							{role === Roles.ADMIN &&
								<li><Link to="/judge-registration">Зарегестрировать судью</Link></li>
							}
							<li>
								<Button
									color={'red darken-1'}
									onClick={handleClick}
								>Выйти</Button>
							</li>
						</ul>
					)}
				</div>
			</nav>
		</header>
	);
};