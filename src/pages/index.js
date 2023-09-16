import { DataContext } from "@/providers/DataProvider";
import { useContext } from "react";

import { Box } from "@chakra-ui/react";
import { PreferenceCollector } from "@/components/PreferenceCollector";
import { GreenLightRedLight } from "@/components/GreenLightRedLight";

const home = () => {

  const { preference } = useContext(DataContext);

  return preference ? (
    <GreenLightRedLight />
  ) : (
    <PreferenceCollector />
  )
}


export default home;