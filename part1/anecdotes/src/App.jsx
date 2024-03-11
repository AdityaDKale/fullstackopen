import { useState } from 'react'

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

const Heading = ({ text }) => <h2>{ text }</h2>

const NextAnecdote = ({ setSelected, len }) => {
    return (
        <button onClick={() => setSelected(getRandomInt(0, len))}>next anecdote</button>
    )
}

const Votes = ({ selected, points }) => {
    return (
        <div>has {points[selected]} votes</div>
    )
}

const VoteAction = ({ selected, points, setPoints }) => {
    const copy = { ...points }
    copy[selected] += 1
    setPoints(copy)
}

const VoteButton = ({ selected, points, setPoints }) => <button onClick={() => VoteAction({selected, points, setPoints})}>vote</button>

const SelectAncedote = ({max_votes, anecdotes}) => <div>{ anecdotes[max_votes] }</div>


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState({0:0, 1:0, 2:0, 3:0, 4:0, 5:0, 6:0, 7:0, 8:0})

  const getMaxKey = (obj) => {

    const allZeros = Object.values(obj).every(value => value === 0);
    if (allZeros) {
        return 0; // Return 0 if no votes have been cast
        }
    return Object.keys(obj).reduce((a, b) => obj[a] > obj[b] ? a : b);
    };

  const max_votes= getMaxKey(points);

  return (
    <div>
      <Heading text={"Anecdote of the day"}/>
      {anecdotes[selected]}
      <Votes selected={selected} points={points}/>
      <VoteButton selected={selected} points={points} setPoints={setPoints}/>
      <NextAnecdote setSelected={setSelected} len={anecdotes.length} />
      <Heading text={"Anecdote with most votes"}/>
      <SelectAncedote max_votes={max_votes} anecdotes={anecdotes} />
    </div>
  )
}

export default App
