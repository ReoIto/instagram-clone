import Post from "./Post";

export default function Posts() {
  const posts = [
    {
      id: "1",
      userName: "user_1",
      userImg:
        "https://support.apple.com/content/dam/edam/applecare/images/en_US/psp_content/content-block-md-memoji_2x.png",
      img: "https://unsplash.com/photos/Qg1TnRL1f6M",
      caption: "This is a caption on a post of user_1",
    },
    {
      id: "2",
      userName: "user_2",
      userImg:
        "https://support.apple.com/content/dam/edam/applecare/images/en_US/psp_content/content-block-md-memoji_2x.png",
      img: "https://unsplash.com/photos/Fv1xEBeAh1o",
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
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}
