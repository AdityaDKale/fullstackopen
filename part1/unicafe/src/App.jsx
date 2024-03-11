import { useState } from 'react'

const Button = ({onClick, text}) => <button onClick={ onClick }>{ text }</button>
const Heading = ({text}) => <h2>{ text }</h2>
const StatisticLine = ({text, value, extra=''}) => <tr><td>{text}</td><td>{value}</td><td>{extra}</td></tr>
const Statistics = (props) => {
    const good = props.good
    const neutral = props.neutral
    const bad = props.bad
    if (good === 0 && neutral === 0 && bad === 0) {
        return (
            <div>No feedback given</div>
        )}
    return (
    <table>
        <tbody>
        <StatisticLine text='good' value={good} />
        <StatisticLine text='neutral' value={neutral} />
        <StatisticLine text='bad' value={bad} />
        <StatisticLine text='all' value={good + neutral + bad} />
        <StatisticLine text='average' value={(good - bad) / (good + neutral + bad)} />
        <StatisticLine text='positive' value={(good) / (good + neutral + bad) * 100} extra='%' /> 
        </tbody>
    </table>
    )
}

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
      <Statistics good={good} neutral={neutral} bad={bad}/>
   </div>
  )
}
export default App
