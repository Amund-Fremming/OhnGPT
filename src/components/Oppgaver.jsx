import React, { useState } from "react";

/**
 * I dette kkomponentet skal det være spørsmål som kommer fra teksten som blir gitt
 * i applikasjonen.
 * 
 * @returns ett komponent med oppgaver
 */
const Oppgaver = (props) => {

    const { assignments } = props;

    const [selectedAnswers, setSelectedAnswers] = useState(Array(assignments.length).fill(null));

    const handleSubmit = () => {
        const numCorrect = assignments.reduce((acc, question, index) => {
          if (selectedAnswers[index] === question.options.find((o) => o.correct)?.text) {
            return acc + 1;
          } else {
            return acc;
          }
        }, 0);
        
        alert(`You got ${numCorrect} out of ${assignments.length} questions correct!`);
    }

    return(
        <>
            <div className="flex justify-center items-center bg-primary">
                <h1 className="mb-12 text-bold text-4xl text-white md:mt-32 mt-10"><b>Oppgaver</b></h1>
            </div>

            <div className="flex flex-col justify-center items-center bg-secondary p-4 pb-32">
                {assignments.map((question, index) => (
                    <div 
                        key={index}
                        className="flex flex-col justify-center items-start text-white text-xl m-6"
                    >
                        <h3 className="w-[450px] sm:w-[600px] p-1">{question.question}</h3>
                        <select
                            value={selectedAnswers[index]}
                            className="bg-primary rounded-md m-1 p-1 w-[450px] sm:w-[600px]"
                            onChange={(event) => {
                                const newAnswers = [...selectedAnswers];
                                newAnswers[index] = event.target.value;
                                setSelectedAnswers(newAnswers);
                            }}>
                            <option>Select an answer</option>
                            {question.options.map((option, index) => (
                            <option key={index} value={option.text}>{option.text}</option>
                        ))}
                        </select>
                    </div>
                    ))}

                <button 
                    className="bg-blue-600 w-20 h-10 rounded-md hover:bg-gray-400 hover:border-b-gray-800 border-b-blue-900 border-b-4 outline-none mb-20 text-center"
                    onClick={() => handleSubmit()}
                >
                    Submit
                </button>
            </div>
        </>
    );
}

export default Oppgaver;