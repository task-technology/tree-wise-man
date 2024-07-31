import { showSwal } from "../../../../../../../shared/helpers/SwalShower";

export const handleFormSubmit = async (
  e: React.FormEvent,
  nameRef: any,
  emailRef: any,
  companyNameRef: any,
  contactNoRef: any,
  photoURL: any,
  designationRef: any,
  createUser: any,
  token: string | null
) => {
  e.preventDefault();

  const fullData = {
    name: nameRef.current?.value || "",
    email: emailRef.current?.value || "",
    company: companyNameRef.current?.value || "",
    contactNo: contactNoRef.current?.value || "",
    profileImage: photoURL,
    designation: designationRef.current?.value || "",
  };
  console.log(fullData);
  const result = await createUser({ fullData, token });
  showSwal(result);

  console.log(result);
  // Handle form data submission here
};
