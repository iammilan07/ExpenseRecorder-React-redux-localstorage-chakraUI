import { Container } from "@chakra-ui/react";

interface AppShellProps {
  children: any;
}
const AppShell = ({ children }: AppShellProps) => {
  return (
    <Container
      // border="1px solid white"
      borderRadius="5px"
      maxW="sm"
      bg="gray.900"
      color="gray.100"
      height="100%"
      border-radius="50px"
      box-shadow="20px 20px 60px #d9d900, -20px -20px 60px #ffff00"
    >
      {children}
    </Container>
  );
};

export default AppShell;
