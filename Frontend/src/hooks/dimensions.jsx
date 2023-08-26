import { useState, useEffect } from "react"

export function useGetDimensions() {
  const getCurrentDimensions = () => {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    }
  }

  const [dimensions, setDimensions] = useState(getCurrentDimensions())

  useEffect(() => {
    const updateDimension = () => {
      setDimensions(getCurrentDimensions())
    }
    window.addEventListener("resize", updateDimension)

    return () => {
      window.removeEventListener("resize", updateDimension)
    }
  }, [dimensions])

  return dimensions
}
