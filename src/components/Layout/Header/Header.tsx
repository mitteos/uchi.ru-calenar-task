import React, {useContext} from 'react';
import styled from "styled-components";
import {EventContext} from "App";
import {EventState} from "utils/eventContext";

export const Header = () => {
  const {eventsCollection, setEventsCollection} = useContext(EventContext)

  const handleAddClick = () => {
    const input = prompt("Enter event time: YYYY-MM-DD HH:mm:ss")
    if(!input) return
    const date = new Date(input)
    if (!(date instanceof Date)) {
      alert("Invalid date")
      return
    }
    const event: EventState = {
      id: Date.now(),
      date
    }
    setEventsCollection([...eventsCollection, event])
  }

  return (
      <Container>
        <Title>Interview Calendar</Title>
        <AddButton onClick={handleAddClick}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FF3131">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
          </svg>
        </AddButton>
      </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 42px 45px;
  background: #fff;
`
const Title = styled.h1`
  font-weight: 400;
  font-size: 36px;
  line-height: 42px;
  @media (max-width: 550px) {
    font-size: 30px;
    line-height: normal;
  }
  @media (max-width: 450px) {
    font-size: 24px;
  }
`
const AddButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  svg {
    width: 1.75rem;
    height: 1.75rem;
  }
`
