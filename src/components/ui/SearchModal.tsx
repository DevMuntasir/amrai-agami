"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/causes?search=${encodeURIComponent(query.trim())}`);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 transition-all duration-300">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-6 md:p-8">
        <button
          onClick={onClose}
          aria-label="Close search modal"
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 text-2xl font-bold p-2"
        >
          &times;
        </button>
        <h3 className="text-xl font-bold text-gray-900 mb-4">Search Amrai Agami</h3>
        <form onSubmit={handleSubmit} className="flex items-center gap-3">
          <input
            type="text"
            placeholder="Search causes, events, stories..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 text-gray-800"
            autoFocus
          />
          <button
            type="submit"
            className="btn--primary px-6 py-3 bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold rounded-xl transition shadow"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};
