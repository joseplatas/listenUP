export function generateTooltipText(language) {
    switch(language) {
        case 'en':
            return "Expected Answer:"
        case 'fr':
            return "Réponse attendue:"
        case 'es':
            return "Respuesta esperada:"
    }
}

export function generateGoodJob(language) {
    switch(language) {
        case 'en':
            return "Good job!"
        case 'fr':
            return "Bien joué!"
        case 'es':
            return "¡Buen trabajo!"
    }
}