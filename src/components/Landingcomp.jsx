import React from "react";
import { BsSun, BsLightningCharge } from "react-icons/bs";
import { CiWarning } from "react-icons/ci";

const Landingcomp = () => {
    return(
        <>
            <div className="flex flex-col items-center justify-center w-full">
                <h1 className="mb-12 text-bold text-4xl text-white md:mt-32 mt-10"><b>OhnGPT</b></h1>
                {/* info container */}
                <div className="flex flex-wrap justify-center w-full">
                    
                    {/* info 1 */}
                    <div className="flex flex-col items-center justify-top text-center md:w-auto w-3/4">
                        <BsSun className="text-2xl text-white mt-4" />
                        <h3 className="text-white m-1 mb-2 text-xl">Hvordan</h3>
                        
                        {/* Eksempler box */}
                        <div className="hover:bg-gray-800 w-10/12 md:w-[250px] h-auto p-2 rounded-md bg-secondary text-white text-[15px] m-2">
                            <p>'Start ved å lime inn en tekst, og deretter trykk søk.'</p>
                        </div>
                        
                        <div className="hover:bg-gray-800 w-10/12 md:w-[250px] h-auto p-2 rounded-md bg-secondary text-white text-[15px] m-2">
                            <p>'Så vil du få tilbake ett sammendrag og oppgaver til teksten.'</p>
                        </div>
                        
                    </div>

                    {/* info 2 */}
                    <div className="flex flex-col items-center justify-top text-center md:w-auto w-3/4">
                        <BsLightningCharge className="text-2xl text-white mt-4" />
                        <h3 className="text-white m-1 mb-2 text-xl">Kapasiteter</h3>

                        {/* Eksempler box */}
                        <div className="hover:bg-gray-800 w-10/12 md:w-[250px] h-auto p-3 rounded-md bg-secondary text-white text-[15px] m-2">
                            <p>'Lage sammendrag og oppgaver til tekster.'</p>
                        </div>
                        
                        <div className="hover:bg-gray-800 w-10/12 md:w-[250px] h-auto p-3 rounded-md bg-secondary text-white text-[15px] m-2">
                            <p>'Annen input vil gi dårlig respons.'</p>
                        </div>

                    </div>

                    {/* info 3 */}
                    <div className="flex flex-col items-center justify-top text-center md:w-auto w-3/4">
                        <CiWarning className="text-2xl font-bold text-white mt-4" />
                        <h3 className="text-white m-1 mb-2 text-xl">Begrensninger</h3>

                        {/* Eksempler box */}
                        <div className="hover:bg-gray-800 w-10/12 md:w-[250px] h-auto p-3 rounded-md bg-secondary text-white text-[15px] m-2">
                            <p>'Lage sammendrag og oppgaver til tekster. Annen input vil gi dårlig respons.'</p>
                        </div>

                        <div className="hover:bg-gray-800 w-10/12 md:w-[250px] h-auto p-3 rounded-md bg-secondary text-white text-[15px] m-2">
                            <p>'Lage sammendrag og oppgaver til tekster. Annen input vil gi dårlig respons.'</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Landingcomp;