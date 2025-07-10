import z from "zod";

export const CreateUserSchema = z.object({
  username: z.string().min(3).max(50),
  password: z.string().min(8).max(30),
  email: z.string().email()
})

export const SignInSchema = z.object({
  username: z.string().min(3).max(50),
  password: z.string().min(8).max(30),
})

export const CreateRoomSchema = z.object({
  name: z.string().min(3).max(20)
})