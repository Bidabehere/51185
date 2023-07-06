export const generateUserErrorParam = (userId) => {
    return `
    User id no es valido, debe ser un numero entero, pero se recibio: ${userId}
    `
}