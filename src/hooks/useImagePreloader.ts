import { useEffect } from 'react';

export default function useImagePreloader(imageList: string[]) {
  useEffect(() => {
    imageList.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [imageList]);
}
