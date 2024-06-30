import { Button, Container, Desc, Input, InputContainer, Title } from "./style";
import SendIcon from "@mui/icons-material/Send";

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from favourite products.</Desc>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <SendIcon />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
