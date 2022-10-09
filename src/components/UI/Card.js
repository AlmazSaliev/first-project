import styled from '@emotion/styled'
import React from 'react'

const Card = (props) => {
  const {image, floor, sales, booked, free} = props
  return (
    <div>
      <Total>{floor}-й этаж</Total>
      <CardWrap>
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
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Img = styled('img')`
  width: 70%;
`
const Section = styled('div')`
  margin: 0 0 0 0 auto;
  width: 50%;
`
const Aside = styled('aside')`
  border-radius: 2px solid;
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  width: 30%;
  height: 30%;
  padding: 20px;
`
const Redp = styled('p')`
  font-size: 24px;
  color: red;
`
const Yellowp = styled('p')`
  font-size: 24px;
  color: yellow;
`
const Bluep = styled('p')`
  font-size: 24px;
  color: blue;
`

const Total = styled('p')`
  font-size: 26px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  margin-bottom: 20px;
`
