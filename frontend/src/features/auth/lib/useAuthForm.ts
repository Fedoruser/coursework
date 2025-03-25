import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { AuthFormData } from "../model/types";
import { authSchema } from "../model/validation";

export const useAuthForm = (type: "login" | "registration") => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthFormData>({
    resolver: zodResolver(authSchema(type)),
    defaultValues: {
      username: "",
      password: "",
      confirmPassword: type === "registration" ? "" : undefined,
      remember: false,
    },
  });

  const onSubmit = (data: AuthFormData) => {
    console.log("Форма успешно отправлена:", data);
    navigate("/dashboard");
  };

  return { control, handleSubmit, errors, onSubmit };
};
