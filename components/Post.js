import { username } from "minifaker";
import { DotsHorizontalIcon } from "@heroicons/react/solid";

export default function Post({
  id,
  userName,
  userImgPath,
  postImgPath,
  caption,
}) {
  return (
    <div className="bg-white my-7 border rounded-md">
      {/* Post Header */}
      <div className="flex items-center p-5">
        <img
          className="h-12 rounded-full object-cover border p-1 mr-3"
          src={userImgPath}
          alt={userName}
        />
        <p className="font-bold flex-1">{userName}</p>
        <DotsHorizontalIcon className="h-5 cursor-pointer" />
      </div>

      {/* Post Image */}
      <img className="object-cover w-full" src={postImgPath} />
    </div>
  );
}

// <Post
//   key={post.id}
//   id={post.id}
//   userName={post.userName}
//   userImgPath={post.userImgPath}
//   postImgPath={post.imgPath}
//   caption={post.caption}
// />
