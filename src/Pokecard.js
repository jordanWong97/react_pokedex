// const pokeurl = x;

function Pokecard({ id, name, type, base_experience }) {
  //move to global const
  const POKE_IMG_URL =
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <div className="Pokecard">
      <h4>{name}</h4>
      <img src={POKE_IMG_URL} alt='img' />
      <p>Type: {type}</p>
      <p>EXP: {base_experience}</p>
    </div>
  );
}


export default Pokecard;