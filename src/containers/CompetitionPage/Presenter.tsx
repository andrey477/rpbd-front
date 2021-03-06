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
import {Competition} from "./Competition";
import {useCompetitionPage} from "./useCompetitionPage";
import './style.scss';

const bem = block('competition-page');

export const Presenter: React.FC<Props> = ({ role  }) => {
	const [open, setOpen] = useState<boolean>(false);
	const [expanded, setExpanded] = React.useState<string | false>(false);
	const {data, setData} = useCompetitionPage();

	const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
		setExpanded(isExpanded ? panel : false);
	};

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
				{!data.length ? <div className={bem('empty')}>Список соревнований пуст</div> :
					<Accordion>
						{data.map(item => (
							<AccordionItem
								title={item.name}
								key={item.id}
								setCompetition={setData}
								id={item.id}
								expanded={expanded}
								handleChange={handleChange}
								stage={item.stage}
							>
								<Competition competition={item} setCompetition={setData}/>
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
						setCompetition={setData}
					/>
				}
			</div>
		</PageWrapper>
  );
}