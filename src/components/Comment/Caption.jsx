import { Avatar, Flex, Link, Text } from "@chakra-ui/react";
import userProfileStore from "../../store/userProfileStore";
import { timeAgo } from "/path/to/src/utils/Timeago";

const Caption = ({ post }) => {
  const userProfile = userProfileStore((state) => state.userProfile);
  return (
    <Flex gap={4}>
      <Link to={`/${userProfile.username}`}>
        <Avatar src={userProfile?.profilePicURL} />
      </Link>
      <Flex direction={"column"}>
        <Flex gap={2} alignItems={"center"}>
          <Link to={`/${userProfile.username}`}>
            <Text fontWeight={"bold"} fontSize={12}>
              {userProfile?.username}
            </Text>
          </Link>
          <Text fontSize={14}>{post.caption}</Text>
        </Flex>
        <Text fontSize={12} color={"gray"}>
          {timeAgo(post.createdAt)}
        </Text>
      </Flex>
    </Flex>
  );
};

export default Caption;
