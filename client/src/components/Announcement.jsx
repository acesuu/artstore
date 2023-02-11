import styled from "styled-components"

const Container = styled.div`
    height: 35px;
    background-color: teal;
    color: white;
    font-size: 15px;
    font-weight: bold;
    align-items: center;
    display: flex;
    justify-content: center;
`;

const Announcement = () => {
  return (
    <Container>
        Art pieces to soothe your eyes!!
    </Container>
  )
}

export default Announcement