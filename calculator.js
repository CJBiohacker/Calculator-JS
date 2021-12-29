// Variáveis



// Funções da Calculadora
// Soma
const Soma = (...numeros) => {
    let redutorSoma = (anterior, atual) => anterior + atual;
    let redutor = numeros.reduce(redutorSoma);

    let resultado = redutor;
    let extensao = resultado.toString();            // Retorna a quantidade de algarismos do resultado

    return extensao.length > 8 ? console.log("Erro !!!") : console.log(resultado);     // Condicional que limita até 8 caracteres a saída de valores
};

// Subtração
const Subtracao = (...numeros) => {
    let redutorSubtr = (anterior, atual) => anterior - atual;
    let redutor = numeros.reduce(redutorSubtr);

    let resultado = redutor;
    let extensao = resultado.toString();            // Retorna a quantidade de algarismos do resultado

    return extensao.length > 8 ? console.log("Erro !!!") : console.log(resultado);     // Condicional que limita até 8 caracteres a saída de valores
};

// Multiplicação
const Multiplicacao = (...numeros) => {
    let redutorMult = (anterior, atual) => anterior * atual;
    let redutor = numeros.reduce(redutorMult);

    let resultado = redutor;
    let extensao = resultado.toString();            // Retorna a quantidade de algarismos do resultado

    return extensao.length > 8 ? console.log("Erro !!!") : console.log(resultado);     // Condicional que limita até 8 caracteres a saída de valores
};

// Divisão
const Divisao = (...numeros) => {
    let redutorDiv = (anterior, atual) => anterior / atual;
    let redutor = numeros.reduce(redutorDiv);

    let resultado = redutor;
    let extensao = resultado.toString();            // Retorna a quantidade de algarismos do resultado

    return extensao.length > 8 ? console.log("Erro !!!") : console.log(resultado);     // Condicional que limita até 8 caracteres a saída de valores
};

// Testando funções
Soma(1, 2, 3);
Subtracao(3, 2, 0);
Multiplicacao(0.5, 0.21540, 5);
Divisao(50, 5, 2);

