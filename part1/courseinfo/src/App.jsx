const Header = (title) => {
   return (
      <h1>{title.course}</h1>
   ) 
}
const Content = (prop) => {
   return (
       <div>
       <p>
            {prop.parts[0].name} {prop.parts[0].exercises}
       </p>
       <p>
            {prop.parts[1].name} {prop.parts[1].exercises}
       </p>
       <p>
            {prop.parts[2].name} {prop.parts[2].exercises}
       </p>
       </div>
   ) 
}
const Total = (prop) => {
    return (
      <p>Number of exercises {prop.total[0].exercises+ prop.total[1].exercises + prop.total[2].exercises}</p>
    )
}
const App = () => {

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course= {course.name} />
      <Content parts= {course.parts}/>
      <Total total= {course.parts}/>
    </div>
  )
}

export default App
