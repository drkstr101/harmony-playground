import classNames from "classnames"
import React from "react"
import { brands } from "@watheia/app.theme.brands"
import { headingMargins } from "@watheia/app.theme.heading-margin-definition"
import { headingFontSize, textFontSize } from "@watheia/app.theme.size-definition"
import { Theme as BaseTheme } from "@watheia/app.theme.theme-provider"
import texts from "./texts.module.scss"

export type ThemeProps = React.HTMLAttributes<HTMLDivElement>

/**
 * Marketing style customizations, added on top of the regular theme.
 * (some of these are already included in the base-ui theme, but they will be separated in the future)
 */
export const EvangelistThemeAddons = classNames(brands, headingFontSize, headingMargins, textFontSize, texts.defaults)

/**
 * @name ThemeProvider
 * @description
 * Applies shared styles to all child components.
 *
 * This includes:
 * - Colors
 * - Headers and paragraphs font-size, margins, etc
 * - Brand font
 * - Shadows
 * - Specific brand related styles
 *
 * @example
 * <Theme>
 *  <Paragraph>I got all the base styles! yippee!</Paragraph>
 * </Theme>
 */

export function Theme(props: ThemeProps) {
  return <BaseTheme {...props} className={classNames(props.className, EvangelistThemeAddons)} />
}
