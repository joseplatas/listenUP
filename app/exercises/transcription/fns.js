//functions necessary for Transcription to operate

export var score = 0;

export function updateScore(newScore) {
    score = newScore
    return score
}

export function generateHeader(language) {
    switch(language) {
        case 'en':
            return 'transcription exercise'
        case 'fr':
            return 'exercice transcription'
        case 'es':
            return 'ejercicio de transcripcion'
    }
}

export function generateAudioInstructions(language) {
    switch(language) {
        case 'en':
            return 'listen to the audio:'
        case 'fr':
            return "écoute l'enregistrement audio:"
        case 'es':
            return 'escucha el audio:'
    }
}

export function generateTrInstructions(language) {
    switch(language) {
        case 'en':
            return 'type what you hear:'
        case 'fr':
            return "écrivez ce que vous entendez:"
        case 'es':
            return 'escribe lo que escuchas:'
    }
}

export function generateTip(language) {
    switch(language) {
        case 'en':
            return "You can skip sounds like 'umm...' and 'uhh...', but remember to include words such as 'like' and 'well.'"
        case 'fr':
            return "Vous pouvez ignorer les sons comme 'euhh...', mais souvenez-vous d'inclure des mots comme 'bon' et 'enfin.'"
        case 'es':
            return "Puede ignorar los sonidos como 'ehh', pero recuerde incluir palabras como 'bueno...' y 'A ver...'"
    }
}

export function generatePlaceholder(language) {
    switch(language) {
        case 'en':
            return "Type here..."
        case 'fr':
            return "Saissisez votre texte ici..."
        case 'es':
            return "Escriba aqui..."
    }
}

export function generateSubmitText(language) {
    switch(language) {
        case 'en':
            return "submit"
        case 'fr':
            return "soumettre"
        case 'es':
            return "someter"
    }
}

export function generateNextText(language) {
    switch(language) {
        case 'en':
            return "next"
        case 'fr':
            return "prochain"
        case 'es':
            return "siguiente"
    }
}