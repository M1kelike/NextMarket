export const formatPrice = (price: number): string => {
  return `$${price.toFixed(2)}`
}

export const getCurrentYear = (): number => {
  return new Date().getFullYear()
}
