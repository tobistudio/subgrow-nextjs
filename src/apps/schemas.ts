import { z } from "zod"

export const CreateFacebookSchema = z.object({
  id: z.number(),
  name: z.string(),
  site_name: z.string(),
  description: z.string(),
  api_key: z.string(),
  api_secret: z.string(),
  show_feed: z.string(),
  show_share: z.string(),
  show_sub: z.string(),
})

export const CreateServiceSchema = z.object({
  id: z.number(),
  name: z.string(),
  site_name: z.string(),
  description: z.string(),
  api_key: z.string(),
  api_secret: z.string(),
  show_feed: z.string(),
  show_share: z.string(),
  show_sub: z.string(),
})


export const UpdateServiceSchema = z.object({
  id: z.number(),
  // template: __fieldName__: z.__zodType__(),
})

export const DeleteServiceSchema = z.object({
  id: z.number(),
})

