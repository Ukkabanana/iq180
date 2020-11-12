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
            "Player name": "Player name",
            "Please enter room code": "Player name",
            "Join": "Join",
            "Round": "Round",
            "Scoreboard": "Scoreboard",
            "It's": "It's",
            "'s Turn!": "'s Turn!", 
            "Your answer": "Your answer",
            "Enter": "Enter",
            "Music": "Music",
            "Play": "Play",
            "Pause": "Pause",   
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
            "Player name": "ชื่อผู้เล่น",
            "Please enter room code": "โปรดใส่รหัสห้อง",
            "Join": "เข้าห้อง",
            "Round": "รอบที่",
            "Scoreboard": "ตารางคะแนน",
            "It's": "ตอนนี้ตาของ",
            "'s Turn!": "",
            "Your answer": "คำตอบของคุณ",
            "Enter": "ส่งคำตอบ",
            "Music": "ดนตรี",
            "Play": "เล่น",
            "Pause": "หยุด",
            "Seconds left!": "วินาทีจะหมดเวลา"
        },
    },
};

i18n.use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "en",
        fallbackLng: 'en',
        keySeparator: false, // we do not use keys in form messages.welcome

        interpolation: {
            escapeValue: false, // react already safes from xss
        },
    });

export default i18n;
