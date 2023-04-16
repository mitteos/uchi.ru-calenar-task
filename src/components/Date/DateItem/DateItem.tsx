import React from 'react';
import styled from "styled-components";

interface DateItemProps {
  isActive: boolean
  week: string
  day: number
}

export const DateItem: React.FC<DateItemProps> = ({isActive, week, day}) => {
  return (
      <Container>
        <DayWeek>{week}</DayWeek>
        <DayContainer isActive={isActive}>
          <DayInner isActive={isActive}>{day}</DayInner>
        </DayContainer>
      </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`
const DayWeek = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  @media (max-width: 450px) {
    line-height: normal;
    font-size: 14px;
  }
`
const DayContainer = styled.div<{isActive?: boolean}>`
  font-style: normal;
  font-weight: 500;
  font-size: 26px;
  line-height: 30px;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50px;
    height: 50px;
    background: #FF3131;
    border-radius: 100%;
    display: ${({isActive}) => isActive ? "block" : "none"};
    @media (max-width: 450px) {
      width: 40px;
      height: 40px;
    }
  }
`
const DayInner = styled.p<{isActive?: boolean}>`
  position: relative;
  z-index: 1;
  color: ${({isActive}) => isActive ? "#fff" : "#000"};
  @media (max-width: 450px) {
    line-height: normal;
    font-size: 20px;
  }
`
