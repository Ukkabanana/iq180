import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
    en: {
        translation: {
            "Welcome to IQ180": "Welcome to IQ 180",
            "Please tell us your name": "Please tell us your name",
            "Change Language": "Change Language",
            "Join game": "Join game",
            "Create game": "Create game",
            "Room code": "Room code",
            "There's": "",
            "Seconds left!": "Seconds left!",    
        },
    },
    th: {
        translation: {
            "Welcome to IQ180": "ยินดีต้อนรับสู่เกม IQ 180",
            "Please tell us your name": "โปรดใส่ชื่อของคุณ",
            "Change Language": "เปลี่ยนภาษา",
            "Join game": "เข้าร่วมห้อง",
            "Create game": "สร้างห้อง",
            "Room code": "รหัสห้อง",
            "There's": "เหลือเวลาอีก ",
            "Seconds left!": "วินาที!"
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
