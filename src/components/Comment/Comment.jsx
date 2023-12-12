import { Avatar, Flex, Text } from "@chakra-ui/react";

const Comment = ({ createdAt, username, profilePic, text }) => {
  return (
    <Flex>
      <Avatar src={profilePic} name={username} />
      <Flex direction={"column"}>
        <Flex gap={2}>
          <Text fontWeight={"bold"} fontSize={12}>
            {username}
          </Text>
          <Text fontSize={14}>{text}</Text>
        </Flex>
        <Text fontSize={14}>{createdAt}</Text>
      </Flex>
    </Flex>
  );
};

export default Comment;
