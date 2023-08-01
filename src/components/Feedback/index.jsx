import { useState } from 'react';
import { Section } from 'components/Section/index';
import { FeedbackOptions } from 'components//FeedbackOptions/index';
import { Statistics } from 'components/Statistics/index';

const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const changeStats = score => {
    switch (score) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        break;
    }
  };

  const totalVotes = () => {
    const total = good + neutral + bad;
    return total;
  };

  const totalPositiveVotes = () => {
    const allAnswers = good + neutral + bad;
    return allAnswers ? `${((good / allAnswers) * 100).toFixed(0)}%` : `0%`;
  };

  return (
    <div>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={[`good`, `neutral`, `bad`]}
          onLeaveFeedback={score => changeStats(score)}
        />
      </Section>
      <Section>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalVotes()}
          positivePercentage={totalPositiveVotes()}
        />
      </Section>
    </div>
  );
};

export default Feedback;
