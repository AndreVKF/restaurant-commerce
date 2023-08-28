import { PiCaretDownBold } from "react-icons/pi"

import { Container } from "./styles"

const SelectInput = ({ options, ...rest }) => {
  return (
    <Container>
      <select {...rest}>
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

export default SelectInput
