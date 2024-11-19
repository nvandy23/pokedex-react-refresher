function Pokedex() {
    const defaultProps = {
        pokemon: [
            { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
            { id: 7, name: "Squirtle", type: "water", base_experience: 62 },
            { id: 11, name: "Metapod", type: "bug", base_experience: 62 },
            { id: 12, name: "Butterfree", type: "flying", base_experience: 62 },
            { id: 25, name: "Pikachu", type: "electric", base_experience: 62 },
            { id: 39, name: "Jigglypuff", type: "normal", base_experience: 62 },
            { id: 94, name: "Gengar", type: "poison", base_experience: 62 },
            { id: 133, name: "Eevee", type: "normal", base_experience: 62 },
        ],
    };

    return (
        <div>
            <h1>Pokedex</h1>
            <ul>
                {defaultProps.pokemon.map((pokemon) => (
                    <li key={pokemon.id}>
                        <div>ID: {pokemon.id}</div>
                        <div>Name: {pokemon.name}</div>
                        <div>Type: {pokemon.type}</div>
                        <div>Base Experience: {pokemon.base_experience}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Pokedex;
