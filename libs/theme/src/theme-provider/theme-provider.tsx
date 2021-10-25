import classNames from "classnames"
import React from "react"
import { brands } from "@watheia/app.theme.brand-definition"
import { primaryPalette } from "@watheia/app.theme.color-definition"
import { bookFont } from "@watheia/app.theme.fonts.book"
import { headingMargins } from "@watheia/app.theme.heading-margin-definition"
import { shadowTheme } from "@watheia/app.theme.shadow-definition"
import { headingFontSize, textFontSize } from "@watheia/app.theme.size-definition"
import texts from "./texts.module.scss"

export type ThemeProps = React.HTMLAttributes<HTMLDivElement>
/**
 * @name ThemeProvider
 * @description
 * Applies shared styles to all child components.
 *
 * @example
 * <Theme>
 *  <Paragraph>I got all the base styles! yippee!</Paragraph>
 * </Theme>
 */

export function Theme(props: ThemeProps) {
  return (
    <div
      {...props}
      className={classNames(
        headingFontSize,
        textFontSize,
        bookFont,
        shadowTheme,
        primaryPalette,
        brands,
        headingMargins,
        texts.defaults,
        props.className
      )}
    ></div>
  )
}
