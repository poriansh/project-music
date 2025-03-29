"use client";
import {useContext, useState} from "react";
import Button from "./Button";
import Modal from "./Modal";
import {parseBlob} from "music-metadata-browser";
import {MusicContext} from "@/context/musicContext";
import toast from "react-hot-toast";
import {saveAs} from "file-saver";

function Header() {
  const [isopen, setisopen] = useState(false);
  const {MusicData, setMusicData} = useContext(MusicContext);
  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    console.log(file);
    if (!file || file.type !== "audio/mpeg") {
      toast.error("Just upload the mp3 file");
      setMusicData({
        title: "",
        artist: "",
      });
      return;
    }

    try {
      const dataMusic = await parseBlob(file); // استخراج اطلاعات آهنگ
      setMusicData({
        title: dataMusic.common.title || file.name,
        artist: dataMusic.common.artist || "Unknown Artist",
      });
      setisopen(false); // بستن مدال بعد از آپلود
    } catch (error) {
      toast.error("Error processing the file");
    }
  };
  const handleDownload = () => {
    // ساختن فایل جدید با متادیتای به‌روز شده
    const newFileName = `${MusicData.title || "Unknown Title"} - ${
      MusicData.artist || "Unknown Artist"
    }.mp3`;

    const fileData = new Blob([MusicData], {type: "audio/mpeg"});

    saveAs(fileData, newFileName);
  };
  return (
    <div className="shadow-[0px_2px_5px_rgba(0,0,0,0.2)] py-2">
      <div className="container ">
        <div className="flex items-center justify-between">
          <Modal isopen={isopen} setisopen={setisopen} title="upload music">
            <label
              htmlFor="fileUpload"
              className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg cursor-pointer hover:bg-blue-600 transition"
            >
              File Upload
            </label>
            <input type="file" id="fileUpload" className="hidden" onChange={handleFileChange} />
          </Modal>
          <Button onclick={() => setisopen(true)} varient="header">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15"
              />
            </svg>
          </Button>
          <Button onclick={handleDownload} varient="header">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
              />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Header;
