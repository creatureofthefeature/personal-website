import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"

const customConfig = defineConfig({
  globalCss: {
    body: {
      bg: "bg.page", // Reference a semantic token
      color: "fg.default",
    },
  },
   theme: {
    // Use semantic tokens to handle light and dark mode colors
    semanticTokens: {
      colors: {
        "bg.page": {
          value: { _light: "#f5e2b9", _dark: "#14141e" }
        }
      }
    }
  }
})

const system = createSystem(defaultConfig, customConfig)

export default system