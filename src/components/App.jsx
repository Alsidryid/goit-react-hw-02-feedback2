import { Component } from "react";
import Statistics from "./Statistics/Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Section from "./Section/Section";
import  Notification  from "./Notification/Notification";

export default class App  extends Component {
    static voteOptions = ['good', 'neutral', 'bad']
    state = {
        good: 0,
        neutral: 0,
        bad:0
    }
    countTotalFeedback = () => {
        const {good, neutral, bad} = this.state
        const total = good + neutral + bad
        return total
    }
    countPositiveFeedbackPercentage = () => {
        const total = this.countTotalFeedback();
        if (!total) {
            return 0
        }
        const value = this.state['good']
        return Number(((value / total) * 100).toFixed(2))
    }

  onLeaveFeedback = (keyName) => {
      console.log("hello")
        this.setState(prevState => {
            return {
            [keyName]:prevState[keyName] + 1
        }
    })
}

    render() {
        const total = this.countTotalFeedback();
      const percGood = this.countPositiveFeedbackPercentage()
      const {good, neutral, bad } = this.state
      const options = App.voteOptions
        return (
          <>
            <Section title="Please leave your feedback">
              <FeedbackOptions
                options={options}
                onLeaveFeedback={this.onLeaveFeedback}
              />
            </Section>
            <Section title="Statistics">
                {this.countTotalFeedback() <= 0  ? <Notification message="There is no feedback"/> : <Statistics
                  good={good}
                  neutral={neutral}
                  bad={bad}
                  total={total}
                  positivePercentage={percGood}
                />}
            </Section>
          </>
            

    )}}
