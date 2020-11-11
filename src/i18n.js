import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
    en: {
        translation: {
            "Welcome to IQ180": "Welcome to React and react-i18next",
            "Please tell us your name": "Please tell us your name",
        },
    },
    th: {
        translation: {
            "Welcome to IQ180": "ยินดีต้อนรับสู่เกม IQ180",
            "Please tell us your name": "โปรดใส่ชื่อของคุณ",
        },
    },
};

i18n.use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "en",

        keySeparator: false, // we do not use keys in form messages.welcome

        interpolation: {
            escapeValue: false, // react already safes from xss
        },
    });

export default i18n;
