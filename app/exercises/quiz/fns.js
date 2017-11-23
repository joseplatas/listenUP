//functions necessary for Quiz to operate

// header gives the quiz page a different title depending on the language
export function generateHeader(language) {
    switch(language) {
        case 'en':
            return 'quiz exercise'
        case 'fr':
            return 'exercice quiz'
        case 'es':
            return 'ejercicio de quiz'
    }
}

// directions to watch the video in different languages
export function generateQuizDirections(language) {
    switch(language) {
        case 'en':
            return 'Watch the video clip below and answer the quiz question:'
        case 'fr':
            return 'Regardez la vidéo ci-dessous et répondez à la question du quiz:'
        case 'es':
            return 'Mire el siguiente video y responda la pregunta del cuestionario:'
    }
}

// creates and returns an array to fill the options
// utilizes additional method scrambleQuestions to randomize positions
export function getQuizOptions(correctAnswer, wrongAnswers) {
    var quizOptions = [
        correctAnswer,
        wrongAnswers[0],
        wrongAnswers[1],
        wrongAnswers[2]
    ]

    console.log(quizOptions)
    shuffleOptions(quizOptions)
    console.log(quizOptions)

    return quizOptions
}

function shuffleOptions(quizOptions) {
    var currentIndex = quizOptions.length, temporaryValue, randomIndex

    // while there are remaining elements to shuffle
    while (0 != currentIndex) {

        // pick a remaining element
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex -= 1

        // swap it with the current element
        temporaryValue = quizOptions[currentIndex]
        quizOptions[currentIndex] = quizOptions[randomIndex]
        quizOptions[randomIndex] = temporaryValue
    }
}

export function logOptions(quizOptions) {
    console.log(quizOptions)
}