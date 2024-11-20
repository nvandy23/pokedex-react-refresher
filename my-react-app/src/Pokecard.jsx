import './pokecard.css';
import './pokedex.css';
const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

function Pokecard(props) {
    const imgSrc = `${POKE_API}${props.id}.png`; 
    return (
        <div className="pokecard">
            <h2>ID: {props.id}</h2>
            <h3>Name: {props.name}</h3>
            <div className='Pokecard-data'>Base Experience: {props.base_experience}</div>
            <div className='Pokecard-data'>Type: {props.type}</div>
            <img src={imgSrc} alt={props.name} />
        </div>
    );
}

export default Pokecard;

