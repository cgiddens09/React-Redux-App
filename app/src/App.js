import React from 'react';
import Quotes from './components/Quotes';
import './App.css';
import styled from 'styled-components';

const Container = styled.div`
  display:flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  background-color: #354f42;
  width: 100%;
  height: 100vh;
  padding-top: 3%;
  
`

const Test = styled.div`
  display:flex;
  flex-direction: row;
  width: 100%;
`

const ron = require('./images/ron2.jpg');

export default function App() {
  return (
    <div>
      
      <Container>
        <h1>Ron Swanson Quotes</h1>
        <Test>
          <img src={ron} alt='Ron Swanson' />
          <Quotes />
        </Test>
      </Container>
    </div>
  );
}


