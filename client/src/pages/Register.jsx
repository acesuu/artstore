import styled from "styled-components";
import Navbar from '../components/Navbar'
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("photo-1567095716798-1d95d8f4c479.avif")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
padding: 5px;
font-size: 15px;
border-color: teal;
width: 50%;
height: 70%;
background-color: teal;
margin-bottom: 20px;
cursor: pointer;
color: white;
border-radius: 10px;
&:hover,
&:focus {
border-color: none;
background-color: white;
color: black;}
margin-top: 30px;
`;

const Register = () => {
  return (
    <div>
      <Navbar/>
       <Container>
      
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
    </div>
    
   
  );
};

export default Register;