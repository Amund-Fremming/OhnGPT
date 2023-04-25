import React from "react";
import Sammendrag from "../components/Sammendrag";
import Oppgaver from "../components/Oppgaver";
import OppgaverJSON from "../components/OppgaverJSON";

const Reply = (props) => {

    const { summary, assignments, jsonData } = props;

    return(
        <>
            <Sammendrag summary={summary} />
            <Oppgaver assignments={assignments} />
            <OppgaverJSON jsonData={jsonData}/>
        </>
    );
}

export default Reply;