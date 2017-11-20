//functions necessary for Transcription to operate

export var score = 0;

export function updateScore(newScore) {
    score = newScore
    return score
}

export function generateHeader(language) {
    switch(language) {
        case 'fr':
            return 'exercice transcription'
        case 'en':
            return 'transcription exercise'
        case 'es':
            return 'ejercicio de transcripcion'
    }
}