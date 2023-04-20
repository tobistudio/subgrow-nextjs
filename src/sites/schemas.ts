import { z } from "zod"

export const CreateBlahasddSchema = z.object({
  // template: __fieldName__: z.__zodType__(),
})
export const UpdateBlahasddSchema = z.object({
  id: z.number(),
  // template: __fieldName__: z.__zodType__(),
})

export const DeleteBlahasddSchema = z.object({
  id: z.number(),
})
