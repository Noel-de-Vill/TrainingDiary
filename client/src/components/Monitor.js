import React from "react";
import styled from "styled-components";
import {observer} from "mobx-react-lite";

const DivWrapper = styled('div')`
  display: flex;
  justify-content: space-between;
  background-color: #1E1F21;
	color: #DCDDDD;
	padding: 16px;
	background-color: rgba(0,0,0,0.7);
`;

const TextWrapper = styled('span')`
  font-size: 32px;
`;

const TitleWrapper = styled(TextWrapper)`
  font-weight: bold;
  margin-right: 8px;
`;

const ButtonsWrapper = styled('div')`
  display: flex;
  align-items: center;
`;

const ButtonWrapper = styled('button')`
  border: unset;
	height: 30px;
	margin-right: 2px;
	border-radius: 4px;
	color: #E6E6E6;
	outline: unset;
	cursor:pointer;
	background-color: rgba(0,0,0,0.8);
`;

const TodayButton = styled(ButtonWrapper)`
  padding-right: 16px;
	padding-left: 16px;
	font-weight: bold;
`;


const Monitor = observer(({today,prevHandler,todayHandler,nextHandler}) => {
    return (
        <DivWrapper>
            <div>
                <TitleWrapper>{today.format('MMMM')}</TitleWrapper>
                <TextWrapper>{today.format('YYYY')}</TextWrapper>
            </div>
            <ButtonsWrapper>
                <ButtonWrapper onClick={prevHandler}> &lt; </ButtonWrapper>
                <TodayButton onClick={todayHandler}>Today</TodayButton>
                <ButtonWrapper onClick={nextHandler}> &gt; </ButtonWrapper>
            </ButtonsWrapper>
        </DivWrapper>

    );
});

export default Monitor;