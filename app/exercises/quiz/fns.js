//functions necessary for Quiz to operate

export function generateHeader(language) {
    switch(language) {
        case 'fr':
            return 'exercice quiz'
        case 'en':
            return 'quiz exercise'
        case 'es':
            return 'ejercicio de quiz'
    }
}