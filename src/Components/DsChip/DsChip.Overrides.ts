import { CSSInterpolation } from '@mui/system'
import STATE_STYLES from '../../Theme/STATE_STYLES'
import { DsChipProps } from './DsChip.Types'

export const DsChipOverrides = {
  MuiChip: {
    variants: [
      {
        props: { 'ds-variant': 'chip' } as Partial<DsChipProps>,
        style: {
          border: 'none',
          borderRadius: 'var(--ds-spacing-quickFreeze)',
          paddingLeft: 'var(--ds-spacing-glacial)',
          paddingRight: 'var(--ds-spacing-glacial)',
          height: '20px',
          '.MuiChip-icon': {
            fontSize: 'var(--ds-typo-fontSizeIceAge)',
            marginRight: 'var(--ds-spacing-quickFreeze)',
            marginLeft: 'var(--ds-spacing-zero)',
            color: 'inherit'
          },
          '> .MuiChip-label': {
            paddingLeft: 'var(--ds-spacing-zero)',
            paddingRight: 'var(--ds-spacing-zero)'
          }
        } as CSSInterpolation
      },
      {
        props: { 'ds-variant': 'chip', type: 'status' } as Partial<DsChipProps>,
        style: {
          fontWeight: 'var(--ds-typo-supportRegularMetadata-fontWeight)',
          fontSize: 'var(--ds-typo-supportRegularMetadata-fontSize)',
          lineHeight: 'var(--ds-typo-supportRegularMetadata-lineHeight)',
          letterSpacing: 'var(--ds-typo-supportRegularMetadata-letterSpacing)',
          // textTransform: 'var(--ds-typo-supportRegularMetadata-textTransform)',
          paddingTop: 'var(--ds-spacing-quickFreeze)',
          paddingBottom: 'var(--ds-spacing-quickFreeze)',
          backgroundColor: 'var(--ds-color-supportTypical)',
          color: 'var(--ds-color-typoOnSurface)'
        } as CSSInterpolation
      },
      {
        props: {
          'ds-variant': 'chip',
          type: 'status',
          color: 'success'
        } as Partial<DsChipProps>,
        style: {
          backgroundColor: 'var(--ds-color-supportPositive)'
        } as CSSInterpolation
      },
      {
        props: {
          'ds-variant': 'chip',
          type: 'status',
          color: 'warning'
        } as Partial<DsChipProps>,
        style: {
          backgroundColor: 'var(--ds-color-supportWarning)'
        } as CSSInterpolation
      },
      {
        props: {
          'ds-variant': 'chip',
          type: 'status',
          color: 'error'
        } as Partial<DsChipProps>,
        style: {
          backgroundColor: 'var(--ds-color-supportNegative)'
        } as CSSInterpolation
      },
      {
        props: {
          'ds-variant': 'chip',
          type: 'status',
          color: 'info'
        } as Partial<DsChipProps>,
        style: {
          backgroundColor: 'var(--ds-color-neutral1)',
          color: 'var(--ds-color-typoPrimary)'
        } as CSSInterpolation
      },
      {
        props: { 'ds-variant': 'chip', type: 'nudge' } as Partial<DsChipProps>,
        style: {
          fontWeight: 'var(--ds-typo-supportRegularInfo-fontWeight)',
          fontSize: 'var(--ds-typo-supportRegularInfo-fontSize)',
          lineHeight: 'var(--ds-typo-supportRegularInfo-lineHeight)',
          letterSpacing: 'var(--ds-typo-supportRegularInfo-letterSpacing)',
          // textTransform: 'var(--ds-typo-supportRegularInfo-textTransform)',
          paddingTop: 'var(--ds-spacing-deepFreeze)',
          paddingBottom: 'var(--ds-spacing-deepFreeze)',
          backgroundColor: 'var(--ds-color-supportTypicalNeutral)',
          color: 'var(--ds-color-supportTypical)'
        } as CSSInterpolation
      },
      {
        props: {
          'ds-variant': 'chip',
          type: 'nudge',
          color: 'success'
        } as Partial<DsChipProps>,
        style: {
          backgroundColor: 'var(--ds-color-supportPositiveNeutral)',
          color: 'var(--ds-color-supportPositive)'
        } as CSSInterpolation
      },
      {
        props: {
          'ds-variant': 'chip',
          type: 'nudge',
          color: 'warning'
        } as Partial<DsChipProps>,
        style: {
          backgroundColor: 'var(--ds-color-supportWarningNeutral)',
          color: 'var(--ds-color-supportWarning)'
        } as CSSInterpolation
      },
      {
        props: {
          'ds-variant': 'chip',
          type: 'nudge',
          color: 'error'
        } as Partial<DsChipProps>,
        style: {
          backgroundColor: 'var(--ds-color-supportNegativeNeutral)',
          color: 'var(--ds-color-supportNegative)'
        } as CSSInterpolation
      },
      {
        props: {
          'ds-variant': 'chip',
          type: 'nudge',
          color: 'info'
        } as Partial<DsChipProps>,
        style: {
          backgroundColor: 'var(--ds-color-neutral1)',
          color: 'var(--ds-color-typoPrimary)'
        } as CSSInterpolation
      }
    ],
    styleOverrides: {
      root: {
        paddingTop: 'var(--ds-spacing-quickFreeze)',
        paddingBottom: 'var(--ds-spacing-quickFreeze)',
        fontWeight: 'var(--ds-typo-bodyRegularMedium-fontWeight)',
        fontSize: 'var(--ds-typo-bodyRegularMedium-fontSize)',
        lineHeight: 'var(--ds-typo-bodyRegularMedium-lineHeight)',
        letterSpacing: 'var(--ds-typo-bodyRegularMedium-letterSpacing)'
      } as CSSInterpolation,
      filled: {
        backgroundColor: 'var(--ds-color-surfacePrimary)',
        border: '1px solid var(--ds-color-strokeDefault)',
        '> .MuiIcon-root': {
          color: 'var(--ds-color-iconDefault)'
        }
      } as CSSInterpolation,
      filledSecondary: {
        backgroundColor: 'var(--ds-color-actionSecondary)',
        border: '1px solid var(--ds-color-strokeSelected)',
        fontWeight: 'var(--ds-typo-bodyBoldMedium-fontWeight)',
        fontSize: 'var(--ds-typo-bodyBoldMedium-fontSize)',
        lineHeight: 'var(--ds-typo-bodyBoldMedium-lineHeight)',
        letterSpacing: 'var(--ds-typo-bodyBoldMedium-letterSpacing)',
        '> .MuiIcon-root': {
          color: 'inherit'
        },
        ...STATE_STYLES.ACTION_SECONDARY_STATE_SECONDARY
      } as CSSInterpolation,
      label: {
        paddingTop: 'var(--ds-spacing-deepFreeze)',
        paddingBottom: 'var(--ds-spacing-deepFreeze)',
        paddingLeft: 'var(--ds-spacing-frostbite)',
        paddingRight: 'var(--ds-spacing-frostbite)'
      } as CSSInterpolation,
      icon: {
        fontSize: 'var(--ds-typo-fontSizeBitterCold)',
        marginLeft: 'var(--ds-spacing-frostbite)',
        marginRight: 'calc(var(--ds-spacing-quickFreeze) * -1)'
      } as CSSInterpolation,
      deleteIcon: {
        fontSize: 'var(--ds-typo-fontSizeBitterCold)',
        marginRight: 'var(--ds-spacing-deepFreeze)',
        marginLeft: 'calc(var(--ds-spacing-quickFreeze) * -1)'
      } as CSSInterpolation
    }
  }
}
