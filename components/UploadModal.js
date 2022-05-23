import { useRecoilState } from "recoil";
import { modalState } from "../atom/modalAtom";
import Modal from "react-modal";

export default function UploadModal() {
  const [open, setOpen] = useRecoilState(modalState);

  function onClickClose() {
    setOpen(false);
  }

  return (
    <div>
      <div>UploadModal</div>
      <Modal
        isOpen={open}
        onRequestClose={onClickClose}
        className="max-w-lg w-[90%] h-[300px] absolute top-56 left-[50%] translate-x-[-50%] bg-white border-2 rounded-md shadow-md outline-none"
      >
        <div className="flex flex-col justify-center items-center h-[100%]">
          <h1>Modal</h1>
        </div>
      </Modal>
    </div>
  );
}
