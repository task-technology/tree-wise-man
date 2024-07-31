import { setToLocalStorage } from "../../../../shared/helpers/local_storage";
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
    setToLocalStorage("accessToken", result?.data?.data?.accessToken);
    setToLocalStorage("refreshToken", result?.data?.data?.refreshToken);
    router.push("/");
  }
  console.log(result.data?.data?.accessToken);
};
