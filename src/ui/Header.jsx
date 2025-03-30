"use client";
import {useContext, useState} from "react";
import Button from "./Button";
import Modal from "./Modal";
import {parseBlob} from "music-metadata-browser";
import {MusicContext} from "@/context/musicContext";
import toast from "react-hot-toast";
import {saveAs} from "file-saver";
import { CloudUpload, Download } from "lucide-react";

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
          <CloudUpload />
          </Button>
          <Button onclick={handleDownload} varient="header">
          <Download />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Header;
