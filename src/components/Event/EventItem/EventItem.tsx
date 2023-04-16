import React, {useContext} from 'react';
import styled from "styled-components";
import {EventState} from "utils/eventContext";
import {EventContext} from "App";

interface EventItemProps {
  event?: EventState
}

export const EventItem: React.FC<EventItemProps> = ({event}) => {

  const {setSelectedEvent, selectedEvent} = useContext(EventContext)

  const handleEventClick = () => {
    setSelectedEvent(!!event && selectedEvent?.id !== event.id ? event : null)
  }

  return (
      <Container
        isActive={!!event}
        isSelected={selectedEvent?.id === event?.id}
        onClick={handleEventClick}
      >
      </Container>
  );
};

const Container = styled.div<{isActive: boolean; isSelected: boolean}>`
  width: 100%;
  background: #fff;
  cursor: ${({isActive}) => isActive ? "pointer" : "auto"};
  position: relative;
  &::after {
    content: "";
    position: absolute;
    width: 95%;
    height: 95%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: ${({isSelected}) => isSelected ? "#B3B7FF" : "#EBECFF"};
    transition: all .3s ease;
    visibility: ${({isActive}) => isActive ? "visible" : "hidden"};
    opacity: ${({isActive}) => isActive ? "1" : "0"};
  }
`
