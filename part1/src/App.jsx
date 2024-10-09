import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

const Header = ({ course }) => {
  return (
    <h1>{course}</h1>
  )
}
const Part = ({ name, exercises }) => {
  return (
    <p>{name} {exercises}</p>
  )
}

const Content = ({ part1, part2, part3, ex1, ex2, ex3 }) => {
  return (
    <>
      <Part name={part1} exercises={ex1} />
      <Part name={part2} exercises={ex2} />
      <Part name={part3} exercises={ex3} />
    </>
  )
}

const Total = ({ ex1, ex2, ex3 }) => {
  return (
    <p>Number of exercises {ex1 + ex2 + ex3}</p>
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
    <Header course={course.name} />
    <Content part1={course.parts[0].name} part2={course.parts[1].name} part3={course.parts[2].name} ex1={course.parts[0].exercises} ex2={course.parts[1].exercises} ex3={course.parts[2].exercises} /> 
    <Total ex1={course.parts[0].exercises} ex2={course.parts[1].exercises} ex3={course.parts[2].exercises} /> 
  </div>
  )
}


export default App
