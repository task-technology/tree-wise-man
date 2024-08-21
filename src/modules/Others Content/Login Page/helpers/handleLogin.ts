import { getUserInfo } from "../../../../shared/auth/auth.service";
import { setToCookie } from "../../../../shared/helpers/local_storage";
import { showSwal } from "../../../../shared/helpers/SwalShower";

export const handleLogin = async (
  e: React.FormEvent,
  email: string,
  password: string,
  login: any,
  router: any
) => {
  e.preventDefault();
  const fullData = {
    email,
    password,
  };
  const result = await login({ fullData });
  const isSwalTrue = showSwal(result);
  if (isSwalTrue) {
    setToCookie("accessToken", result?.data?.data?.accessToken);
    setToCookie("refreshToken", result?.data?.data?.refreshToken);
    const user: any = getUserInfo();
    if (user?.role === "admin") {
      router.push("/dashboard/home");
    } else {
      router.push("/dashboard/profile/my-profile");
    }
  }
};
