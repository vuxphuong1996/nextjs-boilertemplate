import '@material-ui/core/styles';

declare module '@material-ui/core/styles/createPalette' {
    interface Palette {
        black?: string;
        white?: string;
        orange?: string;
        textColor?: {
            lightGrey?: string;
            lightBlack?: string;
            black?: string;
            grey?: string;
        };
        backgroundColor?: {
            brightWhite?: string;
            white?: string;
            grey?: string;
            greyLight?: string;
        };
    }
    interface PaletteOptions {
        black?: string;
        white?: string;
        orange?: string;
        textColor?: {
            lightGrey?: string;
            lightBlack?: string;
            black?: string;
            grey?: string;
        };
        backgroundColor?: {
            brightWhite?: string;
            white?: string;
            grey?: string;
            greyLight?: string;
        };
    }
}

declare module '@material-ui/core/styles/createTypography' {
    interface Typography {
        fontSizeText?: {
            type1?: string;
            type2?: string;
            type3?: string;
            type4?: string;
            type5?: string;
            type6?: string;
        };
        fontWeight?: {
            type1?: string;
            type2?: string;
            type3?: string;
            type4?: string;
        };
        lineHeight?: {
            type1?: string;
            type2?: string;
            type3?: string;
            type4?: string;
            type5?: string;
            type6?: string;
        };
        other?: {
            overflow?: string;
            textTransform?: string;
        };
    }
    interface TypographyOptions {
        fontSizeText?: {
            type1?: string;
            type2?: string;
            type3?: string;
            type4?: string;
            type5?: string;
            type6?: string;
        };
        fontWeight?: {
            type1?: string;
            type2?: string;
            type3?: string;
            type4?: string;
        };
        lineHeight?: {
            type1?: string;
            type2?: string;
            type3?: string;
            type4?: string;
            type5?: string;
            type6?: string;
        };
        other?: {
            overflow?: string;
            textTransform?: string;
        };
    }
}
