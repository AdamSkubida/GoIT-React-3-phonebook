export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul>
      {options.map(option => (
        <li>
          <button onClick={() => onLeaveFeedback(option)}>{option}</button>
        </li>
      ))}
    </ul>
  );
};
