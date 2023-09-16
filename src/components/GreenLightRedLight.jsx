import { DataContext } from '@/providers/DataProvider';
import { useContext, useEffect, useState } from 'react';
import { Text, Box, VStack, SimpleGrid } from '@chakra-ui/react';
import { GiDaemonSkull } from "react-icons/gi";
import { motion } from 'framer-motion';

import { Win } from '@/components/Win';
import { Lost } from '@/components/Lost';

let timerId;

const GreenLightRedLight = () => {

    const { preference, setPreference } = useContext(DataContext);
    const [timer, setTimer] = useState(preference.difficulty.duration);
    const [clicks, setClicks] = useState(0);
    const [color, setColor] = useState(1);

    /*
    * Gamestatus to be managed in 
    * for 0 - game is running
    * for 1 - won the game
    * for 2 - lost the game 
    */
    const [gameStatus, setGameStatus] = useState(0);

    const pushToLeaderboard = () => {

        if (gameStatus === 0) return;

        const store = JSON.parse(localStorage.getItem('leaderboard') || JSON.stringify([]));

        const info = {
            name: preference.name,
            email: preference.email,
            difficulty: preference.difficulty.label,
            target_clicks: preference.difficulty.clicks,
            finished_in: preference.difficulty.duration - timer,
            duration: preference.difficulty.duration,
            status: gameStatus === 1 ? 'Won' : 'Lost'
        }

        store.push(info);

        localStorage.setItem('leaderboard', JSON.stringify(store));
    }

    const onWin = () => {
        clearInterval(timerId);
        setGameStatus(1);
    }

    const onLose = () => {
        clearInterval(timerId);
        setGameStatus(2);
    }

    const playAgain = () => {
        setPreference(null);
    }

    const boxOnclickHandler = (value) => {

        if (value === 0) {
            setClicks((prev) => prev + 1);
        } else {
            onLose();
        }
    }

    useEffect(() => {

        timerId = setInterval(() => {

            const num = Math.floor(Math.random() * (100 - 0) + 0);
            setColor(num);

            setTimer((prev) => {
                if (prev === 0) {
                    clearInterval(timerId);
                    return 0;
                } else {
                    return prev - 1;
                }
            })

        }, 1000);

        return () => { clearInterval(timerId) }
    }, [])

    useEffect(() => {
        pushToLeaderboard();
    }, [gameStatus])


    useEffect(() => {

        if (!timer && clicks < Number(preference.difficulty.clicks)) {
            onLose()
        }

        if (timer && clicks >= Number(preference.difficulty.clicks)) {
            onWin()
        }

    }, [clicks, timer])


    if (gameStatus === 1) {
        return <Win onPlay={playAgain} />
    }

    if (gameStatus === 2) {
        return <Lost onPlay={playAgain} />
    }

    return (
        <VStack pt={'16vh'}>

            <motion.div animate={{ y: [0, 20, 0], transition: { duration: 2, repeat: Infinity } }}>
                <GiDaemonSkull fontSize={46} />
            </motion.div>

            <SimpleGrid columns={[1, 2, 2, 2]} gap={4} mt={8} w={['90%', '320px', '320px', '320px']}>
                <Text> Clicked : {clicks} </Text>
                <Text> Target : {preference.difficulty.clicks} Clicks </Text>
                <Text> Difficulty : {preference.difficulty.label} </Text>
                <Text> Time Left : {timer}s </Text>
            </SimpleGrid>

            <Box
                mt={4}
                borderRadius={20}
                cursor={'pointer'}
                h={['90vw', '330px', '330px', '330px']} w={['90%', '330px', '330px', '330px']}
                bg={color % 2 === 0 ? 'green' : 'red'}
                onClick={() => boxOnclickHandler(color % 2)}
            >

            </Box>
        </VStack>
    )
}

export { GreenLightRedLight }



