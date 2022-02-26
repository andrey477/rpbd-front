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
  setCompetition: Dispatch<SetStateAction<CompetitionType.BodyCompetition[]>>;
  expanded: string | false;
  handleChange: (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => void;
}

const bem = block('accordion-item');

export const AccordionItem: React.FC<Props> = ({
  title,
  id,
  setCompetition,
  expanded,
  handleChange,
  children
}) => {
  const classes = useStyle();

  const handleDelete = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    const response = await deleteCompetition(id)
    if (response.length) {
      setCompetition(response);
    }
  }

  return (
    <Accordion expanded={id === expanded} onChange={handleChange(id)}>
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