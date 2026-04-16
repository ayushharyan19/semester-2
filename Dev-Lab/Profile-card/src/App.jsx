import React from 'react';
import './App.css';
import Card from './components/card';

const App = () => {
  const [name, setName] = React.useState("John Doe");
  const [bio, setBio] = React.useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
  const [img, setImg] = React.useState("https://via.placeholder.com/150");
  const arr=[{name:"John Doe",bio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",img:"https://via.placeholder.com/150"},{name:"Ayush",bio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",img:"https://via.placeholder.com/150/0000FF/808080?Text=Vivek"}, {name:"Aryan",bio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",img:"https://via.placeholder.com/150/FF0000/FFFFFF?Text=Alice"}]

  const changeName = () => {
    setName("Ayush");
    setBio("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
    setImg("https://via.placeholder.com/150/0000FF/808080?Text=Vivek");
  };
  
  return (
    <div id='container'>
      {arr.map((item) => (
        <Card key={item.name} img={item.img} name={item.name} bio={item.bio} changeName={changeName} />
      ))}
    </div>
  );
};

export default App;