import './App.css';
import { Quiz } from 'components/Quiz/Quiz.tsx';
import { useState } from 'react';
import { getQuestions, IQuestion } from 'services/questions.ts';

function App() {
  const [step, setStep] = useState(0);
  const [selectedGender, setSelectedGender] = useState('');

  const handleGenderSelected = (index: number, gender: string) => {
    console.log(step, index, gender);
    if (step === 0) {
      setSelectedGender(gender);
    }
    setStep(step + 1);
  };

  const questions = getQuestions(selectedGender);
  const question: IQuestion = questions[step];
  const percentage = Math.round(((step === 0 ? 1 : step + 1) / questions.length) * 100);

  return (
    <>
      <Quiz
        step={step}
        question={question}
        handleGenderSelected={handleGenderSelected}
        percentage={percentage}
      />
    </>
  );
}

export default App;
