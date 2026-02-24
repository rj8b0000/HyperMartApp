// src/theme/typography.js
import responsive from '../styles/responsive'; // adjust path
export const FontFamily = {
  regular: 'Poppins-Regular',
  medium: 'Poppins-Medium',
  bold: 'Poppins-Bold',
  dmSansRegular: 'DMSans-Regular',
  dmSansMedium: 'DMSans-Medium',
  dmSansBold: 'DMSans-Bold',
};

const makeTextStyle = (
  fontFamily: string,
  fontSize: number,
  lineHeight: number,
) => ({
  fontFamily,
  fontSize: responsive.fontSize(fontSize),
  lineHeight: responsive.height(lineHeight),
});

export const Typography = {
  headingBold: makeTextStyle(FontFamily.dmSansBold, 16, 20),
  dmRegular: makeTextStyle(FontFamily.dmSansRegular, 14, 16),
};

export default Typography;
