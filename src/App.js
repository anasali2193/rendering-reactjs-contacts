import React from 'react';

function App() {
  const people = [
    {name : 'taylor'},
    {name : 'sara'},
    {name : 'richard'},
    
  ]
  return (
      
    <ol>
      {people.map((person)=>(
        <li key={person.name}>{person.name}</li>
      )) }

    </ol>
    
    );
}

export default App;
