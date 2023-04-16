import React, {useContext, useEffect, useState} from 'react';
import styled from "styled-components";
import {EventItem} from "components/Event/EventItem";
import {getWeek} from "utils/getWeek";
import {EventContext} from "App";
import {getTimeCollection} from "utils/getTimeCollection";
import {EventState} from "utils/eventContext";

const timeCollection = getTimeCollection()

export const EventList: React.FC<{}> = () => {
  const {eventsCollection, dateState} = useContext(EventContext)
  const {date} = useContext(EventContext)
  const [currentWeek, setCurrentWeek] = useState(getWeek(date))

  useEffect(() => {
    setCurrentWeek(getWeek(date))
  }, [date, dateState, eventsCollection])

  const handleCheckDay: (e: Date, time: number) => EventState | undefined
      = (date, time) => {
    const currentDate = new Date(date.getFullYear(), date.getMonth(), date.getDate(), time)
    const currentOffsetDate = new Date(currentDate.getTime())
    currentOffsetDate.setMinutes(59)
    currentOffsetDate.setSeconds(59)

    const suitableEvents = eventsCollection.filter(event => {
      const eventDate = event.date.getTime()
      return eventDate >= currentDate.getTime() && eventDate <= currentOffsetDate.getTime();
    })

    return suitableEvents[0]
  }

  return (
      <Container>
        <TimeContainer>
          {timeCollection.map(el =>
            <TimeItem key={el.id}>{el.value}</TimeItem>
          )}
        </TimeContainer>
        <GridContainer>
          <Grid colCount={currentWeek.length}>
            {timeCollection.map(el =>
                currentWeek.map(day =>
                  <EventItem key={day.id} event={handleCheckDay(day.fullDate, el.id)}/>
                )
            )}
          </Grid>
        </GridContainer>
      </Container>
  );
};

const Container =styled.div`
  display: flex;
  flex: auto;
  padding: 300px 0 50px 0;
  gap: 10px;
  @media (max-width: 550px) {
    padding: 280px 0 50px 0;
  }
  @media (max-width: 450px) {
    padding: 270px 0 50px 0;
  }
`
const TimeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 60px;
  grid-gap: 1px;
  margin-top: -11px;
  margin-left: 10px;
`
const TimeItem = styled.div`
  font-weight: 500;
  font-size: 22px;
  line-height: 26px;
  color: #C0C0C0;
  @media (max-width: 450px) {
    font-size: 18px;
  }
`
const GridContainer = styled.div`
  background: #E6E6E6;
  width: 100%;
`
const Grid = styled.div<{colCount: number}>`
  display: grid;
  grid-template-columns: repeat(${({colCount}) => colCount}, 1fr);
  width: ${({colCount}) => 100 / 7 * colCount}%;
  grid-auto-rows: 60px;
  flex: auto;
  padding-top: 1px;
  grid-gap: 1px;
`
