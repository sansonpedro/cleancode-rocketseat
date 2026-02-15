// Negação dentro de ifs

const isUserYoungerThan18Years = true;
const doesUserLivesInBrazil = true;

if (isUserYoungerThan18Years && doesUserLivesInBrazil) {
    console.log('User is younger than 18 and lives in Brazil');
} else {
    console.log('User is older than 18 or does not live in Brazil');
}

// Early return vs else

function isUserOlderThan18Years(user) {
    if (!user) {
        return {error: true}
    }

    return user.age >= 18
}

// Evite condicionais aninhadas

user.age >= 18 ? UserActivation.age === 18 ? : :

if (user.age > 18) {
    return;
}

if ()