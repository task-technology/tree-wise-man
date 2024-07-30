export const handleFormSubmit = (
  e: React.FormEvent,
  nameRef: any,
  emailRef: any,
  companyNameRef: any,
  contactNoRef: any,
  file: any,
  designationRef: any
) => {
  e.preventDefault();

  const fullData = {
    name: nameRef.current?.value || "",
    email: emailRef.current?.value || "",
    company: companyNameRef.current?.value || "",
    contactNo: contactNoRef.current?.value || "",
    image: file,
    designation: designationRef.current?.value || "",
  };

  console.log(fullData);
  // Handle form data submission here
};
