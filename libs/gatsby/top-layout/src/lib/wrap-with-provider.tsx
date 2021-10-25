import { ThemeProvider } from "@mui/material/styles"
import { ThemeComposition } from "@watheia/app.theme.evangelist-theme"
import { theme } from "@watheia/app.theme.theme-options"

export default function wrapWithProvider({ element }) {
  return (
    <ThemeProvider theme={theme}>
      <ThemeComposition>{element}</ThemeComposition>
    </ThemeProvider>
  )
}
