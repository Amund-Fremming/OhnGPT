import React from "react";

/**
 * Sammendrag er ett koponent som skal inneholde sammendraget som blir
 * laget av openai sin api.
 * 
 * @returns ett komponent for sammendrag
 */
const Sammendrag = (props) => {

    const { summary } = props;

    return(
        <>
            <div className="flex justify-center items-center bg-primary">
                <h1 className="mb-12 text-bold text-4xl text-white md:mt-32 mt-10"><b>Sammendrag</b></h1>
            </div>

            <div className="flex justify-center items-center bg-secondary p-4">
                <p className="text-white w-1/2 items-center flex justify-center">{summary}</p>
            </div>
        </>
    );
}

export default Sammendrag;