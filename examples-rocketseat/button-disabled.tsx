// causa x efeito

function Button() {
    const isFormSubmitting = true;
    return (
        <button disabled={isFormSubmitting}>
            <span></span>
            {isFormSubmitting ? 'Submitting...' : 'Submit'}
        </button>
    )
}

export default Button


// boas práticas de nomeação de variáveis
// 1. pensar na causa dela, não no efeito, para nomear
// 2. nomeação clara
// 3. nomeação descritiva