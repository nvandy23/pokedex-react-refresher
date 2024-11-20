import Pokecard from "./Pokecard";

function Pokegame() {
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

    let hand1 = [];
    let hand2 = [...defaultProps.pokemon];

 
    while (hand1.length < hand2.length) {
        let randIdx = Math.floor(Math.random() * hand2.length);
        let randPokemon = hand2.splice(randIdx, 1)[0];
        hand1.push(randPokemon);
    }

    return (
        <div>
            <h1>Pokegame!</h1>
            <h2>Hand 1</h2>
            <div className="Pokedex-cards">
                {hand1.map((p) => (
                    <Pokecard
                        key={p.id}
                        id={p.id}
                        name={p.name}
                        type={p.type}
                        base_experience={p.base_experience}
                    />
                ))}
            </div>
            <h2>Hand 2</h2>
            <div className="Pokedex-cards">
                {hand2.map((p) => (
                    <Pokecard
                        key={p.id}
                        id={p.id}
                        name={p.name}
                        type={p.type}
                        base_experience={p.base_experience}
                    />
                ))}
            </div>
        </div>
    );
}

export default Pokegame;

