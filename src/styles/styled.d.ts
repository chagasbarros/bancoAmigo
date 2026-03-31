import 'styled-components';

// 1. Defina a interface que descreve o seu tema
declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            primary: string;
            secondary: string;
            success: string;
            danger: string;
            background: string;
            textPrimary: string;
            textSecondary: string;
            border: string;
            warning: string;
        };
        spacing: {
            sm: string;
            md: string;
            lg: string;
            xl: string;
        };
        borderRadius: string;
        fontSize: {
            small: string;
            medium: string;
            large: string;
            huge: string;
        };
    }
}