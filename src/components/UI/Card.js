import styled from '@emotion/styled'
import React from 'react'

const Card = (props) => {
  const {image, sales, booked, free, id} = props
  return (
    <div>
      <CardWrap>
        <div>
          <p>{id}-й этаж</p>
        </div>
        <Section>
          <Img src={image} />
        </Section>
        <Aside>
          <Redp>Продано:{sales}</Redp>
          <Yellowp>Бронировано:{booked}</Yellowp>
          <Bluep>Свободные:{free}</Bluep>
        </Aside>
      </CardWrap>
    </div>
  )
}

export default Card

const CardWrap = styled('div')`
  width: 100%;
  height: 80%;
  position: relative;
  margin: 0 auto;
  & > :nth-child(1) {
    position: absolute;
    width: 20%;
    height: 20%;
    color: darkgreen;
    top: 10%;
    right: 23%;
    & > p {
      font-size: 2vw;
    }
  }
`
const Img = styled('img')`
  width: 100%;
`
const Section = styled('div')`
  margin: 0 auto;
  width: 100%;
`
const Aside = styled('aside')`
  position: absolute;
  top: 15%;
  right: 15%;
  border-radius: 2px solid;
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  width: 30%;
  height: 16.5%;
  padding: 2%;
  background-color: rgb(239, 238, 238);
`
const Redp = styled('p')`
  font-size: 2vw;
  color: red;
`
const Yellowp = styled('p')`
  font-size: 2vw;
  color: rgb(249, 163, 24);
`
const Bluep = styled('p')`
  font-size: 2vw;
  color: blue;
`
