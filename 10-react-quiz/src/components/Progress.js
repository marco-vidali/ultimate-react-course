import { useQuiz } from "../contexts/QuizContext";

function Progress() {
  const { i, numQuestions, points, maxPossiblePoints, answer } = useQuiz();
  return (
    <header className="progress">
      <progress max={numQuestions} value={i + Number(answer !== null)} />

      <p>
        Question <strong>{i + 1}</strong> / {numQuestions}
      </p>

      <p>
        <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </header>
  );
}

export default Progress;
