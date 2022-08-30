import Pokedex from "./Pokedex";

const pokeList = [
  { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
  { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
  { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
  { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
  { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
  { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
  { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
  { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
];

function Pokegame() {
  //pokelist, create randomizer and put them into new arrays

  const shuffled = shuffle(pokeList);
  const player1 = shuffled.slice(0, 4);
  const player2 = shuffled.slice(4);

  const result = returnWInner(player1, player2);

  return (
    <div className="container">
      <h2>{`${result} wins!`}</h2>
      <div className="TeamRocket">
        <Pokedex pokeList={player1} />
      </div>
      <div className="AshKetchup">
        <Pokedex pokeList={player2} />
      </div>
    </div>
  );
}

function shuffle(array) {
  let currentIndex = array.length, randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}


function returnWInner(p1, p2) {
  let p1sum = 0;
  let p2sum = 0;
  for (let i of p1) {
    p1sum += i.base_experience;
  }
  for (let i of p2) {
    p2sum += i.base_experience;
  }
  return p1sum > p2sum ? 'Player1' : 'Player2';

}

// Used like so
// var arr = [2, 11, 37, 42];
// shuffle(arr);
// console.log(arr);

// function randomizer(list, num) {
//   const resultList = [];
//   for (let i = 0; i < num; i++) {
//     const index = Math.floor(Math.random() * list.length - 1);
//     resultList.push(pokeList[index]);
//     pokeList.splice(index, 1);
//   }
//   return resultList;
// }


export default Pokegame;