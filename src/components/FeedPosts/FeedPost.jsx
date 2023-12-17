import useGetUserProfileById from "../../hooks/useGetUserProfileById";
import PostFooter from "./PostFooter"
import PostHeader from "./PostHeader";
import { Box, Image } from "@chakra-ui/react";

const FeedPost = ({post}) => {
  const {userProfile} = useGetUserProfileById(post.createdBy);
  return (
    <>
      <PostHeader post={post} creatorProfile={userProfile} />
      <Box my={2} borderRadius={4} overflow={"hidden"}>
        <Image src={post.imageURL} alt="Feed Post Image"  />
      </Box>
      <PostFooter post={post} creatorProfile={userProfile} />
    </>
  )
}

export default FeedPost