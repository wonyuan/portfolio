import { Center, Stack, Title, Text, Button } from "@mantine/core";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Center style={{ minHeight: "80vh" }}>
      <Stack align="center" spacing="md">
        <Title order={1}>hey...</Title>
        <Text size="lg" weight={500}>
          you're on a page that doesn't exist!
        </Text>
        <Button variant="outline" onClick={() => navigate("/")}>
          TAKE ME HOME
        </Button>
      </Stack>
    </Center>
  );
};

export default NotFound;