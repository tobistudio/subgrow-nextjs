import { z } from "zod"

// Different schemas for different apps keeps things flexible
export const CreateFacebookSchema = z.object({
  id: z.number(),
  name: z.string(), // label
  site_name: z.string().default("facebook"), // lowercase slug defaults to facebook
  // description: z.string(), // no need
  api_key: z.string(),
  api_secret: z.string(),
  show_feed: z.boolean(), // show feed
  show_share: z.boolean(), // show share buttons
  show_sub: z.boolean(), // forget???
})

export const CreateInstagramSchema = z.object({
  id: z.number(),
  name: z.string(), // label
  site_name: z.string().default("instagram"), // lowercase slug defaults to facebook
  // description: z.string(), // no need
  api_key: z.string(),
  api_secret: z.string(),
  show_feed: z.boolean(), // show feed
  show_share: z.boolean(), // show share buttons
  show_sub: z.boolean(), // forget???
})

export const CreateServiceSchema = z.object({
  userId: z.number(),
  name: z.string(),
  site_name: z.string(),
  description: z.string(),
  api_key: z.string(),
  api_secret: z.string(),
  show_feed: z.boolean(),
  show_share: z.boolean(),
  show_sub: z.boolean(),
})


export const UpdateServiceSchema = z.object({
  id: z.number(),
  // template: __fieldName__: z.__zodType__(),
})

export const DeleteServiceSchema = z.object({
  id: z.number(),
})

