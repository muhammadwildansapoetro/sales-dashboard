export const languageOptions = [
  {
    value: "en",
    label: "Eng (US)",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/2880px-Flag_of_the_United_Kingdom_%281-2%29.svg.png",
  },
  {
    value: "id",
    label: "Ind (ID)",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Indonesia.svg/2560px-Flag_of_Indonesia.svg.png",
  },
];

export interface LanguageSelectorProps {
  selectedLanguage: {
    value: string;
    label: string;
    flag: string;
  };
  setSelectedLanguage: (language: {
    value: string;
    label: string;
    flag: string;
  }) => void;
}
