import React, {createContext, useState} from 'react';
import styled from "styled-components";
import {EventState} from "utils/eventContext";
import {ControlBar, Header} from "components/Layout";
import {SelectDate} from "components/Date";
import {EventList} from "components/Event";

const date = new Date()

type EventContextType = {
  date: Date,
  dateState: number,
  setDateState: React.Dispatch<React.SetStateAction<number>>,
  eventsCollection: EventState[],
  setEventsCollection: React.Dispatch<React.SetStateAction<EventState[]>>,
  selectedEvent: EventState | null,
  setSelectedEvent: React.Dispatch<React.SetStateAction<EventState | null>>
}

const EventContextState = {
  date: date,
  dateState: Date.now(),
  setDateState: () => {},
  eventsCollection: [],
  setEventsCollection: () => {},
  selectedEvent: null,
  setSelectedEvent: () => {}
}

export const EventContext = createContext<EventContextType>(EventContextState)

export const App: React.FC<{}> = () => {

  const [dateState, setDateState] = useState(Date.now())
  const [eventsCollection, setEventsCollection] = useState<EventState[]>([])
  const [selectedEvent, setSelectedEvent] = useState<EventState | null>(null)

  return (
      <EventContext.Provider value={
        {
          date,
          dateState,
          setDateState,
          eventsCollection,
          setEventsCollection,
          selectedEvent,
          setSelectedEvent
        }
      }>
        <Container>
          <HeaderContainer>
            <Header />
            <SelectDate />
          </HeaderContainer>
          <EventList />
          <ControlBar />
        </Container>
      </EventContext.Provider>
  );
};

const Container = styled.div`
  max-width: 740px;
  margin: 0 auto;
  background: #fff;
`
const HeaderContainer = styled.div`
  max-width: 740px;
  margin: 0 auto;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  z-index: 10;
`
