export const handleFormSubmit = (
  e: React.FormEvent,
  companyNameRef: any,
  zipCodeRef: any,
  companyWebsiteRef: any,
  selectState: any,
  aboutCompanyRef: any,
  isPublic: any,
  file: any
) => {
  e.preventDefault();

  const fullData = {
    title: companyNameRef.current?.value || "",
    urlLink: companyWebsiteRef.current?.value || "",
    zipCode: zipCodeRef.current?.value || "",
    state: selectState,
    content: aboutCompanyRef.current?.value || "",
    published: isPublic,
    image: file,
    authorId: "222",
  };

  console.log(fullData);
  // Handle form data submission here
};
