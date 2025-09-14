import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    backgroundColor: string;
    textColor: string;
    footerBackgroundColor: string;
    headerBackgroundColor: string;
    postBackgroundColor: string;
  }
}
