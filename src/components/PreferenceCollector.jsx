import Link from "next/link";
import { DataContext } from "@/providers/DataProvider";
import { Input, Text, Button, Select, VStack, HStack } from "@chakra-ui/react"
import { useContext } from "react";
import { GiDreadSkull } from "react-icons/gi";
import { BsArrowRightShort } from "react-icons/bs";

const PreferenceCollector = () => {

    const { setPreference } = useContext(DataContext);

    const difficulties = [
        { label: 'Easy', clicks: 10, duration: 40 },
        { label: 'Medium', clicks: 15, duration: 40 },
        { label: 'Hard', clicks: 25, duration: 40 },
    ]

    const onSubmit = (event) => {
        event.preventDefault();
        const data = Object.fromEntries(new FormData(event.target));
        data.difficulty = difficulties.find(({ label }) => label === data.difficulty);
        setPreference(data);
    }

    return (
        <VStack alignItems={'center'} userSelect={'none'} pt={'18vh'}>
            <form onSubmit={onSubmit}>
                <VStack w={['94vw', 400, 400, 400]} p={8} gap={4} borderRadius={20} boxShadow={'rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em'}>
                    <GiDreadSkull fontSize={40} />
                    <Text py={4} fontWeight={600} fontSize={[16, 20, 20, 20]}> Welcome to Squid Game </Text>
                    <Input type="text" name="name" placeholder="Name" required />
                    <Input type="email" name="email" placeholder="Email" required />
                    <Input type="number" name="mobile" placeholder="Mobile Number" required />
                    <Select name="difficulty" required >
                        <option value={''}> Select Difficulty </option>
                        {difficulties.map(({ label }, index) => {
                            return (
                                <option value={label} key={index}> {label} </option>
                            )
                        })}
                    </Select>

                    <Button w={'100%'} type="submit"> Start Game </Button>

                    <HStack px={2} pt={4} fontSize={13} gap={0}>
                        <Text > <Link href={'/leaderboard'}> Go to leaderboard </Link> </Text>
                        <BsArrowRightShort fontSize={18} />
                    </HStack>
                </VStack>
            </form>
        </VStack>
    )
}

export { PreferenceCollector }
