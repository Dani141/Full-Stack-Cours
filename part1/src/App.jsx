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
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} ex1={exercises1} ex2={exercises2} ex3={exercises3} />
      <Total ex1={exercises1} ex2={exercises2} ex3={exercises3} />
    </div>
  )
}

export default App
