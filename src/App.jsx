import React, { useState } from "react";
import Searchbar from "./components/Searchbar";
import Landingcomp from "./components/Landingcomp";
import Reply from "./util/Reply";
import { DotSpinner } from '@uiball/loaders'

/**
 * Detter er hovedkomponentet til applikasjonen.
 * 
 * @returns hoved komponentet
 */
const App = () => {

  const [firstSearch, setFirstSearch] = useState(false);
  const [summary, setSummary] = useState("");
  const [assignments, setAssignments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [jsonFormat, setJsonFormat] = useState();

  const handleTextSubmit = (e) => {
    setFirstSearch(true);

    const summaryProps = "You are a text summarization bot that writes summaries in Norwegian. When given a long text as input, you will " + 
    "return a summary of the given input. The text to summarize is: " + e;
    handleRequest(summaryProps, "summary");

    const assignmentProps = `You are a assignment creating bot that stores data in an JSON array. You write assignments to a given text. When creating questions you will create questions with four alternatives, a trough d. 
    and a correct answear. Make 6 questions. The question property has a "question" that stores the question, and a "options" property that stores different options. A option has the property "text" that stores the option, and a "correct" property that stores true if correct option, and false if else.
    The returned array should hold JSON object for each question. This is the text ${e} `;
    handleRequest(assignmentProps, "assignments");
  }

  const handleRequest = async(e, type) => {
    
    setLoading(true);
    const apiKey = "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";
    const prompt = e;

    try {

      const response = await fetch('https://api.openai.com/v1/engines/text-davinci-003/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          prompt: prompt,
          max_tokens: 3000,
          n: 1,
          temperature: 0.7,
        })
      });

      const data = await response.json();
      const generatedText = data.choices[0].text;
      console.log(generatedText);
      
      if(type === "summary") {
        setSummary(generatedText);
      } else if(type === "assignments") {
        setJsonFormat(generatedText);
        console.log(JSON.parse(generatedText))
        setAssignments(JSON.parse(generatedText));
        setLoading(false);
      }

    } catch(error) {
      console.log("Error with api call");
      console.log(error);
    } finally {

    }

  }
  
  if(loading) {
    return(
      <div className="flex justify-center items-center bg-primary h-screen w-full">
        <DotSpinner 
          size={40}
          speed={0.9} 
          color="gray" 
        />
      </div>
    );
  }

  return(
   <div className="bg-primary h-screen w-full">
    {
      !firstSearch
      ? <Landingcomp />
      : <Reply assignments={assignments} summary={summary} jsonData={jsonFormat} />
    }
     
    <Searchbar handleTextSubmit={handleTextSubmit} />
   </div>
  );
}

export default App;
