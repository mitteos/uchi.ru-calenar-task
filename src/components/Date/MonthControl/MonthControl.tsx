import React, {useContext, useEffect, useState} from 'react';
import styled from "styled-components";
import {EventContext} from "App";
import {getWeek} from "utils/getWeek";

export const MonthControl: React.FC<{}> = () => {
  const {date, setDateState, dateState} = useContext(EventContext)
  const currentYear = date.getFullYear()
  const [currentMonth, setCurrentMonth] = useState(date.toLocaleString("en", {month: "long"}))

  const handlePrevClick = () => {
    const currentWeek = getWeek(date)
    date.setDate(currentWeek[0].date - 1)
    setDateState(date.getTime())

  }
  const handleNextClick = () => {
    const currentWeek = getWeek(date)
    date.setDate(currentWeek[currentWeek.length - 1].date + 1)
    setDateState(date.getTime())
  }

  useEffect(() => {
    setCurrentMonth(date.toLocaleString("en", {month: "long"}))
  }, [date, dateState])

  return (
      <Container>
        <LeftBtn onClick={handlePrevClick}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"/>
          </svg>
        </LeftBtn>
        <DateContainer>{currentMonth} {currentYear}</DateContainer>
        <RightBtn onClick={handleNextClick}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"/>
          </svg>
        </RightBtn>
      </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 25px;
`
const LeftBtn = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  svg {
    width: 25px;
    stroke: #FF3131;
    stroke-width: 2.5;
  }
`
const RightBtn = styled(LeftBtn)`
  transform: rotate(180deg);
`
const DateContainer = styled.p`
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  @media (max-width: 450px) {
    line-height: normal;
    font-size: 18px;
  }
`
