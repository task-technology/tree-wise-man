import { showSwal } from "../../../../shared/helpers/SwalShower";

export const handleForgetPassword = async (
  e: React.FormEvent,
  email: string,
  forgetPassword: any
) => {
  e.preventDefault();
  const fullData = {
    email,
  };
  const result = await forgetPassword({ fullData });
  console.log(result);
  const isSwalTrue = showSwal(result);
  if (isSwalTrue) {
    console.log("hello");
  }
};
