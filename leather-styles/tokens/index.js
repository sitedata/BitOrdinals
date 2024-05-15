const tokens = {
  "animations.spin": {
    "value": "spin 1s linear infinite",
    "variable": "var(--leather-animations-spin)"
  },
  "sizes.centeredPageFullWidth": {
    "value": "500px",
    "variable": "var(--leather-sizes-centered-page-full-width)"
  },
  "sizes.desktopViewportMinWidth": {
    "value": "480px",
    "variable": "var(--leather-sizes-desktop-viewport-min-width)"
  },
  "sizes.xs": {
    "value": "12px",
    "variable": "var(--leather-sizes-xs)"
  },
  "sizes.sm": {
    "value": "16px",
    "variable": "var(--leather-sizes-sm)"
  },
  "sizes.md": {
    "value": "24px",
    "variable": "var(--leather-sizes-md)"
  },
  "sizes.lg": {
    "value": "30px",
    "variable": "var(--leather-sizes-lg)"
  },
  "sizes.xl": {
    "value": "36px",
    "variable": "var(--leather-sizes-xl)"
  },
  "sizes.breakpoint-sm": {
    "value": "398px",
    "variable": "var(--leather-sizes-breakpoint-sm)"
  },
  "sizes.breakpoint-md": {
    "value": "768px",
    "variable": "var(--leather-sizes-breakpoint-md)"
  },
  "sizes.breakpoint-lg": {
    "value": "1024px",
    "variable": "var(--leather-sizes-breakpoint-lg)"
  },
  "sizes.breakpoint-xl": {
    "value": "1280px",
    "variable": "var(--leather-sizes-breakpoint-xl)"
  },
  "sizes.breakpoint-2xl": {
    "value": "1536px",
    "variable": "var(--leather-sizes-breakpoint-2xl)"
  },
  "radii.xs": {
    "value": "2px",
    "variable": "var(--leather-radii-xs)"
  },
  "radii.sm": {
    "value": "4px",
    "variable": "var(--leather-radii-sm)"
  },
  "radii.md": {
    "value": "8px",
    "variable": "var(--leather-radii-md)"
  },
  "radii.lg": {
    "value": "12px",
    "variable": "var(--leather-radii-lg)"
  },
  "spacing.space.00": {
    "value": "0",
    "variable": "var(--leather-spacing-space\\.00)"
  },
  "spacing.space.01": {
    "value": "4px",
    "variable": "var(--leather-spacing-space\\.01)"
  },
  "spacing.space.02": {
    "value": "8px",
    "variable": "var(--leather-spacing-space\\.02)"
  },
  "spacing.space.03": {
    "value": "12px",
    "variable": "var(--leather-spacing-space\\.03)"
  },
  "spacing.space.04": {
    "value": "16px",
    "variable": "var(--leather-spacing-space\\.04)"
  },
  "spacing.space.05": {
    "value": "24px",
    "variable": "var(--leather-spacing-space\\.05)"
  },
  "spacing.space.06": {
    "value": "32px",
    "variable": "var(--leather-spacing-space\\.06)"
  },
  "spacing.space.07": {
    "value": "40px",
    "variable": "var(--leather-spacing-space\\.07)"
  },
  "spacing.space.08": {
    "value": "48px",
    "variable": "var(--leather-spacing-space\\.08)"
  },
  "spacing.space.09": {
    "value": "64px",
    "variable": "var(--leather-spacing-space\\.09)"
  },
  "spacing.space.10": {
    "value": "72px",
    "variable": "var(--leather-spacing-space\\.10)"
  },
  "spacing.space.11": {
    "value": "128px",
    "variable": "var(--leather-spacing-space\\.11)"
  },
  "colors.dark": {
    "value": "#111",
    "variable": "var(--leather-colors-dark)"
  },
  "colors.black": {
    "value": "#000",
    "variable": "var(--leather-colors-black)"
  },
  "colors.white": {
    "value": "#fff",
    "variable": "var(--leather-colors-white)"
  },
  "colors.lightModeRed.100": {
    "value": "#FCEEED",
    "variable": "var(--leather-colors-light-mode-red-100)"
  },
  "colors.lightModeRed.300": {
    "value": "#FFABB1",
    "variable": "var(--leather-colors-light-mode-red-300)"
  },
  "colors.lightModeRed.500": {
    "value": "#FF5863",
    "variable": "var(--leather-colors-light-mode-red-500)"
  },
  "colors.lightModeRed.600": {
    "value": "#FF2E3C",
    "variable": "var(--leather-colors-light-mode-red-600)"
  },
  "colors.darkModeRed.100": {
    "value": "#38191A",
    "variable": "var(--leather-colors-dark-mode-red-100)"
  },
  "colors.darkModeRed.300": {
    "value": "#4F1A1D",
    "variable": "var(--leather-colors-dark-mode-red-300)"
  },
  "colors.darkModeRed.500": {
    "value": "#7C1E24",
    "variable": "var(--leather-colors-dark-mode-red-500)"
  },
  "colors.darkModeRed.600": {
    "value": "#AB1F29",
    "variable": "var(--leather-colors-dark-mode-red-600)"
  },
  "colors.lightModeBlue.100": {
    "value": "#E6F2FF",
    "variable": "var(--leather-colors-light-mode-blue-100)"
  },
  "colors.lightModeBlue.300": {
    "value": "#9BCAFF",
    "variable": "var(--leather-colors-light-mode-blue-300)"
  },
  "colors.lightModeBlue.500": {
    "value": "#3795FF",
    "variable": "var(--leather-colors-light-mode-blue-500)"
  },
  "colors.lightModeBlue.600": {
    "value": "#057AFF",
    "variable": "var(--leather-colors-light-mode-blue-600)"
  },
  "colors.darkModeBlue.100": {
    "value": "#0C2644",
    "variable": "var(--leather-colors-dark-mode-blue-100)"
  },
  "colors.darkModeBlue.300": {
    "value": "#092F5A",
    "variable": "var(--leather-colors-dark-mode-blue-300)"
  },
  "colors.darkModeBlue.500": {
    "value": "#053E80",
    "variable": "var(--leather-colors-dark-mode-blue-500)"
  },
  "colors.darkModeBlue.600": {
    "value": "#004EA6",
    "variable": "var(--leather-colors-dark-mode-blue-600)"
  },
  "colors.lightModeYellow.100": {
    "value": "#FEF9E6",
    "variable": "var(--leather-colors-light-mode-yellow-100)"
  },
  "colors.lightModeYellow.300": {
    "value": "#FBE699",
    "variable": "var(--leather-colors-light-mode-yellow-300)"
  },
  "colors.lightModeYellow.500": {
    "value": "#F7CD33",
    "variable": "var(--leather-colors-light-mode-yellow-500)"
  },
  "colors.lightModeYellow.600": {
    "value": "#F5C000",
    "variable": "var(--leather-colors-light-mode-yellow-600)"
  },
  "colors.darkModeYellow.100": {
    "value": "#473D1C",
    "variable": "var(--leather-colors-dark-mode-yellow-100)"
  },
  "colors.darkModeYellow.300": {
    "value": "#5C4F21",
    "variable": "var(--leather-colors-dark-mode-yellow-300)"
  },
  "colors.darkModeYellow.500": {
    "value": "#A98D29",
    "variable": "var(--leather-colors-dark-mode-yellow-500)"
  },
  "colors.darkModeYellow.600": {
    "value": "#D8B021",
    "variable": "var(--leather-colors-dark-mode-yellow-600)"
  },
  "colors.lightModeGreen.100": {
    "value": "#E6F5ED",
    "variable": "var(--leather-colors-light-mode-green-100)"
  },
  "colors.lightModeGreen.300": {
    "value": "#99D8B9",
    "variable": "var(--leather-colors-light-mode-green-300)"
  },
  "colors.lightModeGreen.500": {
    "value": "#33B172",
    "variable": "var(--leather-colors-light-mode-green-500)"
  },
  "colors.lightModeGreen.600": {
    "value": "#009E4F",
    "variable": "var(--leather-colors-light-mode-green-600)"
  },
  "colors.darkModeGreen.100": {
    "value": "#1A3124",
    "variable": "var(--leather-colors-dark-mode-green-100)"
  },
  "colors.darkModeGreen.300": {
    "value": "#19422C",
    "variable": "var(--leather-colors-dark-mode-green-300)"
  },
  "colors.darkModeGreen.500": {
    "value": "#165C38",
    "variable": "var(--leather-colors-dark-mode-green-500)"
  },
  "colors.darkModeGreen.600": {
    "value": "#00753A",
    "variable": "var(--leather-colors-dark-mode-green-600)"
  },
  "colors.lightModeInk.1": {
    "value": "#FFFFFF",
    "variable": "var(--leather-colors-light-mode-ink-1)"
  },
  "colors.lightModeInk.2": {
    "value": "#F7F5F3",
    "variable": "var(--leather-colors-light-mode-ink-2)"
  },
  "colors.lightModeInk.3": {
    "value": "#F5F1ED",
    "variable": "var(--leather-colors-light-mode-ink-3)"
  },
  "colors.lightModeInk.4": {
    "value": "#EAE5E0",
    "variable": "var(--leather-colors-light-mode-ink-4)"
  },
  "colors.lightModeInk.5": {
    "value": "#E4DDD6",
    "variable": "var(--leather-colors-light-mode-ink-5)"
  },
  "colors.lightModeInk.6": {
    "value": "#DED6CD",
    "variable": "var(--leather-colors-light-mode-ink-6)"
  },
  "colors.lightModeInk.7": {
    "value": "#D8CEC4",
    "variable": "var(--leather-colors-light-mode-ink-7)"
  },
  "colors.lightModeInk.8": {
    "value": "#C6B9AD",
    "variable": "var(--leather-colors-light-mode-ink-8)"
  },
  "colors.lightModeInk.9": {
    "value": "#948677",
    "variable": "var(--leather-colors-light-mode-ink-9)"
  },
  "colors.lightModeInk.10": {
    "value": "#64594D",
    "variable": "var(--leather-colors-light-mode-ink-10)"
  },
  "colors.lightModeInk.11": {
    "value": "#4A423B",
    "variable": "var(--leather-colors-light-mode-ink-11)"
  },
  "colors.lightModeInk.12": {
    "value": "#12100F",
    "variable": "var(--leather-colors-light-mode-ink-12)"
  },
  "colors.darkModeInk.1": {
    "value": "#12100F",
    "variable": "var(--leather-colors-dark-mode-ink-1)"
  },
  "colors.darkModeInk.2": {
    "value": "#2C2A24",
    "variable": "var(--leather-colors-dark-mode-ink-2)"
  },
  "colors.darkModeInk.3": {
    "value": "#4A423B",
    "variable": "var(--leather-colors-dark-mode-ink-3)"
  },
  "colors.darkModeInk.4": {
    "value": "#34312A",
    "variable": "var(--leather-colors-dark-mode-ink-4)"
  },
  "colors.darkModeInk.5": {
    "value": "#12100F",
    "variable": "var(--leather-colors-dark-mode-ink-5)"
  },
  "colors.darkModeInk.6": {
    "value": "#716A60",
    "variable": "var(--leather-colors-dark-mode-ink-6)"
  },
  "colors.darkModeInk.7": {
    "value": "#8F887D",
    "variable": "var(--leather-colors-dark-mode-ink-7)"
  },
  "colors.darkModeInk.8": {
    "value": "#C6B9AD",
    "variable": "var(--leather-colors-dark-mode-ink-8)"
  },
  "colors.darkModeInk.9": {
    "value": "#F5F1ED",
    "variable": "var(--leather-colors-dark-mode-ink-9)"
  },
  "colors.darkModeInk.10": {
    "value": "#DED6CD",
    "variable": "var(--leather-colors-dark-mode-ink-10)"
  },
  "colors.darkModeInk.11": {
    "value": "#DED6CD",
    "variable": "var(--leather-colors-dark-mode-ink-11)"
  },
  "colors.darkModeInk.12": {
    "value": "#F5F1ED",
    "variable": "var(--leather-colors-dark-mode-ink-12)"
  },
  "colors.lightModeStacks": {
    "value": "#5546FF",
    "variable": "var(--leather-colors-light-mode-stacks)"
  },
  "colors.darkModeStacks": {
    "value": "#7F80FF",
    "variable": "var(--leather-colors-dark-mode-stacks)"
  },
  "colors.overlay": {
    "value": "rgba(0,0,0,0.4)",
    "variable": "var(--leather-colors-overlay)"
  },
  "colors.transparentInk.2": {
    "value": "rgba(148, 134, 119, 0.1)",
    "variable": "var(--leather-colors-transparent-ink-2)"
  },
  "borders.action": {
    "value": "1px solid var(--leather-colors-accent-action-primary-default)",
    "variable": "var(--leather-borders-action)"
  },
  "borders.active": {
    "value": "2px solid var(--leather-colors-accent-border-default)",
    "variable": "var(--leather-borders-active)"
  },
  "borders.background": {
    "value": "2px solid var(--leather-colors-accent-background-primary)",
    "variable": "var(--leather-borders-background)"
  },
  "borders.dashed": {
    "value": "2px dashed var(--leather-colors-accent-component-background-default)",
    "variable": "var(--leather-borders-dashed)"
  },
  "borders.default": {
    "value": "1px solid var(--leather-colors-accent-border-default)",
    "variable": "var(--leather-borders-default)"
  },
  "borders.error": {
    "value": "1px solid var(--leather-colors-error-label)",
    "variable": "var(--leather-borders-error)"
  },
  "borders.focus": {
    "value": "2px solid var(--leather-colors-accent-action-primary-default)",
    "variable": "var(--leather-borders-focus)"
  },
  "borders.invert": {
    "value": "1px solid var(--leather-colors-invert)",
    "variable": "var(--leather-borders-invert)"
  },
  "borders.subdued": {
    "value": "1px solid var(--leather-colors-accent-text-subdued)",
    "variable": "var(--leather-borders-subdued)"
  },
  "borders.warning": {
    "value": "1px solid var(--leather-colors-warning-label)",
    "variable": "var(--leather-borders-warning)"
  },
  "transition": {
    "value": "all 0.2s cubic-bezier(0.23, 1, 0.32, 1)",
    "variable": "var(--leather-transition)"
  },
  "breakpoints.sm": {
    "value": "398px",
    "variable": "var(--leather-breakpoints-sm)"
  },
  "breakpoints.md": {
    "value": "768px",
    "variable": "var(--leather-breakpoints-md)"
  },
  "breakpoints.lg": {
    "value": "1024px",
    "variable": "var(--leather-breakpoints-lg)"
  },
  "breakpoints.xl": {
    "value": "1280px",
    "variable": "var(--leather-breakpoints-xl)"
  },
  "breakpoints.2xl": {
    "value": "1536px",
    "variable": "var(--leather-breakpoints-2xl)"
  },
  "colors.ink.1": {
    "value": "var(--leather-colors-ink-1)",
    "variable": "var(--leather-colors-ink-1)"
  },
  "colors.ink.2": {
    "value": "var(--leather-colors-ink-2)",
    "variable": "var(--leather-colors-ink-2)"
  },
  "colors.ink.3": {
    "value": "var(--leather-colors-ink-3)",
    "variable": "var(--leather-colors-ink-3)"
  },
  "colors.ink.4": {
    "value": "var(--leather-colors-ink-4)",
    "variable": "var(--leather-colors-ink-4)"
  },
  "colors.ink.5": {
    "value": "var(--leather-colors-ink-5)",
    "variable": "var(--leather-colors-ink-5)"
  },
  "colors.ink.6": {
    "value": "var(--leather-colors-ink-6)",
    "variable": "var(--leather-colors-ink-6)"
  },
  "colors.ink.7": {
    "value": "var(--leather-colors-ink-7)",
    "variable": "var(--leather-colors-ink-7)"
  },
  "colors.ink.8": {
    "value": "var(--leather-colors-ink-8)",
    "variable": "var(--leather-colors-ink-8)"
  },
  "colors.ink.9": {
    "value": "var(--leather-colors-ink-9)",
    "variable": "var(--leather-colors-ink-9)"
  },
  "colors.ink.10": {
    "value": "var(--leather-colors-ink-10)",
    "variable": "var(--leather-colors-ink-10)"
  },
  "colors.ink.11": {
    "value": "var(--leather-colors-ink-11)",
    "variable": "var(--leather-colors-ink-11)"
  },
  "colors.ink.12": {
    "value": "var(--leather-colors-ink-12)",
    "variable": "var(--leather-colors-ink-12)"
  },
  "colors.accent.text-primary": {
    "value": "var(--leather-colors-accent-text-primary)",
    "variable": "var(--leather-colors-accent-text-primary)"
  },
  "colors.accent.text-subdued": {
    "value": "var(--leather-colors-accent-text-subdued)",
    "variable": "var(--leather-colors-accent-text-subdued)"
  },
  "colors.accent.action-primary-hover": {
    "value": "var(--leather-colors-accent-action-primary-hover)",
    "variable": "var(--leather-colors-accent-action-primary-hover)"
  },
  "colors.accent.action-primary-default": {
    "value": "var(--leather-colors-accent-action-primary-default)",
    "variable": "var(--leather-colors-accent-action-primary-default)"
  },
  "colors.accent.border-hover": {
    "value": "var(--leather-colors-accent-border-hover)",
    "variable": "var(--leather-colors-accent-border-hover)"
  },
  "colors.accent.border-default": {
    "value": "var(--leather-colors-accent-border-default)",
    "variable": "var(--leather-colors-accent-border-default)"
  },
  "colors.accent.non-interactive": {
    "value": "var(--leather-colors-accent-non-interactive)",
    "variable": "var(--leather-colors-accent-non-interactive)"
  },
  "colors.accent.component-background-pressed": {
    "value": "var(--leather-colors-accent-component-background-pressed)",
    "variable": "var(--leather-colors-accent-component-background-pressed)"
  },
  "colors.accent.component-background-hover": {
    "value": "var(--leather-colors-accent-component-background-hover)",
    "variable": "var(--leather-colors-accent-component-background-hover)"
  },
  "colors.accent.component-background-default": {
    "value": "var(--leather-colors-accent-component-background-default)",
    "variable": "var(--leather-colors-accent-component-background-default)"
  },
  "colors.accent.background-secondary": {
    "value": "var(--leather-colors-accent-background-secondary)",
    "variable": "var(--leather-colors-accent-background-secondary)"
  },
  "colors.accent.background-primary": {
    "value": "var(--leather-colors-accent-background-primary)",
    "variable": "var(--leather-colors-accent-background-primary)"
  },
  "colors.accent.notification-text": {
    "value": "var(--leather-colors-accent-notification-text)",
    "variable": "var(--leather-colors-accent-notification-text)"
  },
  "colors.disabled": {
    "value": "var(--leather-colors-disabled)",
    "variable": "var(--leather-colors-disabled)"
  },
  "colors.error.background": {
    "value": "var(--leather-colors-error-background)",
    "variable": "var(--leather-colors-error-background)"
  },
  "colors.error.label": {
    "value": "var(--leather-colors-error-label)",
    "variable": "var(--leather-colors-error-label)"
  },
  "colors.invert": {
    "value": "var(--leather-colors-invert)",
    "variable": "var(--leather-colors-invert)"
  },
  "colors.stacks": {
    "value": "var(--leather-colors-stacks)",
    "variable": "var(--leather-colors-stacks)"
  },
  "colors.success.background": {
    "value": "var(--leather-colors-success-background)",
    "variable": "var(--leather-colors-success-background)"
  },
  "colors.success.label": {
    "value": "var(--leather-colors-success-label)",
    "variable": "var(--leather-colors-success-label)"
  },
  "colors.warning.background": {
    "value": "var(--leather-colors-warning-background)",
    "variable": "var(--leather-colors-warning-background)"
  },
  "colors.warning.label": {
    "value": "var(--leather-colors-warning-label)",
    "variable": "var(--leather-colors-warning-label)"
  },
  "focus": {
    "value": "var(--leather-focus)",
    "variable": "var(--leather-focus)"
  },
  "spacing.-space.00": {
    "value": "calc(var(--leather-spacing-space\\.00) * -1)",
    "variable": "var(--leather-spacing-space\\.00)"
  },
  "spacing.-space.01": {
    "value": "calc(var(--leather-spacing-space\\.01) * -1)",
    "variable": "var(--leather-spacing-space\\.01)"
  },
  "spacing.-space.02": {
    "value": "calc(var(--leather-spacing-space\\.02) * -1)",
    "variable": "var(--leather-spacing-space\\.02)"
  },
  "spacing.-space.03": {
    "value": "calc(var(--leather-spacing-space\\.03) * -1)",
    "variable": "var(--leather-spacing-space\\.03)"
  },
  "spacing.-space.04": {
    "value": "calc(var(--leather-spacing-space\\.04) * -1)",
    "variable": "var(--leather-spacing-space\\.04)"
  },
  "spacing.-space.05": {
    "value": "calc(var(--leather-spacing-space\\.05) * -1)",
    "variable": "var(--leather-spacing-space\\.05)"
  },
  "spacing.-space.06": {
    "value": "calc(var(--leather-spacing-space\\.06) * -1)",
    "variable": "var(--leather-spacing-space\\.06)"
  },
  "spacing.-space.07": {
    "value": "calc(var(--leather-spacing-space\\.07) * -1)",
    "variable": "var(--leather-spacing-space\\.07)"
  },
  "spacing.-space.08": {
    "value": "calc(var(--leather-spacing-space\\.08) * -1)",
    "variable": "var(--leather-spacing-space\\.08)"
  },
  "spacing.-space.09": {
    "value": "calc(var(--leather-spacing-space\\.09) * -1)",
    "variable": "var(--leather-spacing-space\\.09)"
  },
  "spacing.-space.10": {
    "value": "calc(var(--leather-spacing-space\\.10) * -1)",
    "variable": "var(--leather-spacing-space\\.10)"
  },
  "spacing.-space.11": {
    "value": "calc(var(--leather-spacing-space\\.11) * -1)",
    "variable": "var(--leather-spacing-space\\.11)"
  },
  "colors.colorPalette": {
    "value": "var(--leather-colors-color-palette)",
    "variable": "var(--leather-colors-color-palette)"
  },
  "colors.colorPalette.100": {
    "value": "var(--leather-colors-color-palette-100)",
    "variable": "var(--leather-colors-color-palette-100)"
  },
  "colors.colorPalette.300": {
    "value": "var(--leather-colors-color-palette-300)",
    "variable": "var(--leather-colors-color-palette-300)"
  },
  "colors.colorPalette.500": {
    "value": "var(--leather-colors-color-palette-500)",
    "variable": "var(--leather-colors-color-palette-500)"
  },
  "colors.colorPalette.600": {
    "value": "var(--leather-colors-color-palette-600)",
    "variable": "var(--leather-colors-color-palette-600)"
  },
  "colors.colorPalette.1": {
    "value": "var(--leather-colors-color-palette-1)",
    "variable": "var(--leather-colors-color-palette-1)"
  },
  "colors.colorPalette.2": {
    "value": "var(--leather-colors-color-palette-2)",
    "variable": "var(--leather-colors-color-palette-2)"
  },
  "colors.colorPalette.3": {
    "value": "var(--leather-colors-color-palette-3)",
    "variable": "var(--leather-colors-color-palette-3)"
  },
  "colors.colorPalette.4": {
    "value": "var(--leather-colors-color-palette-4)",
    "variable": "var(--leather-colors-color-palette-4)"
  },
  "colors.colorPalette.5": {
    "value": "var(--leather-colors-color-palette-5)",
    "variable": "var(--leather-colors-color-palette-5)"
  },
  "colors.colorPalette.6": {
    "value": "var(--leather-colors-color-palette-6)",
    "variable": "var(--leather-colors-color-palette-6)"
  },
  "colors.colorPalette.7": {
    "value": "var(--leather-colors-color-palette-7)",
    "variable": "var(--leather-colors-color-palette-7)"
  },
  "colors.colorPalette.8": {
    "value": "var(--leather-colors-color-palette-8)",
    "variable": "var(--leather-colors-color-palette-8)"
  },
  "colors.colorPalette.9": {
    "value": "var(--leather-colors-color-palette-9)",
    "variable": "var(--leather-colors-color-palette-9)"
  },
  "colors.colorPalette.10": {
    "value": "var(--leather-colors-color-palette-10)",
    "variable": "var(--leather-colors-color-palette-10)"
  },
  "colors.colorPalette.11": {
    "value": "var(--leather-colors-color-palette-11)",
    "variable": "var(--leather-colors-color-palette-11)"
  },
  "colors.colorPalette.12": {
    "value": "var(--leather-colors-color-palette-12)",
    "variable": "var(--leather-colors-color-palette-12)"
  },
  "colors.colorPalette.text-primary": {
    "value": "var(--leather-colors-color-palette-text-primary)",
    "variable": "var(--leather-colors-color-palette-text-primary)"
  },
  "colors.colorPalette.text-subdued": {
    "value": "var(--leather-colors-color-palette-text-subdued)",
    "variable": "var(--leather-colors-color-palette-text-subdued)"
  },
  "colors.colorPalette.action-primary-hover": {
    "value": "var(--leather-colors-color-palette-action-primary-hover)",
    "variable": "var(--leather-colors-color-palette-action-primary-hover)"
  },
  "colors.colorPalette.action-primary-default": {
    "value": "var(--leather-colors-color-palette-action-primary-default)",
    "variable": "var(--leather-colors-color-palette-action-primary-default)"
  },
  "colors.colorPalette.border-hover": {
    "value": "var(--leather-colors-color-palette-border-hover)",
    "variable": "var(--leather-colors-color-palette-border-hover)"
  },
  "colors.colorPalette.border-default": {
    "value": "var(--leather-colors-color-palette-border-default)",
    "variable": "var(--leather-colors-color-palette-border-default)"
  },
  "colors.colorPalette.non-interactive": {
    "value": "var(--leather-colors-color-palette-non-interactive)",
    "variable": "var(--leather-colors-color-palette-non-interactive)"
  },
  "colors.colorPalette.component-background-pressed": {
    "value": "var(--leather-colors-color-palette-component-background-pressed)",
    "variable": "var(--leather-colors-color-palette-component-background-pressed)"
  },
  "colors.colorPalette.component-background-hover": {
    "value": "var(--leather-colors-color-palette-component-background-hover)",
    "variable": "var(--leather-colors-color-palette-component-background-hover)"
  },
  "colors.colorPalette.component-background-default": {
    "value": "var(--leather-colors-color-palette-component-background-default)",
    "variable": "var(--leather-colors-color-palette-component-background-default)"
  },
  "colors.colorPalette.background-secondary": {
    "value": "var(--leather-colors-color-palette-background-secondary)",
    "variable": "var(--leather-colors-color-palette-background-secondary)"
  },
  "colors.colorPalette.background-primary": {
    "value": "var(--leather-colors-color-palette-background-primary)",
    "variable": "var(--leather-colors-color-palette-background-primary)"
  },
  "colors.colorPalette.notification-text": {
    "value": "var(--leather-colors-color-palette-notification-text)",
    "variable": "var(--leather-colors-color-palette-notification-text)"
  },
  "colors.colorPalette.background": {
    "value": "var(--leather-colors-color-palette-background)",
    "variable": "var(--leather-colors-color-palette-background)"
  },
  "colors.colorPalette.label": {
    "value": "var(--leather-colors-color-palette-label)",
    "variable": "var(--leather-colors-color-palette-label)"
  }
}

export function token(path, fallback) {
  return tokens[path]?.value || fallback
}

function tokenVar(path, fallback) {
  return tokens[path]?.variable || fallback
}

token.var = tokenVar