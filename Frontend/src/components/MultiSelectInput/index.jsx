import { Container } from "./styles"
import Select, { components } from "react-select"

import theme from "../../styles/theme"
import { useEffect } from "react"

const MultiSelectInput = ({ options, defaultValue, ...rest }) => {
  const customStyles = {
    control: (base, state) => ({
      ...base,
      padding: "0.8rem",
      background: `${theme.COLORS.DARK_900}`,
      border: "none",
      "&:focus": {
        border: "none",
        outline: "none",
      },
    }),
    menu: (base) => ({
      ...base,
      borderRadius: 0,
      marginTop: 0,
    }),
    option: (base, state) => ({
      ...base,
      background: state.isFocused
        ? `${theme.COLORS.DARK_600}`
        : `${theme.COLORS.DARK_900}`,
      color: `${theme.COLORS.LIGHT_100}`,
      "&:active": {
        backgroundColor: `${theme.COLORS.DARK_500}`,
      },
      cursor: "pointer",
    }),
    valueContainer: (base, state) => ({
      ...base,
      overflow: "hidden",
    }),
    menuList: (base, state) => ({
      ...base,
      padding: 0,
    }),
    multiValue: (base) => ({
      ...base,
      backgroundColor: `${theme.COLORS.LIGHT_600}`,
      padding: "0.8rem 1.6rem",
      borderRadius: "0.8rem",
    }),
    multiValueLable: (base) => ({
      ...base,
      color: `${theme.COLORS.LIGHT_100}`,
      fontFamily: "Roboto, sans-serif",
      fontSize: "1.2rem",
      fontWeight: "400",
    }),
    multiValueRemove: (base) => ({
      ...base,
      cursor: "pointer",
      color: `${theme.COLORS.LIGHT_100}`,
      fontSize: "1.2rem",
      ":hover": {
        backgroundColor: `${theme.COLORS.LIGHT_600}`,
        color: `${theme.COLORS.LIGHT_100}`,
      },
    }),
    noOptionsMessage: (base) => ({
      ...base,
      background: `${theme.COLORS.DARK_900}`,
      color: `${theme.COLORS.LIGHT_100}`,
    }),
  }

  const NoOptionsMessage = (props) => {
    return (
      <components.NoOptionsMessage {...props}>
        <span>Não existem opções!</span>
      </components.NoOptionsMessage>
    )
  }

  return (
    <Container>
      <Select
        options={options}
        components={{ NoOptionsMessage }}
        styles={customStyles}
        defaultValue={defaultValue}
        isMulti
        isSearchable
        isClearable
        {...rest}
      ></Select>
    </Container>
  )
}

export default MultiSelectInput
