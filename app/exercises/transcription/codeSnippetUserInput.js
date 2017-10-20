constructor(props){
 super(props)
 this.state = {
     counter: 0,
     questionId: 1,
     question: '',
     answer: '',
     answerCount: {
         someChoice: 0,
     }
 }
}

handleAnswerSelected(event){
    this.setAnswer(event.currentTarget.value)
    if(this.state.question < exercise.length)
    {
        this.setNextQuestion()
    }
    else{

    }
}

setUserAnswer(answer){
    const updatedAnswerCount = update(this.state.answerCount, {
        [answer]: {$apply: (currentValue) => currentValue+1}
    });
    this.setState({
        answerCount: updatedAnswerCount,
        answer: answer
    })
}

setNextQuestion(){
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;
    this.setState({
        counter: counter,
        questionId: questionId,
        question: quizQuestion[counter].answer,
        answer: ''
    })
}