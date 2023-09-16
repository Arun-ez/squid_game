import { VStack, HStack, Button, Text, TableContainer, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react"
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const leaderboard = () => {

    const { replace } = useRouter();
    const [data, setData] = useState([]);

    useEffect(() => {

        const store = localStorage.getItem('leaderboard');

        if (store) {
            setData(JSON.parse(store).sort((a, b) => {
                return a.finished_in - b.finished_in;
            }));
        } else {
            setData([]);
        }

    }, [])

    return (
        <VStack userSelect={'none'}>

            <HStack w={['100%', '100%', '100%', '90%']} px={4} gap={8}>
                <Text fontSize={30} py={6}> Leaderboard </Text>
                <Button w={100} onClick={() => replace('/')}> Play </Button>
            </HStack>


            <TableContainer w={['100%', '100%', '100%', '90%']} minH={'89vh'}>
                <Table whiteSpace={'nowrap'}>
                    <Thead>
                        <Tr>
                            <Th> Name </Th>
                            <Th> Email </Th>
                            <Th> Difficulty </Th>
                            <Th> Target Clicks </Th>
                            <Th> Status </Th>
                            <Th> Duration </Th>
                            <Th> Finished In </Th>
                        </Tr>
                    </Thead>

                    <Tbody>
                        {data.map(({ name, email, difficulty, target_clicks, status, duration, finished_in }, idx) => {
                            return (
                                <Tr key={idx}>
                                    <Td> {name} </Td>
                                    <Td> {email} </Td>
                                    <Td> {difficulty} </Td>
                                    <Td> {target_clicks} </Td>
                                    <Td color={status === 'Won' ? 'green.300' : 'red.300'} > {status} </Td>
                                    <Td> {duration} Seconds </Td>
                                    <Td> {finished_in} Seconds </Td>
                                </Tr>
                            )
                        })}
                    </Tbody>
                </Table>
            </TableContainer>
        </VStack>
    )
}

export default leaderboard; 
