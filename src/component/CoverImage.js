import React, { useEffect, useState, useMemo } from "react"
import "../index.css";

export default function ImageChange() {
  const cacheImage = useMemo(() => 
    [
      "/img/maincovers/adjustedfront.png",
      "/img/maincovers/adjustedtea.png",
      "/img/maincovers/adjustedcoffee2.png"
  ], [])
  const [currentImage, setCurrentImage] = useState(0)
  const intervalTime = 4000

  function setTimer() {
    let nextImage = currentImage + 1
      if (nextImage >= cacheImage.length) {
        nextImage = 0
      }
    setTimeout(() => setCurrentImage(nextImage), intervalTime)
  }

  useEffect(setTimer, [cacheImage, currentImage])

  return (
    <>
        <img
          src={cacheImage[currentImage]}
          alt="changing cover of field of green, tea and coffee"
          className="backgroundcover"/>
          <img src="../img/jqlogo1.png" className="coverlogo" alt="JQ Logo" />
    </>
  )
}