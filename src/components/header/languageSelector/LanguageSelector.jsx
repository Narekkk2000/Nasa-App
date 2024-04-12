import styles from "./language-selector.module.css";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", language: "Eng" },
  { code: "ru", language: "Ru" },
  { code: "arm", language: "Arm" },
];
const LngSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }
  return (
    <div className={styles.lng_btns_wrapper}>
      {languages.map((lng) => {
        return (
          <button
            className={
              lng.code === i18n.language ? styles.selected : styles.default
            }
            key={lng.code}
            onClick={() => changeLanguage(lng.code)}
          >
            {lng.language}
          </button>
        );
      })}
    </div>
  );
};

export default LngSelector;
