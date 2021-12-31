/*
function App(){
  return <div>Olá mundoo</div>
}*/

// com jsx ----------------------------
/*import React from "react";

const App = () => {
  return React.createElement('div', null, "Isto foi feito com jsx");
}*/
import { ChangeEvent, useEffect, useState } from 'react';
import { Botao } from './components/Botao';
import { Pessoa } from './components/Pessoa';
import { Container } from './components/Container';
import { BotaoStyle, Input } from './AppStyles';

const App = () => {

  let buttonText = "Click me!";
  let peopleList = [
    {name:"Uttoni", age:21},
    {name:"Breno", age:22},
    {name:"Gisele", age:34},
    {name:"Maísa", age:23},
    {name:"Ana Laura", age:25}
  ];
  let [showPeople, setShowPeople] = useState(false);
  let [modulo2, setModulo2] = useState(false);
  let [modulo3, setModulo3] = useState(false);
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [fullName, setFullName] = useState("");

  useEffect(() => {
    setFullName(firstName + " " + lastName);
  }, [firstName, lastName]);


  const buttonEventAction = (message: string) => {
    alert('You cliked me at App: ' + message);
  };

  const handleShowPeople = () => {
    setShowPeople(!showPeople);
  };

  const handleModulo2 = () => {
    setModulo2(!modulo2);
  }

  const handleModulo3 = () => {
    setModulo3(!modulo3);
  }

  const handleFirstName = (e: ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  }

  const handleLastName = (e: ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  }

  return (
    <div>
      { modulo2 &&  
        <Container>
          <p>Opa, blz?</p>
          <Botao text={buttonText} functionClick={buttonEventAction}/>
          <br/>
          <button onClick={handleShowPeople}>{showPeople ? 'Hide people' : 'Show people'}</button>
          <br/>
          { showPeople && //showPeople === true &&
            <ul>
              {
                peopleList.map((item, index) => (
                  <Pessoa key={index} data={item}/>
                ))
              }
            </ul>
          }
          <br/>
          <BotaoStyle bg="#f0f0f0">Botão grande</BotaoStyle>
          <br/>
          <BotaoStyle bg="#f0f0f0" small={true}>Botão pequeno</BotaoStyle>
          <br/>
          <span>Component filho do container</span>
          <a href="" className="link">Link aqui</a>
        </Container>
      }
      {/*modulo 3 --------------------------------------------------------------------------------------------------*/
        modulo3 &&
        <Container module={3}>
          <Input type="text" placeholder='Type your first name' onChange={handleFirstName}/>
          <Input type="text" placeholder='Type last name' onChange={handleLastName}/>
          <p>Full name: {fullName}</p>
        </Container>
      }

      <button onClick={handleModulo2}>Modulo 2</button>
      <button onClick={handleModulo3}>Modulo 3</button>
    </div>
  );
}

export default App;