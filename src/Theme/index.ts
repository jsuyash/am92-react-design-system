import type {} from '@mui/material/themeCssVarsAugmentation'
import {
  CssVarsTheme,
  CssVarsThemeOptions,
  experimental_extendTheme as extendTheme,
  Theme
} from '@mui/material/styles'
import getColorScheme, { ColorScheme } from './getColorScheme'
import getTypography from './getTypography'
import breakpoints from './breakpoints'
import componentOverrides from './componentOverrides'
import dsRules from './rules'
import dsSpacing, { dsSpacingCssVars, SPACE_COEFFICIENT } from './spacing'
import dsElevation from './elevation'
import { PALETTE, FONT_FAMILY_NAME } from '../Constants'
import { DsPalette } from '../Types'

interface colorSchemes {
  light?: any
  dark?: any
}

export default function getTheme(
  palette: DsPalette = PALETTE,
  fontFamilyName: string = FONT_FAMILY_NAME
): Omit<Theme, 'palette'> & CssVarsTheme {
  const { typography, dsTypo } = getTypography(fontFamilyName)

  const colorPalette: DsPalette = { ...PALETTE, ...palette }
  const lightColorScheme: ColorScheme = getColorScheme(colorPalette, 'light')
  const darkColorScheme: ColorScheme = getColorScheme(colorPalette, 'dark')
  let colorSchemes: colorSchemes = {}

  if (lightColorScheme) {
    colorSchemes.light = {
      palette: lightColorScheme.palette,
      ds: {
        color: lightColorScheme.dsColor,
        spacing: dsSpacingCssVars,
        typo: dsTypo,
        rules: dsRules,
        elevation: dsElevation
      }
    }
  }

  if (darkColorScheme) {
    colorSchemes.dark = {
      palette: darkColorScheme.palette,
      ds: {
        color: darkColorScheme.dsColor,
        spacing: dsSpacingCssVars,
        typo: dsTypo,
        rules: dsRules,
        elevation: dsElevation
      }
    }
  }

  const cssVarsThemeOptions: CssVarsThemeOptions = {
    cssVarPrefix: '',
    components: componentOverrides,
    colorSchemes,
    breakpoints,
    typography,
    spacing: (input: number) => input * SPACE_COEFFICIENT
  }

  const theme = extendTheme(cssVarsThemeOptions)
  return theme
}

export { dsSpacing, SPACE_COEFFICIENT }
