import { useState, useEffect } from "react";

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    // Gọi ngay lần đầu để có kích thước ban đầu
    handleResize();

    // Dọn dẹp event listener khi component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Mảng rỗng đảm bảo effect chỉ chạy một lần lúc mount và unmount

  return windowSize;
}

export default useWindowSize;
