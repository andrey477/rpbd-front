import React, {Dispatch, SetStateAction} from 'react';
import {TableBody as MaterialTableBody} from "@material-ui/core";
import {Racer} from "../../../../types/racer";
import {TableRow} from "../TableRow";
import {VariantTable} from "../../../../constants/variantTable";
import {TableRowList} from "../TableRowList";
import {TableRowTotal} from "../TableRowTotal";
import {Competition as CompetitionType} from "../../../../types/competition";
import {Stage as StageVariant, Stage} from "../../../../constants/stage";

interface Props {
  racers: Racer.Data[];
  competitionId: string;
  variantTable?: VariantTable;
  setCompetition?: Dispatch<SetStateAction<CompetitionType.BodyCompetition[]>>;
  stage: Stage;
  currentStage?: StageVariant;
}

export const TableBody: React.FC<Props> = ({
  racers,
  competitionId,
  variantTable = VariantTable.STAGE,
  setCompetition,
  stage,
  currentStage
}) => {
  return (
    <MaterialTableBody>
      {variantTable === VariantTable.STAGE && racers.length && racers.map(racer => (
        <TableRow
          key={racer.person.id}
          racer={racer}
          competitionId={competitionId}
          stage={stage}
          currentStage={currentStage}
          setCompetition={setCompetition}
        />
      ))}
      {variantTable === VariantTable.RECORD && racers.length && racers.map(racer => (
        <TableRowList
          key={racer.person.id}
          racer={racer}
          competitionId={competitionId}
          variantTable={variantTable}
          setCompetition={setCompetition}
          stage={stage}
        />
      ))}
      {variantTable === VariantTable.TOTAL && racers.length && racers.map(racer => (
        <TableRowTotal racer={racer} key={racer.person.id}/>
      ))}
    </MaterialTableBody>
  );
}