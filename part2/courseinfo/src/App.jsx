const Header = (title) => {
   return (
      <h1>{title.course}</h1>
   ) 
}

const Part = (prop) => {
   return (
       <p>
            {prop.parts[prop.index].name} {prop.parts[prop.index].exercises}
       </p>
    ) 
}

const Content = (prop) => {
   return (
       <div>
       <Part parts={prop.parts} index={0}/>
       <Part parts={prop.parts} index={1}/>
       <Part parts={prop.parts} index={2}/>
       </div>
   ) 
}
const Total = (prop) => {
    return (
      <p>Number of exercises {prop.total[0].exercises+ prop.total[1].exercises + prop.total[2].exercises}</p>
    )
}

const Course = ({course}) => {
   return (
    <div>
      <Header course= {course.name} />
      <Content parts= {course.parts}/>
      <Total total= {course.parts}/>
    </div>
  )
 
}


const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

export default App
