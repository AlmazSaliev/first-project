import styled from '@emotion/styled'
import Card from './UI/Card'
import {Floor} from '../constants'

const ProjectDetail = () => {
  return (
    <WrapperContainer>
      <Container>
        {Floor.map((el) => {
          return (
            <Card
              key={el.id}
              id={el.id}
              image={el.image}
              sales={el.sales}
              booked={el.booked}
              free={el.free}
            />
          )
        })}
      </Container>
    </WrapperContainer>
  )
}
export default ProjectDetail
const WrapperContainer = styled('div')`
  width: 100%;
`
const Container = styled('div')`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 auto;
  margin-top: 100px;
  gap: 15px;
`
