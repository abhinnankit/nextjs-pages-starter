import { RefObject } from 'react';

export default function preLoadImage(imgSrc: string, ref: RefObject<HTMLElement>) {
  return new Promise<void>((resolve, reject) => {
    const image = new window.Image();
    image.src = imgSrc;
    image.style.display = 'none';
    image.onload = () => {
      ref.current.removeChild(image);
      resolve();
    };
    image.onerror = reject;
    ref.current.appendChild(image);
  });
}

export type NextJsImagePathType = { encodedPath: string; imageName: string; width: string };

export function formNextJsImagePath({ encodedPath, imageName, width }: NextJsImagePathType) {
  const nextJsPrefix = '_next/image?url=';
  return `${nextJsPrefix}${encodedPath}${imageName}&w=${width}&q=75`;
}
