import React from "react";
import block from "bem-cn";
import {Link} from 'react-router-dom';
import {Button} from "../Button";
import {store} from "../../store/store";
import {logoutUser} from "../../store/user/actions";
import {history} from "../../history";
import './style.scss';
import {Props} from "./index";

const bem = block('header');

export const Presenter: React.FC<Props> = ({isAuth}) => {
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
							<li><Link to="/racers">Участники</Link></li>
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