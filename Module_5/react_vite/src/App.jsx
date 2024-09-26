import { useState, useEffect } from 'react'
import './App.css'
import QuestionCard from './components/26-09-2024/QuestionCard/QuestionCard';

const App = () => {

  const [questions, setQuestions] = useState([]);
  // fetch("https://opentdb.com/api.php?amount=10&type=multiple")
  //   .then(res => res.json())
  //   .then(data => console.log(data))
  //   .catch(err => console.log("ERROR", err))

  const fetchQuestions = async () => {
    const res = await fetch("https://opentdb.com/api.php?amount=10&type=multiple")
    const data = await res.json();
    console.log(data.results)
    setQuestions(data.results);
  };

  useEffect(() => {
    fetchQuestions();
  }, []); // Mounting phase


  return (
    <>
      <h1>APIs - Quiz</h1>
      {
        questions.map((data, index) => {
          return <QuestionCard key={`question_${index}`} index={index} {...data} />
        })
      }
    </>
  )
}

export default App
