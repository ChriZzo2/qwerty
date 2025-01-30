import 'styled-components';

import {ITheme} from "@/types/theme.ts";

declare module 'styled-components' {
    export type DefaultTheme = ITheme
}