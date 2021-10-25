import { IconFont } from "@watheia/app.theme.fonts.icons-font"
import { Roboto } from "@watheia/app.theme.fonts.roboto"
import React from "react"
import { Theme, ThemeProps } from "./theme-provider"

export function ThemeComposition(props: ThemeProps) {
  return (
    <Theme {...props}>
      <IconFont query="eo46cx" />
      <Roboto />
      {props.children}
    </Theme>
  )
}
