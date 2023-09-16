import { motion } from "framer-motion";
import { VStack, HStack, Button, Text } from "@chakra-ui/react";
import { GiDaemonSkull } from "react-icons/gi";
import { useRouter } from "next/router";

const Lost = ({ onPlay }) => {

    const { replace } = useRouter();

    return (
        <VStack pt={'24vh'} userSelect={'none'}>
            <motion.div animate={{ y: [0, 20, 0], transition: { duration: 2, repeat: Infinity } }}>
                <GiDaemonSkull fontSize={40} />
            </motion.div>

            <Text mt={5}> You lost the game </Text>

            <HStack mt={10}>
                <Button onClick={onPlay}> Play again </Button>
                <Button onClick={() => replace('/leaderboard')}> Check Leaderboard </Button>
            </HStack>
        </VStack>
    )
}

export { Lost }
