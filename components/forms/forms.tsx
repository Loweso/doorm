"use client";
import axios from "axios";
import { usePathname } from "next/navigation";
import { IoMdCloudUpload } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { userStore } from "@/store/userStore";
import { useRouter } from "next/navigation";

interface FormValues {
  user_Id: string | undefined;
  listingName: string;
  rentType: string;
  address: string;
  availability: string;
  description: string;
  rent: number;
}

interface Amenities {
  amenities: string[];
}

export const Forms = () => {
  const router = useRouter();
  const user = userStore((state) => state.user);
  const [amenities, setAmenities] = useState<Amenities>({
    amenities: [],
  });
  const [formData, setFormData] = useState<FormValues>({
    user_Id: user?.user_ID,
    listingName: "",
    rentType: "boarding house",
    address: "",
    availability: "available",
    description: "",
    rent: 0,
  });

  const [room_image, setRoom_Image] = useState(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    if (name === "amenities") {
      // Split the input value by comma
      const amenityArray = value.split(",");
      setAmenities((prevData) => ({
        ...prevData,
        amenities: amenityArray,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRoom_Image(e.target.files[0]);
  };

  const convertBase64 = (file: any) => {
    if (file) {
      return new Promise((res, rej) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
          res(fileReader.result);
        };
        fileReader.onerror = (error) => {
          rej(error);
        };
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const base64 = (await convertBase64(room_image)) || null;

    const updatedFormData = {
      ...formData,
      roomAmenities,
      base64,
    };

    // Submit the form data
    console.log(updatedFormData);

    if (path === `/listing/new`) {
      try {
        await axios.post("http://localhost:5000/listing/new", updatedFormData);
      } catch (error) {
        console.error("Error inserting listing:", error);
      }
      router.push("/");
    } else if (path === `/listing/${params.dormId}/edit`) {
      try {
        await axios.put(
          `http://localhost:5000/edit/${params.dormId}`,
          updatedFormData
        );
      } catch (error) {
        console.error("Error inserting listing:", error);
      }
      router.push(`/listing/${params.dormId}`);
    }
  };

  const [roomAmenities, setRoomAmenities] = useState<string[]>([]);

  const handleAddAmenity = () => {
    if (roomAmenities.length < 3) {
      // Append the array of amenities and clear the field
      setRoomAmenities((prevAmenities) => [
        ...prevAmenities,
        ...amenities.amenities, // Append the array of amenities
      ]);

      // Reset the amenities array
      setAmenities({ amenities: [] });
    } else {
      // Display a message or handle the case where the limit is reached
      alert(`You can only add up to 3 amenities.`);
    }
  };

  const handleDeleteAmenity = (index: number) => {
    setRoomAmenities((prevAmenities) =>
      prevAmenities.filter((_, i) => i !== index)
    );
  };

  const params = useParams<{ dormId: string }>();
  const path = usePathname();

  const [dormInfo, setDormInfo] = useState<any>(null);

  useEffect(() => {
    if (path === `/listing/${params.dormId}/edit`) {
      const fetchDormInfo = async () => {
        try {
          const response = await axios.get(
            `http://localhost:5000/listing/read/${params.dormId}`
          );
          setFormData(response.data);
          setRoomAmenities(response.data.features);
        } catch (error) {
          console.error("Error fetching dorm information:", error);
        }
      };

      fetchDormInfo();
    }
  }, [path, params.dormId]);

  return (
    <form
      onSubmit={handleSubmit}
      className="w-1/2 p-8 border-[1px] rounded-lg bg-accentColor-earthyBrown mt-12 mb-12"
    >
      {path == "/listing/new" && (
        <h1 className="text-center font-bold text-4xl text-accentColor-earthyYellow">
          Rent out your space...
        </h1>
      )}
      {path == `/listing/${params.dormId}/edit` && (
        <h1 className="text-center font-bold text-4xl text-accentColor-earthyYellow">
          Edit your space...
        </h1>
      )}
      <div className="space-y-3 mt-5">
        <div className="flex gap-x-4">
          <div className="flex flex-col w-4/6">
            <label
              htmlFor="listingName"
              className="text-xs text-content-white font-medium"
            >
              Name for listing:
            </label>
            <input
              type="text"
              id="listingName"
              name="listingName"
              value={formData.listingName}
              onChange={handleChange}
              placeholder="E.g. the tortured dormies"
              className="rounded p-2 bg-bgColor text-content-darkBrown font-medium"
            />
          </div>
          <div className="flex flex-col w-2/6">
            <label
              htmlFor="rentType"
              className="text-xs text-content-white font-medium"
            >
              Rent type:
            </label>
            <div className="relative">
              <select
                name="rentType"
                id="rentType"
                value={formData.rentType}
                onChange={handleChange}
                className="rounded p-2 bg-bgColor w-full cursor-pointer"
              >
                <option value="boarding_house">Boarding House</option>
                <option value="apartment">Apartment</option>
                <option value="dormitory">Dormitory</option>
                <option value="condominium">Condominium</option>
              </select>

              <IoMdArrowDropdown
                size={30}
                color="white"
                className="absolute pointer-events-none bottom-1 right-1 border-[1px] rounded-lg border-content-darkBrown  bg-accentColor-lightBlue font-semibold text-xl text-content-white shadow-md"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="address"
            className="text-xs text-content-white font-medium"
          >
            Full Address:
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="E.g. Gorordo Avenue, Lahug, Cebu City"
            className="rounded p-2 bg-bgColor"
          />
        </div>

        <div className="flex flex-col">
          <div className="flex gap-x-4 w-full">
            <div
              className={`flex flex-col  ${
                path === "/listing/new" ? "w-full" : "w-3/5"
              } relative`}
            >
              <label
                htmlFor="amenities"
                className="text-xs text-content-white font-medium"
              >
                Room Amenities:
              </label>
              <input
                type="text"
                id="amenities"
                name="amenities"
                value={amenities.amenities}
                onChange={handleChange}
                placeholder="E.g. Can cook, Own CR, 3 beds..."
                className="rounded p-2 bg-bgColor"
              />
              <div className="absolute bottom-1 right-2">
                <button
                  type="button"
                  onClick={handleAddAmenity}
                  className="border-[1px] border-content-darkBrown rounded-lg bg-accentColor-lightBlue font-semibold text-lg text-content-white px-2 "
                >
                  ADD
                </button>
              </div>
            </div>

            {path === `/listing/${params.dormId}/edit` && (
              <div className="flex flex-col w-2/5 ">
                <label
                  htmlFor="availability"
                  className="text-xs text-content-white font-medium"
                >
                  Availability:
                </label>
                <div className="relative ">
                  <select
                    name="availability"
                    id="availability"
                    value={formData.availability}
                    onChange={handleChange}
                    className="rounded p-2 bg-bgColor w-full cursor-pointer"
                  >
                    <option value="available">Available for rent</option>
                    <option value="occupied">Occupied</option>
                  </select>
                  <IoMdArrowDropdown
                    size={30}
                    color="white"
                    className="absolute pointer-events-none bottom-1 right-1 border-[1px] rounded-lg border-content-darkBrown  bg-accentColor-lightBlue font-semibold text-xl text-content-white shadow-md"
                  />
                </div>
              </div>
            )}
          </div>
          {roomAmenities.length > 0 && (
            <div className="flex w-3/5 gap-x-2 mt-1">
              {roomAmenities.map((amenity, index) => (
                <div
                  className="flex bg-accentColor-lightBlue border-content-darkBrown border-[1px] px-2 rounded-full text-content-white gap-x-1"
                  key={index}
                >
                  <span key={index} className="text-xs  mt-1     ">
                    {amenity}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleDeleteAmenity(index)}
                  >
                    <RxCross2 />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="description"
            className="text-xs text-content-white font-medium"
          >
            Description:
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="rounded p-2 bg-bgColor"
          ></textarea>
        </div>

        <div className="flex gap-x-8 w-full">
          <div className="w-3/5">
            <span className="text-xs text-content-white font-medium">
              Price Range for Monthly Rent (in PHP):
            </span>
            <div className="flex gap-x-4 w-full">
              <div className="flex flex-col w-6/12">
                <input
                  type="number"
                  id="rent"
                  name="rent"
                  value={formData.rent}
                  onChange={handleChange}
                  className="rounded p-2 bg-bgColor"
                />
                <label
                  htmlFor="rent"
                  className="text-xs text-content-white font-medium"
                >
                  Starting minimum
                </label>
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-1 w-2/5">
            <p className="text-xs text-content-white font-medium mb-1">
              Listing image (JPG,PNG):
            </p>
            <label
              htmlFor="room_image"
              className="flex border-2 rounded p-2 bg-bgColor font-bold text-content-darkBrown items-center gap-x-2 cursor-pointer"
            >
              <IoMdCloudUpload size={20} />
              Upload an image
            </label>
            <input
              type="file"
              id="room_image"
              name="room_image"
              onChange={(e) => handleImageChange(e)}
              className="hidden"
            />
          </div>
        </div>

        <div className="flex justify-center">
          <button className="border-2 border-content-darkBrown rounded p-1 px-4 bg-accentColor-lightBlue font-semibold text-xl text-content-white shadow-md">
            POST
          </button>
        </div>
      </div>
    </form>
  );
};
