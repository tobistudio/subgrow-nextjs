import { z } from "zod"

export const UpgradeFormSchema = z.object({
  id: z.number(),
})
