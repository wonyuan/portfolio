import { MantineThemeOverride, rem } from "@mantine/core";

export const theme: MantineThemeOverride = {
  colorScheme: "light",
  lineHeight: 1.5,
  colors: {
    green: ["#E8F0DB", "#CADBAC", "#BBD194", "#A4C171", "#8DB24D", "#718E3E", "#556B2E", "#39471F", "#1C240F"],
    brown: ['#F0E2DB', '#DBBCAC', '#D1A994', '#C18C71', '#B26F4D', '#8E593E', '#6B432E', '#472D1F', '#24160F'],
  },
  fontSizes: {
    xs: rem(10),
    sm: rem(11),
    md: rem(14),
    lg: rem(16),
    xl: rem(20),
    xxl: rem(24),
    xxxl: rem(28),
  },

  fontFamily: "'Redaction', Georgia, serif",
  headings: { fontFamily: "'Redaction35', Georgia, serif" },
  black: '#3D2828',
};
