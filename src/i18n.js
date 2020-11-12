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
            "Music ": "Music ",
            "Play": "Play",
            "Pause": "Pause",
            "Quit": "Quit",
            "Play Again": "Play Again",
            "Victory": "Victory",
            "Draw": "Draw",
            "Defeat": "Defeat",
            "'s": "'s",
            "START": "START",
            "Hello Players": "Hello Players",
            "Players in the room": "Players in the room",
            "Seconds left!": "Seconds left!",
            "Time's up!": "Time's up!",
            "Think faster next round": "Think faster next round",
            "Your answer is correct!": "Your answer is correct!",
            "Congratulations! your score +1": "Congratulations! your score +1",
            "Your answer is wrong": "Your answer is wrong",
            "Nice try, but try harder ;)": "Nice try, but try harder ;)",
            "Setting": "Setting",
            "Setting menu's here": "Setting menu's here",
            "We love Netcentric Architecture XD": "We love Netcentric Architecture XD",
        },
    },
    th: {
        translation: {
            "Welcome to IQ180": "ยินดีต้อนรับสู่เกม IQ 180!",
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
            "Music ": "ดนตรี ",
            "Play": "เล่น",
            "Pause": "หยุด",
            "Quit": "ออก",
            "Play Again": "เล่นใหม่",
            "Victory": "ชนะแล้ว",
            "Draw": "เสมอ",
            "Defeat": "แพ้แล้ว",
            "'s": "ได้",
            "START": "เริ่มเกม",
            "Hello Players": "สวัสดีผู้เล่นทุกคน",
            "Players in the room": "ผู้เล่นที่อยู่ในห้องตอนนี้",
            "Seconds left!": "วินาทีจะหมดเวลา!",
            "Time's up!": "หมดเวลาแล้ว!",
            "Think faster next round": "รอบถัดไปคิดให้เร็วกว่านี้นะ",
            "Your answer is correct!": "คำตอบถูกต้อง!",
            "Congratulations! your score +1": "ยินดีด้วยได้เพิ่มไปอีก 1 คะแนน",
            "Your answer is wrong": "คำตอบผิด",
            "Nice try, but try harder ;)": "พยายามได้ดี แต่พยายามให้มากกว่านี้หน่อยสิ ;)",
            "Result!": "ผลการแข่งขัน!",
            "Setting": "การตั้งค่า",
            "Setting menu's here": "เมนูการตั้งค่าอยู่ตรงนี้",
            "We love Netcentric Architecture XD": "เรารักวิชานี้ ขอ เกรดดีๆให้เราหน่อยนะครับอาจารย์ XD",
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
