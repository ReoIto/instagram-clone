import { useRecoilState } from "recoil";
import { modalState } from "../atom/modalAtom";
import Modal from "react-modal";
import { CameraIcon } from "@heroicons/react/outline";
import { useRef, useState } from "react";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db, storage } from "../firebase";
import { useSession } from "next-auth/react";
import { getDownloadURL, ref, uploadString } from "firebase/storage";

export default function UploadModal() {
  const [open, setOpen] = useRecoilState(modalState);
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const { data: session } = useSession();
  const filePickerRef = useRef(null);
  const fileCaptionRef = useRef(null);

  function addImageToPost(e) {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result);
    };
  }

  function onClickRemoveSelectedFile() {
    setSelectedFile(null);
  }

  function onClickClose() {
    setOpen(false);
    setSelectedFile(null);
  }

  function onClickOpenFinder() {
    filePickerRef.current.click();
  }

  async function uploadPost() {
    if (loading) return;

    setLoading(true);

    // Firestoreに投稿を保存する
    const docRef = await addDoc(collection(db, "posts"), {
      caption: fileCaptionRef.current.value,
      username: session.user.name,
      profileImg: session.user.image,
      timestamp: serverTimestamp(),
    });

    const imageRef = ref(storage, `posts/${docRef.id}/image`);
    await uploadString(imageRef, selectedFile, "data_url").then(
      async (snapshot) => {
        const downloadUrl = await getDownloadURL(imageRef);
        await updateDoc(doc(db, "posts", docRef.id), {
          image: downloadUrl,
        });
      }
    );
    setOpen(false);
    setLoading(false);
    setSelectedFile(null);
  }

  return (
    <div>
      <div>UploadModal</div>
      <Modal
        isOpen={open}
        onRequestClose={onClickClose}
        className="max-w-lg w-[90%] p-6 absolute top-56 left-[50%] translate-x-[-50%] bg-white border-2 rounded-md shadow-md outline-none"
      >
        <div className="flex flex-col justify-center items-center h-[100%]">
          {selectedFile ? (
            <img
              src={selectedFile}
              className=" w-full max-h-[250px] object-cover cursor-pointer"
              onClick={onClickRemoveSelectedFile}
            />
          ) : (
            <CameraIcon
              onClick={onClickOpenFinder}
              className=" cursor-pointer h-14 bg-red-200 p-2 rounded-full border-2 text-red-500"
            />
          )}
          <input
            type="file"
            hidden
            ref={filePickerRef}
            onChange={addImageToPost}
          />
          <input
            type="text"
            placeholder="Please enter your caption..."
            className=" m-4 border-none text-center w-full focus:ring-0"
            ref={fileCaptionRef}
          />
          <button
            disabled={loading || !selectedFile}
            className=" w-full bg-red-600 text-white p-2 shadow-md hover:brightness-125 disabled:bg-gray-200 disabled:cursor-not-allowed disabled:hover:brightness-100"
            onClick={uploadPost}
          >
            Upload Post
          </button>
        </div>
      </Modal>
    </div>
  );
}
