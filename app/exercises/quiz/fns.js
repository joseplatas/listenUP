//functions necessary for Quiz to operate

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