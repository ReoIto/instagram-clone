import Post from "./Post";

export default function Posts() {
  const posts = [
    {
      id: "1",
      userName: "user_1",
      userImgPath:
        "https://support.apple.com/content/dam/edam/applecare/images/en_US/psp_content/content-block-md-memoji_2x.png",
      imgPath:
        "https://images.unsplash.com/photo-1651773555309-30fc9c8d2855?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      caption: "This is a caption on a post of user_1",
    },
    {
      id: "2",
      userName: "user_2",
      userImgPath:
        "https://support.apple.com/content/dam/edam/applecare/images/en_US/psp_content/content-block-md-memoji_2x.png",
      imgPath:
        "https://images.unsplash.com/photo-1651740895859-cfb21af2f62a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      caption: "This is a caption on a post of user_2",
    },
  ];

  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          userName={post.userName}
          userImgPath={post.userImgPath}
          postImgPath={post.imgPath}
          caption={post.caption}
        />
      ))}
    </div>
  );
}
