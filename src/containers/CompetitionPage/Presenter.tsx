import React, {useState} from 'react';
import {Props} from "./index";
import block from "bem-cn";
import {PageWrapper} from "../../components/PageWrapper";
import {Roles} from "../../constants/roles";
import {Button} from "../../components/Button";
import {Accordion} from "../../components/Accordion";
import {AccordionItem} from "../../components/AccordionItem";
import {ModalCompetition} from "./ModalCompetition";
import {Divider, Typography} from "@material-ui/core";
import {competitionMock} from "../../mock/competitionMock";
import './style.scss';
import {Competition} from "./Competition";

const bem = block('competition-page');

export const Presenter: React.FC<Props> = ({ role  }) => {
	const competitions = competitionMock;
	const [open, setOpen] = useState<boolean>(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

  return (
		<PageWrapper>
			<div className={bem()}>
				<div className={bem('title')}>
					<Typography
						align={"center"}
						variant={'h4'}
					>Список соревнований</Typography>
				</div>
				<Divider/>
				{!competitions.length ? <div className={bem('empty')}>Список соревнований пуст</div> :
					<Accordion>
						{competitions.map(competition => (
							<AccordionItem title={competition.name} key={competition.id}>
								<Competition competition={competition}/>
							</AccordionItem>
						))}
					</Accordion>
				}
				<Divider/>
				<div className={bem('buttons')}>
					{role === Roles.ADMIN &&
						<Button variant="outlined" color="primary" onClick={handleClickOpen}>
							Создать соревнование
						</Button>
					}
				</div>
				{role === Roles.ADMIN &&
					<ModalCompetition
						title={'Создать соревнование'}
						open={open}
						handleClose={handleClose}
					/>
				}
			</div>
		</PageWrapper>
  );
}