import styled from "styled-components";


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.unsplash.com/photo-1506792006437-256b665541e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
 
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
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
background-color: none;
}
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  margin-left: 10px;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Button>LOGIN</Button>
          <Link>FOEGOT PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;