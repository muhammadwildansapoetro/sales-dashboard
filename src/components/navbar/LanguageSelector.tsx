"use client";

import Image from "next/image";
import { ILanguage, languageOptions } from "./language";
import { useState } from "react";

export default function LanguageSelector() {
  const [selectedLanguage, setSelectedLanguage] = useState<ILanguage>(
    languageOptions[1],
  );

  const handleChangeLanguage = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const selected = languageOptions.find(
      (lang) => lang.value === event.target.value,
    );
    if (selected) setSelectedLanguage(selected);
  };

  return (
    <div className="relative">
      <div className="flex items-center gap-2 rounded-lg p-2">
        <div className="h-6 w-6 overflow-hidden rounded-full border border-gray-300">
          <Image
            src={selectedLanguage.flag}
            alt={selectedLanguage.label}
            width={100}
            height={100}
            className="h-full w-full object-cover"
          />
        </div>

        <select
          value={selectedLanguage.value}
          onChange={handleChangeLanguage}
          className="cursor-pointer border-none bg-transparent font-medium text-gray-700 outline-none focus:ring-0"
        >
          {languageOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
