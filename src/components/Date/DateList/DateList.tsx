import React, {useContext, useEffect, useState} from 'react';
import styled from "styled-components";
import {DateItem} from "components/Date/DateItem";
import {getWeek} from "utils/getWeek";
import {EventContext} from "App";

export const DateList: React.FC<{}> = () => {
  const {date, dateState} = useContext(EventContext)
  const [currentWeek, setCurrentWeek] = useState(getWeek(date))
  const currentDate = new Date()
  const currentDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()).getTime()

  useEffect(() => {
    setCurrentWeek(getWeek(date))
  }, [dateState])


  return (
      <Container isShort={currentWeek.length < 7}>
        {currentWeek.map(el =>
          <DateItem key={el.id} isActive={currentDay === el.fullDate.getTime()} week={el.day} day={el.date} />
        )}
      </Container>
  );
};

const Container = styled.div<{isShort: boolean}>`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin: 0 0 20px;
`
