import React, {Dispatch, SetStateAction} from 'react';
import {Accordion, AccordionDetails, AccordionSummary, IconButton, Typography} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {useStyle} from "./useStyle";
import CloseIcon from '@material-ui/icons/Close';
import block from "bem-cn";
import './style.scss';
import {deleteCompetition} from "../../api/competitions";
import {Competition as CompetitionType} from "../../types/competition";

interface Props {
  title: string;
  id: string;
  setCompetition: Dispatch<SetStateAction<CompetitionType.BodyCompetition[]>>
}

const bem = block('accordion-item');

export const AccordionItem: React.FC<Props> = ({
  title,
  id,
  setCompetition,
  children
}) => {
  const classes = useStyle();

  const handleDelete = async (event: React.MouseEvent<HTMLButtonElement>) => {
    const response = await deleteCompetition(id)
    event.stopPropagation();
    if (response) {
      setCompetition(response);
    }
  }

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <div className={bem('content')}>
          <IconButton color={"secondary"} onClick={handleDelete}>
            <CloseIcon/>
          </IconButton>
          <Typography>{title}</Typography>
        </div>
      </AccordionSummary>
      <AccordionDetails classes={classes}>
        {children}
      </AccordionDetails>
    </Accordion>
  );
}