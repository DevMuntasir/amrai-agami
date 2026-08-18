"use client";

import React from "react";

interface VideoModalProps {
  isOpen: boolean;
  videoUrl: string;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, videoUrl, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 transition-all">
      <div className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
        <button
          onClick={onClose}
          aria-label="Close video player"
          className="absolute top-3 right-4 z-10 text-white hover:text-amber-400 text-3xl font-bold p-2 bg-black/50 rounded-full"
        >
          &times;
        </button>
        <div className="relative pt-[56.25%] w-full">
          <iframe
            src={videoUrl || "https://www.youtube.com/embed/dQw4w9WgXcQ"}
            title="Video Player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full border-0"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
