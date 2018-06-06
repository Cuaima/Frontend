import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addQuestion } from "../actions/questions";
import { Link } from "react-router-dom";
import QuestionForm from "./QuestionForm";

class Quiz extends PureComponent {
  static propTypes = {
    questions: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        question: PropTypes.string.isRequired,
        a: PropTypes.string.isRequired,
        b: PropTypes.string.isRequired,
        c: PropTypes.string.isRequired,
        d: PropTypes.string.isRequired,
        correct_answer: PropTypes.string.isRequired
      })
    ).isRequired
  };

  addQuestion = question => {
    this.props.addQuestion(question);
  };

  render() {
    const { questions } = this.props;
    return (
      <div>
        <h1> Quiz nr1 </h1>

        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Question</th>
              <th>Answers</th>
              <th>Correct Answer</th>
            </tr>
          </thead>
          <tbody>
            {questions.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.question}</td>
                <td>{item.a}</td>
                <td>{item.b}</td>
                <td>{item.c}</td>
                <td>{item.d}</td>
                <td>{item.correct_answer}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h1>Create a new question </h1>
        <QuestionForm onSubmit={this.addQuestion} />
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    questions: state.questions
  };
};

export default connect(
  mapStateToProps,
  {
    addQuestion
  }
)(Quiz);