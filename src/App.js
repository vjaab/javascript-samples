import React from 'react';
import './style.css';

export default function App() {
  let numbers = [1, 2, 3, 4, 5];
  console.log(numbers.map(num => num * 2));
  let len = numbers.length;

  while (len > 0) {
    console.log(numbers[len - 1]);
    len--;
  }
  return (
    <div>
      <h1>Hello StackBlitz! {numbers}</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
