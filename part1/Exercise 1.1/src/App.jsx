const Header = (course) => {
    return(
        <div>
            <h1>{course.name}</h1>
        </div>)
}
const Content = (content) => {
    return (
    <div>
        <p>
            {content.part} {content.exercises}
        </p>
    </div> )
}
const Total = (exercises) => {
    return (
    <div>
        <p>Number of exercises {exercises.total}</p>
     </div>   
    )
}
const App = () => {
    const course = 'Half Stack application development'
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14

    return (
        <div>
        <Header name= {course} />
        <Content part={part1} exercises={exercises1}/>
        <Content part={part2} exercises={exercises2}/>
        <Content part={part3} exercises={exercises3}/>
        <Total total={exercises1 + exercises2 + exercises3}/>
        </div>
    )
}

export default App
