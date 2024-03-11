import { useState } from 'react'

const Button = ({onClick, text}) => <button onClick={ onClick }>{ text }</button>
const Heading = ({text}) => <h2>{ text }</h2>
const Stat_part = ({text, val}) => <div>{text} {val}</div>
const Stat_part_extra = ({text, val, extra}) => <div>{text} {val} {extra}</div>

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addGood = () => setGood(good + 1)
  const addNeutral = () => setNeutral(neutral + 1)
  const addBad = () => setBad(bad + 1)
  return (
    <div>
      <Heading text='give feedback' />
      <Button onClick={addGood} text={'good'}/>
      <Button onClick={addNeutral} text={'neutral'}/>
      <Button onClick={addBad} text={'bad'}/>
      <Heading text='statistics' />
      <Stat_part text='good' val={good} />
      <Stat_part text='neutral' val={neutral} />
      <Stat_part text='bad' val={bad} />
      <Stat_part text='all' val={good + neutral + bad} />
      <Stat_part text='average' val={(good - bad) / (good + neutral + bad)} />
      <Stat_part_extra text='positive' val={(good) / (good + neutral + bad) * 100} extra='%' /> 
    </div>
  )
}
export default App
