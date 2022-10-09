import React from 'react'
import styled from '@emotion/styled'
import barakat from '../assets/images/logo.png'
import Button from './UI/Button'
const Header = () => {
  return (
    <HeaderWrapper>
      <InnerWrapper>
        <Img src={barakat} alt="photo" />
        <Button variant="contained">Выйти</Button>
      </InnerWrapper>
    </HeaderWrapper>
  )
}

export default Header

const HeaderWrapper = styled('div')`
  background: #0b363c;
  position: fixed;
  top: 0;
  z-index: 9;
  height: 89px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Img = styled('img')`
  width: 145.5px;
  height: 55px;
`
const InnerWrapper = styled('div')`
  display: flex;
  justify-content: space-between;
  width: 80%;
`
