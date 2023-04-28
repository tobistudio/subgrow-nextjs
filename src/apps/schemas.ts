import { z } from "zod"

export const CreateServiceSchema = z.object({
  // template: __fieldName__: z.__zodType__(),
})
export const UpdateServiceSchema = z.object({
  id: z.number(),
  // template: __fieldName__: z.__zodType__(),
})

export const DeleteServiceSchema = z.object({
  id: z.number(),
})
