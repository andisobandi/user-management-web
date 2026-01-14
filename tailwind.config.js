/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");
const plugin = require("tailwindcss/plugin");

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Inter", "sans-serif", "system-ui"],
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
      fontSize: {
        "2xs": "0.625rem",
      },
      keyframes: {
        "bg-position": {
          from: {
            backgroundPosition: "var(--animate-from, 1rem) 0",
          },
          to: {
            backgroundPosition: "var(--animate-to, 0) 0",
          },
        },
        position: {
          from: {
            insetInlineStart: "var(--animate-from-x)",
            insetBlockStart: "var(--animate-from-y)",
          },
          to: {
            insetInlineStart: "var(--animate-to-x)",
            insetBlockStart: "var(--animate-to-y)",
          },
        },
        "expand-height": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--height)",
          },
        },
        "collapse-height": {
          from: {
            height: "var(--height)",
          },
          to: {
            height: "0",
          },
        },
        "expand-width": {
          from: {
            width: "0",
          },
          to: {
            width: "var(--width)",
          },
        },
        "collapse-width": {
          from: {
            height: "var(--width)",
          },
          to: {
            height: "0",
          },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "fade-out": {
          from: { opacity: "1" },
          to: { opacity: "0" },
        },
        "slide-from-top": {
          from: {
            translate: "0 -0.5rem",
          },
          to: {
            translate: "0",
          },
        },
        "slide-from-bottom": {
          from: {
            translate: "0 0.5rem",
          },
          to: {
            translate: "0",
          },
        },
        "slide-from-left": {
          from: {
            translate: "-0.5rem 0",
          },
          to: {
            translate: "0",
          },
        },
        "slide-from-right": {
          from: {
            translate: "0.5rem 0",
          },
          to: {
            translate: "0",
          },
        },
        "slide-to-top": {
          from: {
            translate: "0",
          },
          to: {
            translate: "0 -0.5rem",
          },
        },
        "slide-to-bottom": {
          from: {
            translate: "0",
          },
          to: {
            translate: "0 0.5rem",
          },
        },
        "slide-to-left": {
          from: {
            translate: "0",
          },
          to: {
            translate: "-0.5rem 0",
          },
        },
        "slide-to-right": {
          from: {
            translate: "0",
          },
          to: {
            translate: "0.5rem 0",
          },
        },
        "scale-in": {
          from: {
            scale: "0.95",
          },
          to: {
            scale: "1",
          },
        },
        "scale-out": {
          from: {
            scale: "1",
          },
          to: {
            scale: "0.95",
          },
        },
      },
      animation: {
        "slide-fade-in-from-top": "slide-from-top 150ms, fade-in 150ms",
        "slide-fade-in-from-top-moderate": "slide-from-top 200ms, fade-in 200ms",
        "slide-fade-in-from-bottom": "slide-from-bottom 150ms, fade-in 150ms",
        "slide-fade-in-from-bottom-moderate": "slide-from-bottom 200ms, fade-in 200ms",
        "slide-fade-in-from-right": "slide-from-right 150ms, fade-in 150ms",
        "slide-fade-in-from-right-moderate": "slide-from-right 200ms, fade-in 200ms",
        "slide-fade-in-from-left": "slide-from-left 150ms, fade-in 150ms",
        "slide-fade-in-from-left-moderate": "slide-from-left 200ms, fade-in 200ms",
        "slide-fade-out-to-top": "slide-to-top 0s, fade-out 0s",
        "slide-fade-out-to-top-faster": "slide-to-top 100ms, fade-out 100ms",
        "slide-fade-out-to-bottom": "slide-to-bottom 0s, fade-out 0s",
        "slide-fade-out-to-bottom-faster": "slide-to-bottom 100ms, fade-out 100ms",
        "slide-fade-out-to-left": "slide-to-left 0s, fade-out 0s",
        "slide-fade-out-to-left-faster": "slide-to-left 100ms, fade-out 100ms",
        "slide-fade-out-to-right": "slide-to-right 0s, fade-out 0s",
        "slide-fade-out-to-right-faster": "slide-to-right 100ms, fade-out 100ms",
        "expand-height-fade-in": "expand-height 200ms, fade-in 200ms",
        "collapse-height-fade-out": "collapse-height 200ms, fade-out 200ms",
        "scale-in-fade-in-moderate": "scale-in 200ms, fade-in 200ms",
        "scale-out-fade-out-faster": "scale-out 100ms, fade-out 100ms",
        "scale-out-fade-out-fast": "scale-out 100ms, fade-out 150ms",
        "scale-in-fade-in-fast": "scale-in 200ms, fade-in 150ms",
      },
      boxShadow: {
        "tw-md": "0px 4px 8px rgba(24, 24, 27, 0.1), 0px 0px 1px rgba(24, 24, 27, 0.3)",
        "tw-lg": "0px 8px 16px rgba(24, 24, 27, 0.1), 0px 0px 1px rgba(24, 24, 27, 0.3)",
        "tw-xl": "0px 16px 24px rgba(24, 24, 27, 0.1), 0px 0px 1px rgba(24, 24, 27, 0.3)",
      },
      colors: {
        tw: {
          "black-alpha": {
            500: "rgba(0, 0, 0, 0.36)",
          },
          bg: {
            muted: colors.zinc[100],
            emphasized: colors.zinc[200],
            panel: colors.white,
          },
          fg: {
            default: colors.zinc[950],
            muted: colors.zinc[600],
            subtle: colors.zinc[400],
            error: colors.red[500],
            warning: colors.orange[600],
            success: colors.green[600],
          },
          border: {
            default: colors.zinc[200],
            emphasized: colors.zinc[300],
            error: colors.red[500],
            success: colors.green[500],
          },
          gray: {
            fg: colors.zinc[800],
            subtle: colors.zinc[100],
            muted: colors.zinc[200],
            solid: colors.zinc[900],
            "focus-ring": colors.zinc[400],
          },
          red: {
            fg: colors.red[700],
            subtle: colors.red[100],
            muted: colors.red[200],
            solid: colors.red[600],
            "focus-ring": colors.red[500],
          },
          orange: {
            fg: colors.orange[700],
            subtle: colors.orange[100],
            muted: colors.orange[200],
            solid: colors.orange[600],
            "focus-ring": colors.orange[500],
          },
          green: {
            fg: colors.green[700],
            subtle: colors.green[100],
            muted: colors.green[200],
            solid: colors.green[600],
            "focus-ring": colors.green[500],
          },
          blue: {
            fg: colors.blue[700],
            subtle: colors.blue[100],
            muted: colors.blue[200],
            solid: colors.blue[600],
            "focus-ring": colors.blue[500],
          },
          yellow: {
            fg: colors.yellow[800],
            subtle: colors.yellow[100],
            muted: colors.yellow[200],
            solid: colors.yellow[300],
            "focus-ring": colors.yellow[500],
          },
          teal: {
            fg: colors.teal[700],
            subtle: colors.teal[100],
            muted: colors.teal[200],
            solid: colors.teal[600],
            "focus-ring": colors.teal[500],
          },
          purple: {
            fg: colors.purple[700],
            subtle: colors.purple[100],
            muted: colors.purple[200],
            solid: colors.purple[600],
            "focus-ring": colors.purple[500],
          },
          pink: {
            fg: colors.pink[700],
            subtle: colors.pink[100],
            muted: colors.pink[200],
            solid: colors.pink[600],
            "focus-ring": colors.pink[500],
          },
          cyan: {
            fg: colors.cyan[700],
            subtle: colors.cyan[100],
            muted: colors.cyan[200],
            solid: colors.cyan[600],
            "focus-ring": colors.cyan[500],
          },
          navy: {
            100: "#c2c9d6",
            200: "#a3adc2",
            300: "#697a9b",
            450: "#465675",
            900: "#192132",
          },
          slate: {
            50: "oklch(98.4% .003 247.858)",
            150: "#e9eef5",
            300: "oklch(86.9% .022 252.894)",
            400: "oklch(70.4% .04 256.788)",
            500: "oklch(55.4% .046 257.417)",
            600: "oklch(44.6% .043 257.281)",
          },
        },
      },
    },
  },
  plugins: [
    plugin(({ addComponents, matchVariant, addVariant, addUtilities, theme }) => {
      matchVariant("placement", (value) => {
        return `&[data-placement^="${value}"]`;
      });
      addVariant("tw-focus-visible", "&:is(:focus-visible, [data-focus-visible])");
      addVariant("tw-focus", "&:is(:focus, [data-focus])");
      addVariant("tw-icon", "& :where(svg)");
      addVariant(
        "tw-disabled",
        "&:is(:disabled, [disabled], [data-disabled], [aria-disabled=true])"
      );
      addVariant(
        "tw-expanded",
        "&:is([aria-expanded=true], [data-expanded], [data-state=expanded])"
      );
      addVariant("tw-invalid", "&:is([data-invalid], [aria-invalid=true], [data-state=invalid])");
      addVariant(
        "tw-checked",
        "&:is(:checked, [data-checked], [aria-checked=true], [data-state=checked])"
      );
      addVariant("tw-open", "&:is([open], [data-open], [data-state=open])");
      addVariant("tw-close", "&:is([closed], [data-closed], [data-state=closed])");
      addVariant(
        "tw-active",
        "&:is(:active, [data-active]):not(:disabled, [data-disabled], [data-state=open])"
      );
      addVariant("tw-first", "&:first-of-type");
      addVariant("tw-last", "&:last-of-type");
      addVariant("tw-placeholder-shown", "&:is(:placeholder-shown, [data-placeholder-shown])");
      addVariant("tw-highlighted", "&[data-highlighted]");
      addVariant("tw-hover", "&:is(:hover, [data-hover]):not(:disabled, [data-disabled])");
      addVariant(
        "tw-complete",
        "&[data-complete]:not(:invalid, [aria-invalid=true], [data-invalid])"
      );
      addComponents({
        ".tw-ring-inside": {
          outlineStyle: "solid",
          outlineWidth: "1px",
          outlineOffset: "0px",
        },
        ".tw-ring-outside": {
          outlineStyle: "solid",
          outlineWidth: "2px",
          outlineOffset: "2px",
        },
        ".tw-disabled-not-allowed": {
          opacity: 0.5,
          cursor: "not-allowed",
        },
        ".tw-toast-transition": {
          transition: "translate 400ms, scale 400ms, opacity 400ms, height 400ms, box-shadow 200ms",
          transitionTimingFunction: "cubic-bezier(0.21, 1.02, 0.73, 1)",
        },
        ".tw-toast-transition-close": {
          transition: "translate 400ms, scale 400ms, opacity 200ms",
          transitionTimingFunction: "cubic-bezier(0.06, 0.71, 0.55, 1)",
        },
        ".tw-toast-warning": {
          backgroundColor: theme("colors.orange.600"),
          color: "#fff",
          "--toast-trigger-bg": "rgb(255 255 255 / 0.1)",
          "--toast-border-color": "rgb(255 255 255 / 0.4)",
        },
        ".tw-toast-success": {
          backgroundColor: theme("colors.green.600"),
          color: "#fff",
          "--toast-trigger-bg": "rgb(255 255 255 / 0.1)",
          "--toast-border-color": "rgb(255 255 255 / 0.4)",
        },
        ".tw-toast-error": {
          backgroundColor: theme("colors.red.600"),
          color: "#fff",
          "--toast-trigger-bg": "rgb(255 255 255 / 0.1)",
          "--toast-border-color": "rgb(255 255 255 / 0.4)",
        },
        ".tw-toast-translate": {
          translate: "var(--x) var(--y)",
        },
      });
      addUtilities({
        ".tw-avatar-radius-rounded": { "--avatar-radius": theme("borderRadius.md") },
        ".tw-avatar-radius-full": { "--avatar-radius": theme("borderRadius.full") },
        ".tw-avatar-size-full": { "--avatar-size": theme("width.full") },
        ".tw-avatar-size-2xs": { "--avatar-size": theme("width.6") },
        ".tw-avatar-size-xs": { "--avatar-size": theme("width.8") },
        ".tw-avatar-size-sm": { "--avatar-size": theme("width.9") },
        ".tw-avatar-size-md": { "--avatar-size": theme("width.10") },
        ".tw-avatar-size-lg": { "--avatar-size": theme("width.11") },
        ".tw-avatar-size-xl": { "--avatar-size": theme("width.12") },
        ".tw-avatar-size-2xl": { "--avatar-size": theme("width.16") },
        ".tw-avatar-fs-full": { "--avatar-font-size": "100%" },
        ".tw-avatar-fs-2xs": { "--avatar-font-size": theme("fontSize.2xs") },
        ".tw-avatar-fs-xs": { "--avatar-font-size": theme("fontSize.xs") },
        ".tw-avatar-fs-sm": { "--avatar-font-size": theme("fontSize.sm") },
        ".tw-avatar-fs-md": { "--avatar-font-size": theme("fontSize.base") },
        ".tw-avatar-fs-lg": { "--avatar-font-size": theme("fontSize.base") },
        ".tw-avatar-fs-xl": { "--avatar-font-size": theme("fontSize.lg") },
        ".tw-avatar-fs-2xl": { "--avatar-font-size": theme("fontSize.xl") },
        ".tw-input-height-2xs": { "--input-height": theme("height.7") },
        ".tw-input-height-xs": { "--input-height": theme("height.8") },
        ".tw-input-height-sm": { "--input-height": theme("height.9") },
        ".tw-input-height-md": { "--input-height": theme("height.10") },
        ".tw-input-height-lg": { "--input-height": theme("height.11") },
        ".tw-input-height-xl": { "--input-height": theme("height.12") },
        ".tw-input-height-2xl": { "--input-height": theme("height.16") },
        ".tw-focus-color-gray": { "--focus-color": theme("colors.zinc.400") },
        ".tw-focus-color-red": { "--focus-color": theme("colors.red.500") },
        ".tw-focus-color-green": { "--focus-color": theme("colors.green.500") },
        ".tw-focus-color-blue": { "--focus-color": theme("colors.blue.500") },
        ".tw-focus-color-teal": { "--focus-color": theme("colors.teal.500") },
        ".tw-focus-color-pink": { "--focus-color": theme("colors.pink.500") },
        ".tw-focus-color-cyan": { "--focus-color": theme("colors.cyan.500") },
        ".tw-focus-color-purple": { "--focus-color": theme("colors.purple.500") },
        ".tw-focus-color-orange": { "--focus-color": theme("colors.orange.500") },
        ".tw-focus-color-yellow": { "--focus-color": theme("colors.yellow.500") },
      });
    }),
  ],
};
