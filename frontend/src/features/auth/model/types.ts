import { z } from "zod";
import { authSchema } from "./validation";

export type AuthFormData = z.infer<ReturnType<typeof authSchema>>;

export type AuthFormProps = {
  type: "login" | "registration";
};
