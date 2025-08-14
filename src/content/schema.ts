import { z } from 'zod'

export const ServiceSchema = z.object({
  id: z.string(),
  name: z.string(),
  excerpt: z.string(),
  description: z.string(),
  icon: z.string(),
  features: z.array(z.string()),
  price: z.string().optional(),
  duration: z.string().optional(),
  image: z.string().optional(),
})

export const ProjectSchema = z.object({
  id: z.string(),
  title: z.string(),
  excerpt: z.string(),
  description: z.string(),
  cover: z.string(),
  images: z.array(z.string()),
  tags: z.array(z.string()),
  city: z.string(),
  state: z.string(),
  zipCode: z.string(),
  date: z.string(),
  services: z.array(z.string()),
  beforeImage: z.string().optional(),
  afterImage: z.string().optional(),
})

export const TestimonialSchema = z.object({
  id: z.string(),
  name: z.string(),
  text: z.string(),
  rating: z.number().min(1).max(5),
  city: z.string(),
  date: z.string(),
  project: z.string().optional(),
  avatar: z.string().optional(),
})

export const TeamMemberSchema = z.object({
  id: z.string(),
  name: z.string(),
  role: z.string(),
  bio: z.string(),
  image: z.string(),
  credentials: z.array(z.string()),
  experience: z.string(),
  specialties: z.array(z.string()),
})

export const ServiceAreaSchema = z.object({
  city: z.string(),
  state: z.string(),
  zipCode: z.string(),
  county: z.string(),
  distance: z.number(),
})

export type Service = z.infer<typeof ServiceSchema>
export type Project = z.infer<typeof ProjectSchema>
export type Testimonial = z.infer<typeof TestimonialSchema>
export type TeamMember = z.infer<typeof TeamMemberSchema>
export type ServiceArea = z.infer<typeof ServiceAreaSchema>
