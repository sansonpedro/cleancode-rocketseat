function createUserRoute({
    body: {name, email, password},
    params: {id: 1}
})

// Assim quando eu quiser passar apenas id eu posso apenas fazer isso:

createUserRoute({
    params: {id: 1}
})


// Preferir receber sempre objetos ao invés de parâmetros jogados
// para não ter que ficar desestruturando

// não fazer isso
function createUserRoute({ name, email, password}, {params}) {
    const { name, email, password, params } = body;

    createUserController({
        name,
        email,
        password,
    })
}
