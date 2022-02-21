 import React from 'react';
 import {Table} from "@material-ui/core";
 import {TableHead} from "./TableHead";
 import {TableBody} from "./TableBody";

 interface Props {

 }

 export const TableCompetition: React.FC<Props> = () => {
   return (
		 <Table>
			 <TableHead/>
			 <TableBody/>
		 </Table>
   );
 }