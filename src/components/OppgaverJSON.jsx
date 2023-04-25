import React from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialOceanic } from 'react-syntax-highlighter/dist/esm/styles/prism';

/**
 * 
 * @returns ett komponent som inneholder spørsmålene fra sammendraget i 
 * JSON format som er gitt i oppgaven.
 */
const OppgaverJSON = (props) => {

    const { jsonData } = props;

    const parsedData = JSON.parse(jsonData);
    const formattedData = JSON.stringify(parsedData, null, 2);

    return(
        <>
            <div className="flex justify-center items-center bg-primary">
                <h1 className="mb-12 text-bold text-4xl text-white md:mt-32 mt-10"><b>Oppgaver JSON format</b></h1>
            </div>

            <div className="min-h-screen flex items-center justify-center bg-secondary pt-10 pb-40 w-full">
                <div className="w-1/2 bg-white rounded-lg shadow-lg overflow-hidden" >
                    <div className="bg-gray-800 px-4 py-2">
                        <h1 className="text-gray-200 text-lg font-bold">JSON Data</h1>
                    </div>
                    <div className="p-4">
                        <SyntaxHighlighter
                            language="json"
                            style={materialOceanic}
                            customStyle={{ whiteSpace: 'pre-wrap' }}
                        >
                            {formattedData}
                        </SyntaxHighlighter>
                    </div>
                </div>
            </div>
        
        </>
    );
}

export default OppgaverJSON;