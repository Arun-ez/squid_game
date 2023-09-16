import { motion } from "framer-motion";
import { DataContext } from "@/providers/DataProvider";
import { VStack, HStack, Button, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { GiWingedEmblem } from "react-icons/gi";
import { useRouter } from "next/router";

const Win = ({ onPlay }) => {

    const { replace } = useRouter();
    const { preference } = useContext(DataContext);

    return (
        <VStack pt={'24vh'} userSelect={'none'}>
            <motion.div animate={{ scale: [10, 1], transition: { duration: 1 } }}>
                <GiWingedEmblem fontSize={40} />
            </motion.div>

            <Text> Congrats </Text>
            <Text fontWeight={500} fontSize={40}> {preference.name} </Text>
            <Text> You won the game </Text>

            <HStack mt={10}>
                <Button onClick={onPlay}> Play again </Button>
                <Button onClick={() => replace('/leaderboard')}> Check Leaderboard </Button>
            </HStack>
        </VStack>
    )
}

export { Win }
