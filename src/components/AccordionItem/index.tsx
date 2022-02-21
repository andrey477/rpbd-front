import React from 'react';
import {Accordion, AccordionDetails, AccordionSummary, Typography} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {useStyle} from "./useStyle";

interface Props {
  title: string;
}

export const AccordionItem: React.FC<Props> = ({title, children}) => {
  const classes = useStyle();
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails classes={classes}>
        {children}
      </AccordionDetails>
    </Accordion>
  );
}