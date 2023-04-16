import React, {useContext} from 'react';
import styled from "styled-components";
import {EventContext} from "App";

export const ControlBar = () => {

  const {
    date,
    setDateState,
    selectedEvent,
    setSelectedEvent,
    eventsCollection,
    setEventsCollection
  } = useContext(EventContext)

  const handleTodayClick = () => {
    date.setTime(Date.now())
    setDateState(Date.now())
  }

  const handleDeleteClick = () => {
    setEventsCollection(eventsCollection.filter(event => event.id !== selectedEvent?.id))
    setSelectedEvent(null)
  }

  return (
      <Container>
        <TodayBtn onClick={handleTodayClick}>Today</TodayBtn>
        <DeleteBtn
          isActive={!!selectedEvent}
          onClick={handleDeleteClick}
        >Delete</DeleteBtn>
      </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: #F6F6F6;
  padding: 20px 50px;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  max-width: 740px;
  margin: 0 auto;
`
const TodayBtn = styled.button`
  border: none;
  background: none;
  font-size: 26px;
  color: #FF3131;
  cursor: pointer;
`
const DeleteBtn = styled(TodayBtn)<{isActive: boolean}>`
  display: ${({isActive}) => isActive ? "block" : "none"};
`
