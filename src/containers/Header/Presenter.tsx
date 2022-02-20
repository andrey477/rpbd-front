import React from "react";
import block from "bem-cn";
import {Link} from 'react-router-dom';
import {Button} from "../../components/Button";
import {store} from "../../store/store";
import {logoutUser} from "../../store/user/actions";
import {history} from "../../history";
import {Props} from "./index";
import {AppBar, Toolbar, Typography} from "@material-ui/core";
import {useStyle} from "./useStyle";
import './style.scss';

const bem = block('header');

export const Presenter: React.FC<Props> = ({isAuth, role}) => {
	const classes = useStyle();

	const handleClick = async () => {
		await store.dispatch(logoutUser());
		history.push('/login');
	}

	return (
		// <header className={bem()}>
		// 	<nav className={bem('nav').mix('blue darken-3')}>
		// 		<div className="nav-wrapper">
		// 			<Link to="/" className="brand-logo">Royals vsu drift</Link>
		// 			{isAuth && (
		// 				<ul id="nav-mobile" className="right hide-on-med-and-down">
		// 					<li><Link to="/">Главная</Link></li>
		// 					<li><Link to="/competition">Соревнования</Link></li>
		// 					<li><Link to="/racers">Участники</Link></li>
		// 					<li>
		// 						<Button
		// 							onClick={handleClick}
		// 						>Выйти</Button>
		// 					</li>
		// 				</ul>
		// 			)}
		// 		</div>
		// 	</nav>
		// </header>
		<AppBar position="static">
			<Toolbar>
				<Typography variant="h4" className={classes.title}>
					Royals vsu drift
				</Typography>
				{isAuth && (
					<ul className={bem('menu')}>
						<li className={bem('menu-item')}>
							<Link className={bem('menu-link')} to="/">Главная</Link>
						</li>
						<li className={bem('menu-item')}>
							<Link className={bem('menu-link')} to="/competition">Соревнования</Link>
						</li>
						<li className={bem('menu-item')}>
							<Link className={bem('menu-link')} to="/racers">Участники</Link>
						</li>
						<li className={bem('menu-item')}>
							<Button
								onClick={handleClick}
								color={'secondary'}
							>Выйти</Button>
						</li>
					</ul>
				)}
			</Toolbar>
		</AppBar>
	);
};