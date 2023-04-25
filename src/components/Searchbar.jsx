import React, { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { HiSearch } from "react-icons/hi";

const Searchbar = (props) => {

    const { handleTextSubmit } = props;
    
    const [searchinput, setSearchinput] = useState("");

    return(
        <>
            {/* Searchbar */}
            <div className="fixed bottom-0 left-0 w-full bg-primary py-2 pt-8">
                <div className="container mx-auto text-center justify-center items-center flex">
                    <TextareaAutosize
                        className="w-2/4 bg-secondary rounded-md focus:outline-none text-white text-left mb-4 resize-none h-1/2 p-3"
                        style={{
                            height: '50px',
                            overflow: 'auto',
                        }}
                        placeholder="Lim inn teksten din her ..."
                        minRows={1}
                        maxRows={6}
                        onChange={e => setSearchinput(e.target.value)}
                    />
                    <button 
                        className="mb-2"
                        onClick={() => handleTextSubmit(searchinput)}
                    >
                        <HiSearch
                            className="text-center text-white text-3xl m-2"
                        />
                    </button>
                </div>
            </div>
        </>
    );
}

export default Searchbar;