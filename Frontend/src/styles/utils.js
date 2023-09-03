import { css } from "styled-components"

export const poppins_100_regular = css`
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 140%;
  letter-spacing: 0;
  text-decoration: 0;
`

export const poppins_300_regular = css`
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 2.4rem;
  line-height: 140%;
  letter-spacing: 0;
  text-decoration: 0;
`

export const poppins_100_medium = css`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 2.4rem;
  letter-spacing: 0;
  text-decoration: 0;
`

export const poppins_200_medium = css`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 2rem;
  line-height: 160%;
  letter-spacing: 0;
  text-decoration: 0;
`

export const poppins_400_medium = css`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 3.2rem;
  line-height: 140%;
  letter-spacing: 0;
  text-decoration: 0;
`

export const poppins_500_medium = css`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 4rem;
  line-height: 140%;
  letter-spacing: 0;
  text-decoration: 0;
`

export const poppins_300_bold = css`
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 140%;
  letter-spacing: 0;
  text-decoration: 0;
`

export const roboto_smallest_regular = css`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 160%;
  letter-spacing: 0;
  text-decoration: 0;
`

export const roboto_smaller_regular = css`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 160%;
  letter-spacing: 0;
  text-decoration: 0;
`

export const roboto_smaller_bold = css`
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 1.4rem;
  line-height: 160%;
  letter-spacing: 0;
  text-decoration: 0;
`

export const roboto_small_spaced = css`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 160%;
  letter-spacing: 0;
  text-decoration: 0;
`
export const roboto_small_regular = css`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 100%;
  letter-spacing: 0;
  text-decoration: 0;
`

export const roboto_big_bold = css`
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 2rem;
  line-height: 160%;
  letter-spacing: 0;
  text-decoration: 0;
`

export const roboto_bigger_bold = css`
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 2.4rem;
  line-height: normal;
  letter-spacing: 0;
  text-decoration: 0;
`

export const roboto_biggest_regular = css`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 3.2rem;
  line-height: 160%;
  letter-spacing: 0;
  text-decoration: 0;
`

export const roboto_giant_bold = css`
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 4.2rem;
  line-height: normal;
  letter-spacing: 0;
  text-decoration: 0;
`

export const image_smaller = css`
  width: 8.8rem;
  height: 8.8rem;
  object-fit: cover;
`

export const image_small = css`
  width: 17.6rem;
  height: 17.6rem;
  object-fit: cover;
`

export const image_medium = css`
  width: 26.4rem;
  height: 26.4rem;
  object-fit: cover;
`

export const image_big = css`
  width: 38.9rem;
  height: 38.9rem;
  object-fit: cover;
`

export const breakpoints = {
  sx: "420px",
  sm: "768px",
  fullscreen: "1600px",
}

export const devices = {
  sx: `(max-width: ${breakpoints.sx})`,
  sm: `(max-width: ${breakpoints.sm})`,
  desktop: `(min-width: ${breakpoints.sm})`,
  fullscreen: `(min-width: ${breakpoints.fullscreen})`,
}

export const screen_reader_only = css`
  width: 1px;
  height: 1px;
  position: absolute;
  overflow: hidden;

  margin: -1px;
  padding: 0;
  border: 0;
  appearance: none;
`

export const desktop_main_container_padding = css`
  padding-left: calc(8rem + 2vw);
  padding-right: calc(8rem + 2vw);
`
