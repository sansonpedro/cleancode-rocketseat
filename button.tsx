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
// 1. nomeação clara
// 2. nomeação descritiva
// 3. nomeação consistente
// 4. nomeação legível
// 5. nomeação manutenível
// 6. nomeação escalável
// 7. nomeação performática
// 8. nomeação segura
// 9. pensar na causa dela, não no efeito