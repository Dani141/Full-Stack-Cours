// Course.js
import React from 'react';

// Componente Header para mostrar el título del curso
const Header = ({ course }) => <h1>{course}</h1>

// Componente Total para mostrar la suma de los ejercicios
const Total = ({ sum }) => <p>Total of exercises {sum}</p>

// Componente Part para mostrar cada parte del curso
const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

// Componente Content para mostrar todas las partes del curso
const Content = ({ parts }) => 
  <>
    {parts.map((part) => (
      <Part key={part.id} part={part} />
    ))}
  </>

// Componente Course que agrupa todos los componentes anteriores
const Course = ({ course }) => (
  <div>
    <Header course={course.name} />
    <Content parts={course.parts} />
    <Total sum={course.parts.reduce((sum, part) => sum + part.exercises, 0)} />
  </div>
)

export default Course;
