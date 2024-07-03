import { Wrapper, Title, Form, Input, Button, Links } from "./style";

const Login = () => {
  return (
    <>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Button>LOGIN</Button>
          <Links>DO NOT YOU REMEMBER THE PASSWORD?</Links>
          <Links>CREATE A NEW ACCOUNT</Links>
        </Form>
      </Wrapper>
    </>
  );
};

export default Login;
