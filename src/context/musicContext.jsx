"use client";
import {createContext, useState} from "react";

export const MusicContext = createContext();

export function MusicProvider({children}) {
  const [MusicData, setMusicData] = useState({
    title: "",
    artist: "",
  });
  return (
    <MusicContext.Provider value={{MusicData, setMusicData}}>{children}</MusicContext.Provider>
  );
}
