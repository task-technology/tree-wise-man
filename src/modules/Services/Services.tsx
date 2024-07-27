"use client";
import Card from "@components/Card";
import Form from "./partials/Form/Form";
import Image from "next/image";
import Button from "@components/Button";

const Services = () => {
  const mockResults = [
    {
      id: 1,
      name: "Example Business 1",
      address: "123 Main St",
      city: "Example City",
      state: "EX",
      zip: "12345",
      logo: "/logo.png",
      companyJoinDate: "22/1/2024", // Example logo
      ownerName: "John Smith",
    },
    {
      id: 2,
      name: "Example Business 2",
      address: "456 Elm St",
      city: "Another City",
      state: "AN",
      zip: "67890",
      logo: "/logo.png", // Example logo
      companyJoinDate: "22/1/2024",
      ownerName: "John",
    },
    // Add more mock results as needed
  ];
  return (
    <div className="bg-gray-100 min-h-screen flex mt-20 justify-center">
      <div className="max-w-7xl w-full flex flex-col items-center space-y-8 px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-4">
          Find Services by Zip Code and State
        </h2>
        <Form />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 w-full">
          {mockResults.map((result, index) => (
            <Card
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300 p-3"
            >
              <div className="flex gap-5 justify-between">
                <div className="">
                  <Image
                    height={180}
                    width={180}
                    src={result.logo}
                    alt="Company Logo"
                    className="mr-4 rounded-full"
                  />
                </div>
                <div className="flex-1">
                  <div className="space-y-1">
                    <h1 className="text-xl font-bold">{result?.name}</h1>
                    <p className="text-sm">
                      <strong>Joining Date:</strong> {result?.companyJoinDate}
                    </p>
                    <p className="py-3">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Consequatur commodi pariatur illum ea hic magni cumque!
                      Dignissimos consequatur tenetur soluta.
                    </p>
                  </div>
                  <div className="flex justify-between items-center mt-5">
                    <div className="flex items-center gap-2 ">
                      <div>
                        <Image
                          height={35}
                          width={35}
                          src={result.logo}
                          alt="Company Logo"
                          className="rounded-full"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm">
                          {result?.ownerName}
                        </h3>
                        <h3 className="text-xs">CEO</h3>
                      </div>
                    </div>
                    <div>
                      <Button className="!py-1 !px-5">Contact Us</Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
