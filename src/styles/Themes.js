const colors = {
    lightRed: '#EE949B',
    mediumRed: '#DF3440',
    darkRed: '#A51A24',

    lightBlue: '#98ABD1',
    mediumBlue: '#4D6CAD',
    darkBlue: '#384F7E',

    activeBlue: '#12578B',
    teal: '#128B83',

    white: '#FFFFFF',
    lightestGray: '#fafafa',
    lighterGray: '#f3f3f3',
    lightGray: '#969696',
    darkGray: '#434343',
    black: '#000000',
};

export const checkmarksTheme = {
    bgPrimary: colors.white, // applied to Root Background
    bgSecondary: colors.lightRed, // light red (background for About section)
    // bgContainer: colors.white, // applied to Container Background

    textLabel: colors.darkGray, // applied to Text Label
    textValue: colors.black,

    inputLabel: colors.darkRed,
    inputIcon: colors.darkRed,
    inputBackground: colors.lighterGray,
    inputPlaceholder: colors.lightGray,

    textActive: colors.activeBlue,

    borderPrimary: colors.mediumRed,
    borderSecondary: colors.darkRed,

    buttonTextPrimary: colors.white,
    buttonPrimary: colors.mediumRed,
    buttonTextSecondary: colors.darkRed,
    buttonSecondary: colors.white,

    hoverDark: colors.darkGray,
    hoverLight: colors.lightestGray,
    hoverBright: colors.darkRed,
    hoverSoft: colors.lightRed,

    bgGradientLight: colors.lightRed, // applied to Light side of linear gradient
    bgGradientDark: colors.darkRed, // applied to Dark side of linear gradient
};
