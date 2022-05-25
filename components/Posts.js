import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import Post from "./Post";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    // Firebaseから全Postsを取得する
    onSnapshot(
      query(collection(db, "posts"), orderBy("timestamp", "desc")),
      (snapshot) => {
        setPosts(snapshot.docs);
      }
    );
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          userName={post.data().username}
          userImgPath={post.data().profileImg}
          postImgPath={post.data().image}
          caption={post.data().caption}
        />
      ))}
    </div>
  );
}
