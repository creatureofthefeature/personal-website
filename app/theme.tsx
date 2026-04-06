import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"
import { M_PLUS_Rounded_1c } from "next/font/google";
import { useColorModeValue } from "../components/ui/color-mode";

const customConfig = defineConfig({
  globalCss: {
    theme: {
    },


  },
})


// export const mPlusRounded1c = M_PLUS_Rounded_1c({ 
//   weight: "700"
// });

const system = createSystem(defaultConfig, customConfig)

export default system