const colors = {
    lightRed: '#EE949B',
    lightRed2: '#b74850',
    mediumRed: '#DF3440',
    darkRed: '#A51A24',
    mediumRed2: '#b74850',

    lightBlue: '#98ABD1',
    mediumBlue: '#4D6CAD',
    darkBlue: '#384F7E',
    blue1: '#80d1fd',

    activeBlue: '#12578B',
    teal: '#128B83',
    text: '#751219',

    appBar: '#fbfbfb',
    appBarDark: '#171518',
    appBarOpq70: '#fbfbfbB3',
    appBarDarkOpq70: '#171518B3',
    white: '#FFFFFF',

    whiteOpq30: '#FFFFFF4D',
    blackOpq30: '#0000004D',
    whiteOpq90: '#FFFFFFE6',
    whiteOpq0: '#FFFFFF00',
    whiteOpq: '#FFFFFF40',
    blackOpq: '#00000040',
    whiteOpq2: '#FFFFFF8C',
    whiteOpq70: '#FFFFFB3',
    blackOpq70: '#000000B3',
    blackOpq90: '#000000E6',
    lightestGray: '#fafafa',
    lighterGray: '#f3f3f3',
    lighterGrayOpq: '#f3f3f340',
    lightGray: '#969696',
    lightGrayOpq: '#96969640',
    darkGray: '#1f262e',
    black: '#000000',
};

export const checkmarksTheme = {
    bgPrimary: colors.whiteOpq, // applied to Root Background
    bgPrimaryDark: colors.blackOpq,
    bgDrawer: colors.whiteOpq2, // applied to Drawer Background
    bgSecondary: colors.lightRed, // light red (background for About section)
    bgTertiary: colors.darkRed, // dark red (background for Pricing section)
    bgTransparent: colors.whiteOpq0, // applied to transparent containers
    // bgContainer: colors.white, // applied to Container Background
    bgOpaque90: colors.whiteOpq90,
    bgOpaque90Dark: colors.blackOpq90,
    bgOpaque70: colors.whiteOpq70,
    bgOpaque70Dark: colors.blackOpq70,
    bgOpaque30: colors.whiteOpq30,
    bgOpaque30Dark: colors.blackOpq30,

    bgAppBar: colors.appBar,
    bgAppBarDark: colors.appBarDark,
    bgAppBarOpq70: colors.appBarOpq70,
    bgAppBarOpq70Dark: colors.appBarDarkOpq70,
    bgCardHeader1: colors.lightRed2,
    bgCardHeader: colors.mediumRed2, // applied to price card header to match Faq color

    textLabel: colors.darkGray, // applied to Text Label
    textValue: colors.black,
    textValue1: colors.white,
    textValue2: colors.mediumRed,
    textValue3: colors.darkRed,
    textFooter: colors.whiteOpq90,

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
    borderCardSection: colors.lightGrayOpq,

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
