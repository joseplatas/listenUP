export function generateClassHelper(styles) {
    return function(...classNames) {
        return classNames
            .map(cn => styles[cn])
            .join(' ')
    }
}
