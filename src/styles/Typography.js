const MANROPE = {
  REGULAR: 'Manrope-Regular',
  MEDIUM: 'Manrope-Medium',
  SEMI_BOLD: 'Manrope-SemiBold',
  BOLD: 'Manrope-Bold',
};

const getFontFamilyStyles = fontFamily => ({
  fontFamily,
});

const getFontSizeStyles = fontStyle => ({fontStyle});

const appText = (font, fontSize) => {
  const fontFamilyStyles = getFontFamilyStyles(font);
  const fontSizeStyles = getFontSizeStyles(fontSize);

  return {
    ...fontFamilyStyles,
    ...fontSizeStyles,
  };
};

export default appText;
