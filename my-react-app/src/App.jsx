
import Pokecard from './pokecard'
import Pokedex from './Pokedex'


function App() {
  return (
<div>
  <Pokecard id = {4} 
  name = {"Charmander"} 
  type = {"Fire"}
  base_experience = {62}/>
  <Pokedex/>
</div>
  )
}

export default App
