function validISBN10(isbn) {
    // Verifica se o ISBN tem exatamente 10 caracteres
    if (isbn.length !== 10) {
        return false;
    }

    let sum = 0;

    for (let i = 0; i < isbn.length; i++) {
        let c;

        if (isbn[i] === 'X') {
            // 'X' só é válido na última posição
            if (i !== 9) {
                return false;
            }
            c = 10;
        } else if (isbn[i] >= '0' && isbn[i] <= '9') {
            c = isbn[i] - '0'; // Converte o caractere para número
        } else {
            // Se não for um número válido ou 'X', é inválido
            return false;
        }

        // Calcula a soma considerando a posição (de 1 a 10)
        sum += c * (i + 1);
    }

    // Verifica se a soma é divisível por 11
    return sum % 11 === 0;
}
