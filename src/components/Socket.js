import React, { useEffect, useState, useMemo } from 'react';
import io from 'socket.io-client'
import { useHistory } from "react-router-dom";

export const SocketContext = React.createContext({
    allPlayers: [],
    roomCode: "",
    socket: null,
    myUID: "",
    time: 0,
    round: 0,
    currentPlayer: "",
    numbers: [],
    answer: 0

});


function Socket({ children }) {
    const socket = useMemo(() => io("https://netcentric-iq180.herokuapp.com"), []);

    let history = useHistory();

    const [allPlayers, setAllPlayers] = useState([]);
    const [roomCode, setRoomCode] = useState("");
    const [myUID, setMyUID] = useState("")
    const [time, setTime] = useState();
    const [currentPlayer, setCurrentPlayer] = useState("")
    const [round, setRound] = useState(0);
    const [numbers, setNumbers] = useState([]);
    const [answer, setAnswer] = useState();

    // const [joinRoomResult, setJoinRoomResult] = useState({});




    useEffect(() => {
        socket.on("JOIN_ROOM_RESULT", (result) => {
            console.log("joinroomResult: ", result)
            setRoomCode(result.code)
            // setJoinRoomResult(result);
        })//wait for result of joining game from backend.

        socket.on('connect', () => {
            setMyUID(socket.id)
            console.log("myUID: ", myUID)
        })
        //From Showplayer.js
        socket.on("SET_PLAYERS", (players) => {
            console.log("player is: ", players)
            // setAllPlayers(players.map(p => p.name))
            setAllPlayers(players)
            if (allPlayers.length >= 2) console.log("Players exceed 2!")
        })//wait for result of joining game from backend.




        socket.on("SET_CURRENT_STATE", (toState) => {
            console.log(toState)
            switch (toState) {
                case "WAITING":
                    break;
                case "ONGOING":
                    history.push("/game")
                    break;

                case "FINISHED":
                    history.push("/result")
                    break;
                // Game state changed to "FINISHED" -> Display Leaderboard
            }
        })
        console.log(socket);
        socket.on("START_RESULT", (result) => {
            console.log('On start result', result)
            if (result.isOK) {
                console.log("Game is started!")
                history.push('/game')
            } else {
                console.log("Game cannot be started. Please try again later.")
            }
        })

        //from Status.js
        socket.on("SET_REMAINING_TIME", (countdown) => {
            setTime(countdown)
            // console.log("time left", countdown)
        })//wait for result of joining game from backend.
        socket.on("SET_CURRENT_PLAYER", (currentPlayer) => {
            setCurrentPlayer(currentPlayer)
            // console.log(currentPlayer)
        })



        //from Numbers.js
        socket.on("SET_CURRENT_QUESTION", (question) => {
            console.log(question)
            setNumbers(question.numbers);
            setAnswer(question.expectedAnswer);
            setRound(round => round + 1);
        })//wait for result of joining game from backend.




        socket.on("SUBMIT_RESULT", (response) => {
            console.log(response)
        })




        return () => {
            socket.off("SET_PLAYERS")
            socket.off("SET_CURRENT_STATE")
            socket.off("START_RESULT")
        }

    }, [])
    return (
        <div>
            <SocketContext.Provider value={{ allPlayers, roomCode, socket, time, round, currentPlayer, myUID, numbers, answer }}>
                {children}
            </SocketContext.Provider>
        </div>
    )
}
export default Socket
