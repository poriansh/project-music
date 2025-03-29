"use client";

import { MusicContext } from "@/context/musicContext";
import Textfielde from "@/ui/Textfielde";
import { useContext } from "react";


export default function FormMusic() {
  const {MusicData, setMusicData} = useContext(MusicContext);
  const handleChange = (e) => {
    const {name, value} = e.target;
    setMusicData((prevData) => ({
      ...prevData,
      [name]: value, // به‌روزرسانی فیلدهای title و artist
    }));
  };
  return (
    <div className="container p-2 mb-4">
      <form className="bg-white rounded-2xl p-4 w-full space-y-3">
        <Textfielde label="Title" onChange={handleChange} name="title" value={MusicData.title} />
        <Textfielde label="Artist" onChange={handleChange} name="artist" value={MusicData.artist} />
      </form>
    </div>
  );
}
