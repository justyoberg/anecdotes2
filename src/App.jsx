import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.',
  ]

  const getRandomNumber = max => Math.floor(Math.random() * (max || 1))
  const setVotesSafely = index => {
    const copy = [...votes]
    copy[index] += 1
    setVotes(copy)
  }

  const [selected, setSelected] = useState(getRandomNumber(anecdotes.length))
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  return (
    <div>
      <div>{anecdotes[selected]}</div>
      <div>has {votes[selected]} votes</div>
      <button onClick={() => setSelected(getRandomNumber(anecdotes.length))}>
        next anecdote
      </button>
      <button onClick={() => setVotesSafely(selected)}>vote</button>
    </div>
  )
}

export default App
