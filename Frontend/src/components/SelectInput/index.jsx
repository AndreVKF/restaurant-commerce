import { PiCaretDownBold } from "react-icons/pi"

import { Container } from "./styles"

const index = ({ options }) => {
  return (
    <Container>
      <select>
        {options &&
          options.map((option, idx) => {
            return (
              <option key={idx} value={option.value}>
                {option.label}
              </option>
            )
          })}
      </select>
      <PiCaretDownBold />
    </Container>
  )
}

export default index
