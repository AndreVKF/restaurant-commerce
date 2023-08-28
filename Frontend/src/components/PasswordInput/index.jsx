import { useState } from "react"
import { FiEyeOff, FiEye } from "react-icons/fi"

import { Container } from "./styles"

const PasswordInput = ({ children, ...rest }) => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <Container>
      {children}

      <input type={showPassword ? "text" : "password"} {...rest} />
      {showPassword ? (
        <FiEye onClick={() => setShowPassword(false)} />
      ) : (
        <FiEyeOff onClick={() => setShowPassword(true)} />
      )}
    </Container>
  )
}

export default PasswordInput
