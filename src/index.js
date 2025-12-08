import messages_en from "./translations/en.json";
import flatten from "flat";

const DEFAULT_CONFIG = {
  // 👇 override existing English translations with our custom ones
  translations: [{ key: "en", messages: flatten(messages_en) }],
};

export const LanguageEnTasafModule = (cfg) => {
  return { ...DEFAULT_CONFIG, ...cfg };
};

export default LanguageEnTasafModule;
