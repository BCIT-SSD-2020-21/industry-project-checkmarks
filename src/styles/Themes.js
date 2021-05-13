const colors = {
    lightRed: '#EE949B',
    mediumRed: '#DF3440',
    darkRed: '#A51A24',

    lightBlue: '#98ABD1',
    mediumBlue: '#4D6CAD',
    darkBlue: '#384F7E',
    blue1: '#80d1fd',

    activeBlue: '#12578B',
    teal: '#128B83',

    white: '#FFFFFF',
    whiteOpq0: '#FFFFFF00',
    whiteOpq: '#FFFFFF40',
    whiteOpq2: '#FFFFFF8C',
    lightestGray: '#fafafa',
    lighterGray: '#f3f3f3',
    lighterGrayOpq: '#f3f3f340',
    lightGray: '#969696',
    lightGrayOpq: '#96969640',
    darkGray: '#434343',
    black: '#000000',
};

export const checkmarksTheme = {
    bgPrimary: colors.whiteOpq, // applied to Root Background
    bgDrawer: colors.whiteOpq2, // applied to Drawer Background
    bgSecondary: colors.lightRed, // light red (background for About section)
    bgTertiary: colors.darkRed, // dark red (background for Pricing section)
    bgTransparent: colors.whiteOpq0, // applied to transparent containers
    // bgContainer: colors.white, // applied to Container Background

    textLabel: colors.darkGray, // applied to Text Label
    textValue: colors.black,
    textValue1: colors.white,
    textValue2: colors.mediumRed,

    hyperLink: colors.blue1, //applied to links

    inputLabel: colors.darkRed,
    inputIcon: colors.darkRed,
    inputValue: colors.darkRed,
    inputValue2: colors.white,
    inputBackground: colors.lighterGrayOpq,
    inputPlaceholder: colors.lightGray,

    transparentCard: colors.lighterGrayOpq,

    textPrimary: colors.mediumRed,
    textPrimaryDark: colors.darkRed,
    textActive: colors.activeBlue,

    borderPrimary: colors.mediumRed,
    borderSecondary: colors.darkRed,

    buttonTextPrimary: colors.white,
    buttonPrimary: colors.mediumRed,
    buttonTextSecondary: colors.darkRed,
    buttonSecondary: colors.white,

    hoverDark: colors.darkGray,
    hoverLight: colors.lightGrayOpq,
    hoverBright: colors.darkRed,
    hoverSoft: colors.lightRed,

    bgGradientLight: colors.lightRed, // applied to Light side of linear gradient
    bgGradientDark: colors.darkRed, // applied to Dark side of linear gradient
};
