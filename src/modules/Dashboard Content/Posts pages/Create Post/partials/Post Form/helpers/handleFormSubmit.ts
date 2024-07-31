import { showSwal } from "../../../../../../../shared/helpers/SwalShower";

export const handleFormSubmit = async (
  e: React.FormEvent,
  companyNameRef: any,
  zipCodeRef: any,
  companyWebsiteRef: any,
  selectState: any,
  aboutCompanyRef: any,
  isPublic: any,
  photoURL: any,
  createService: any,
  token: string | null
) => {
  e.preventDefault();

  const fullData = {
    title: companyNameRef.current?.value || "",
    urlLink: companyWebsiteRef.current?.value || "",
    zipCode: zipCodeRef.current?.value || "",
    state: selectState?.state,
    content: aboutCompanyRef.current?.value || "",
    published: isPublic === "public" ? true : false,
    image: photoURL,
  };

  const result = await createService({ fullData, token });
  showSwal(result);

  console.log(fullData);
  // Handle form data submission here
};
