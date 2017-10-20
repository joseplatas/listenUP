constructor(props){
    super(props);
    this.state = {
      answer: {answer: ''},
    }
}

handleAnswer(event) {
    this.setState({
        answer: event.target.value
    })
}

handleSubmit(event){
    var answer = this.state.answer
    alert('User Answer:'+answer)
    event.preventDefault();
}