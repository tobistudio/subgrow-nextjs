/**
 * Pricing plans config here
 */
// /apps/facebook
export const plansConfig = {
  level1:
  {
    role: ["ADMIN", "USER", "LEVEL1", "LEVEL2", "LEVEL3"],
    price: {
      usd: 5,
      eur: 7
    },
    annual_discount: 10
  },
  level2: {
    role: ["ADMIN", "USER", "LEVEL1", "LEVEL2", "LEVEL3"],
    price: {
      usd: 15,
      eur: 17
    },
    annual_discount: 15
  },
  level3: {
    role: ["ADMIN", "USER", "LEVEL3"],
    price: {
      usd: 25,
      eur: 27
    },
    annual_discount: 20
  },
}
