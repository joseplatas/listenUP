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