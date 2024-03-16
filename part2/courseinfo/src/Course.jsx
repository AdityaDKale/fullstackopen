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
            {prop.parts.map((part, index) => (
            <Part key={index} parts={prop.parts} index={index} />
            ))}
       </div>
   ) 
}
const Total = ({total}) => {
    return (
      <b>Total of {total.map(part => part.exercises).reduce((acc, curr) => acc + curr, 0)} exercises</b>
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


export default Course
