import upgrade from "pages/account/upgrade"

it("stripe page shows up", () => {
  const result = upgrade()

  expect(result).toBe(true)
})
