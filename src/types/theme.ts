export interface ITheme {
    colors: {
        primary: string
        secondary: string
        success: string
        danger: string

        bg: string

        fontLink: string

        buttons: {
            hover: {
                primary: string
                secondary: string
            }
        }
    }
}