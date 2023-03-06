import {
  Container,
  Heading,
  Stack,
  Text,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Select,
  Radio,
  RadioGroup,
  Checkbox,
  Button,
  Textarea,
  Image,
  useToast,
} from "@chakra-ui/react";
import {
  ArrowForwardIcon,
  ArrowBackIcon,
  EmailIcon,
  PhoneIcon,
  AttachmentIcon,
  CheckCircleIcon,
} from "@chakra-ui/icons";
import { useForm } from "react-hook-form";

import FormAlert from "../../components/FormAlert";

import { categoryOptions } from "../../assets/categories";
import { countryOptions } from "../../assets/countries";
import { v4 as uuidv4 } from "uuid";
import { BarLoader } from "react-spinners";

import Head from "next/head";
import React, { createRef, useState } from "react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";

const CreateProperty = () => {
  const supabase = useSupabaseClient();
  const session = useSession();

  const imageInputRef = createRef();
  const toast = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "all" });

  const [image, setImage] = useState();

  const [page, setPage] = useState(0);
  const [preview, setPreview] = useState();
  const [houses, setHouses] = useState("");

  // Testing data states (TO BE DELETED)
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [status, setStatus] = useState("");
  const [address, setAddress] = useState("");
  const [county, setCounty] = useState("");
  const [postal_code, setPostalCode] = useState(0);
  const [country, setCountry] = useState("");
  const [category, setCategory] = useState("");
  const [bedrooms, setBedrooms] = useState(0);
  const [baths, setBaths] = useState(0);
  const [surface_area, setSurfaceArea] = useState(0);
  const [property_briefing, setPropertyBriefing] = useState("");
  const [additional_info, setAdditionalInfo] = useState("");
  const [checked, setChecked] = useState([]);
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");

  // Upload photos
  const [uploads, setUploads] = useState([]);
  const [isUploading, setIsUploading] = useState(false);

  function createProperty(event) {
    event.preventDefault();
    supabase
      .from("houses")
      .insert({
        author: session.user.id,
        title,
        price,
        status,
        address,
        country,
        postal_code,
        county,
        category,
        bedrooms,
        baths,
        surface_area,
        property_briefing,
        additional_info,
        email,
        telephone,
        photos: uploads,
      })
      .then((res) => {
        if (!res.error) {
          setTitle("");
          setPrice("");
          setStatus("");
          setAddress("");

          // uploads for photos
          setUploads([]);

          toast({
            title: "Property Created Successfully",
            description: "Go to Buy Page to see your property listing",
            // status: error,
            duration: 5000,
            isClosable: true,
          });
          return;
        }
      });
  }

  // Add Property Photos
  async function uploadPhotos(ev) {
    const files = ev.target.files;
    if (files.length > 0) {
      setIsUploading(true);
      for (const file of files) {
        const newName = Date.now() + file.name;
        const result = await supabase.storage
          .from("photos")
          .upload(newName, file);
        if (result.data) {
          const url =
            process.env.NEXT_PUBLIC_SUPABASE_URL +
            "/storage/v1/object/public/photos/" +
            result.data.path;
          setUploads((prevUploads) => [...prevUploads, url]);
        } else {
          console.log(result);
        }
      }
      setIsUploading(false);
    }
  }

  // Appliances Checkboxes
  const handleCheck = (event) => {
    let updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

  // RegEx for email and phone verification
  const numericPattern = /^-?\d*\.?\d*$/;

  const emailPattern =
    /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i;

  const phonePattern = /^\+(?:[0-9] ?){8,14}[0-9]$/;

  // const handleImageChange = (event) => {
  //   if (event.target.files[0]) {
  //     const image = event.target.files[0];
  //     new Compressor(image, {
  //       quality: 0.8,
  //       success: (compressedImage) => {
  //         setImage(compressedImage);
  //         setPreview(URL.createObjectURL(compressedImage));
  //       },
  //     });
  //   }
  // };

  // async function handleImageChange(ev) {
  //   const files = ev.target.files;
  //   if (files.length > 0) {
  //     setIsUploading(true);
  //     for (const file of files) {
  //       const newName = Date.now() + file.name;
  //       const result = await supabase.storage
  //         .from("photos")
  //         .upload(newName, file);
  //       if (result.data) {
  //         const url =
  //           process.env.NEXT_PUBLIC_SUPABASE_URL +
  //           "/storage/v1/object/public/photos/" +
  //           result.data.path;
  //         setUploads((prevUploads) => [...prevUploads, url]);
  //       } else {
  //         console.log(result);
  //       }
  //     }
  //     setIsUploading(false);
  //   }
  // }

  // const uploadImage = async(imageData, estateData, toast) => {

  // }

  const goNextPage = () => {
    if (page === 6) return;
    setPage((page) => page + 1);
  };

  const goBack = () => {
    if (page === 0) return;
    setPage((page) => page - 1);
  };

  const onSubmit = (data) => {
    supabase
      .from("houses")
      .insert({ houses, photos: uploads })
      .select("*")
      .then((response) => {
        if (!response.error) {
          setContent("");
          setUploads([]);
          if (onPost) {
            onPost();
          }
        }
      });
    if (!data) {
      toast({
        title: "No Image Selected",
        description: "Please choose a display image for the estate",
        // status: error,
        duration: 5000,
        isClosable: true,
      });
      return;
    }
    const estateData = {
      ...data,
      totalRating: 0,
      reviews: 0,
    };

    console.log(estateData);
    console.log(uploads);
    console.log(toast);
    return { data, estateData, toast };
  };
  return (
    <>
      <Head>
        <title>Create Property Listing | African Real Estate</title>
      </Head>

      {/* testing data */}

      <form className="mb-20 grid gap-5">
        <h2 className="mb-5 text-xl text-slate-800">
          Enter Property Information below
        </h2>
        <div class="group relative z-0 mb-6 w-full">
          <input
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            type="text"
            name="property title"
            id="propeprty title"
            class="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
            placeholder=""
            required
          />
          <label
            for="property-title"
            class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
          >
            Property Title
          </label>
        </div>
        <div class="group relative z-0 mb-6 w-full">
          <input
            value={price}
            onChange={(event) => setPrice(event.target.value)}
            type="number"
            name="price"
            id="price"
            placeholder=""
            class="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
          />
          <label
            for="property-title"
            class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
          >
            Price ($)
          </label>
        </div>
        <fieldset>
          <legend className="sr-only">Status</legend>
          <h2 className="text-semibold my-3 text-lg text-blue-600 lg:text-xl">
            Status
          </h2>

          <div class="mb-4 flex items-center">
            <input
              id="rent"
              type="radio"
              name="status"
              class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:focus:bg-blue-600 dark:focus:ring-blue-600"
            />
            <label
              for="rent"
              class="ml-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Rent
            </label>
          </div>
          <div class="mb-4 flex items-center">
            <input
              id="sale"
              type="radio"
              name="status"
              class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:focus:bg-blue-600 dark:focus:ring-blue-600"
            />
            <label
              for="sale"
              class="ml-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Sale
            </label>
          </div>
        </fieldset>
        {/* Address */}
        <div class="group relative z-0 mb-6 w-full">
          <input
            value={address}
            onChange={(event) => setAddress(event.target.value)}
            type="number"
            name="price"
            id="price"
            placeholder=""
            class="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
          />
          <label
            for="property-title"
            class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
          >
            Price ($)
          </label>
        </div>
        {isUploading && (
          <div>
            <BarLoader />
          </div>
        )}
        {uploads.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-3">
            {uploads.map((upload) => (
              <div key={upload}>
                <img
                  src={upload}
                  alt="Upload"
                  className="h-24 rounded-md object-cover"
                />
              </div>
            ))}
          </div>
        )}
        <input
          type="file"
          multiple
          placeholder="Upload property images"
          onChange={uploadPhotos}
        />
        <button
          onClick={createProperty}
          type="submit"
          className="font-initial rounded-md bg-slate-700 p-3 text-xl text-white transition-colors hover:border-2 hover:border-slate-700 hover:bg-white hover:text-slate-700"
        >
          Submit Property
        </button>
      </form>

      {/* Multi-step form 
      // <form onSubmit={handleSubmit}>
      //   <Stack spacing={10} width="100%">
      //     {page === 0 && (
      //       <>
      //         <Heading>Basic Information</Heading>
      //         <FormControl>
    
      //           <FormLabel>Title</FormLabel>
      //           <Input
      //             value={title}
      //             onChange={(event) => setTitle(event.target.value)}
      //             variant="flushed"
      //             placeholder="ex: Modern Apartment Downtown..."
      //             name="title"
      //             {...register("title", {
      //               required: "Please enter a title",
      //               minLength: { value: 8, message: "Title is too short" },
      //             })}
      //           />
      //           {errors.title && <FormAlert title={errors.title.message} />}
      //         </FormControl>
      //         <FormControl>
      //           <FormLabel>Price</FormLabel>
      //           <InputGroup>
      //             <InputLeftElement
      //               pointerEvents="none"
      //               color="gray.300"
      //               fontSize="1.2em"
      //             >
      //               $
      //             </InputLeftElement>
      //             <Input
      //               onChange={(event) => setPrice(event.target.value)}
      //               variant="flushed"
      //               name="price"
      //               type="number"
      //               {...register("price", {
      //                 required: "Please enter a price",
      //                 min: {
      //                   value: 3,
      //                   message: "Price too short or invalid",
      //                 },
      //                 pattern: {
      //                   value: numericPattern,
      //                   message: "Invalid price format",
      //                 },
      //                 valueAsNumber: true,
      //               })}
      //             />
      //           </InputGroup>
      //           {errors.price && <FormAlert title={errors.price.message} />}
      //         </FormControl>
      //         <FormControl>
      //           <FormLabel>Status</FormLabel>
      //           <RadioGroup name="status">
      //             <Stack direction="row">
      //               <Radio
      //                 onChange={(event) => setStatus(event.target.value)}
      //                 name="status"
      //                 {...register("status", {
      //                   required: "Please check a status for the estate",
      //                 })}
      //               >
      //                 Sale
      //               </Radio>
      //               <Radio
      //                 onChange={(event) => setStatus(event.target.value)}
      //                 name="status"
      //                 {...register("status", {
      //                   required: "Please check a status for the estate",
      //                 })}
      //               >
      //                 Rent
      //               </Radio>
      //             </Stack>
      //           </RadioGroup>
      //           {errors.status && <FormAlert title={errors.status.message} />}
      //         </FormControl>
      //       </>
      //     )}

      //     {page === 1 && (
      //       <>
      //         <Heading>Address Information</Heading>
      //         <FormControl>
      //           <FormLabel>Address</FormLabel>
      //           <Input
      //             onChange={(event) => setAddress(event.target.value)}
      //             variant="flushed"
      //             name="address"
      //             {...register("address", {
      //               required: "Please enter an address",
      //               minLength: {
      //                 value: 8,
      //                 message: "Address name too short",
      //               },
      //             })}
      //           />
      //           {errors.address && <FormAlert title={errors.address.message} />}
      //         </FormControl>
      //         <FormControl>
      //           <FormLabel>State/County</FormLabel>
      //           <Input
      //             onChange={(event) => setCounty(event.target.value)}
      //             variant="flushed"
      //             name="state/county"
      //             {...register("province", {
      //               required: "Please enter a state or county",
      //               minLength: {
      //                 value: 1,
      //                 message: "State/County name too short",
      //               },
      //             })}
      //           />
      //           {errors.province && (
      //             <FormAlert title={errors.province.message} />
      //           )}
      //         </FormControl>
      //         <FormControl>
      //           <FormLabel>Postal Code</FormLabel>
      //           <Input
      //             onChange={(event) => setPostalCode(event.target.value)}
      //             variant="flushed"
      //             name="postal_code"
      //             {...register("postal_code", {
      //               required: "Enter a valid postal code",
      //               minLength: {
      //                 value: 4,
      //                 message: "Enter a valid postal code",
      //               },
      //             })}
      //           />
      //           {errors.postal_code && (
      //             <FormAlert title={errors.postal_code.message} />
      //           )}
      //         </FormControl>
      //         <FormControl>
      //           <FormLabel>Country</FormLabel>
      //           <Select
      //             onChange={(event) => setCountry(event.target.value)}
      //             variant="filled"
      //             placeholder="Select a country"
      //             name="country"
      //             {...register("country", { required: "Select a country" })}
      //           >
      //             {countryOptions.map((country) => (
      //               <option key={country.key} value={country.value}>
      //                 {country.text}
      //               </option>
      //             ))}
      //           </Select>
      //           {errors.country && <FormAlert title={errors.country.message} />}
      //         </FormControl>
      //       </>
      //     )}

      //     {page === 2 && (
      //       <>
      //         <Heading>Property Information</Heading>
      //         <FormControl>
      //           <FormLabel>Category</FormLabel>
      //           <Select
      //             onChange={(event) => setCategory(event.target.value)}
      //             variant="filled"
      //             placeholder="Select a category"
      //             name="category"
      //             {...register("category", {
      //               required: "Select a category",
      //             })}
      //           >
      //             {categoryOptions.map((category) => (
      //               <option key={category.key} value={category.value}>
      //                 {category.text}
      //               </option>
      //             ))}
      //           </Select>
      //           {errors.category && (
      //             <FormAlert title={errors.category.message} />
      //           )}
      //         </FormControl>
      //         <FormControl>
      //           <FormLabel>Bedrooms</FormLabel>
      //           <InputGroup>
      //             <Input
      //               onChange={(event) => setBedrooms(event.target.value)}
      //               type="number"
      //               variant="flushed"
      //               name="bedrooms"
      //               {...register("surface_area", {
      //                 required: "Enter the number of bedrooms of the property",
      //                 min: {
      //                   value: 2,
      //                   message: "Bedrooms number or invalid",
      //                 },
      //                 pattern: {
      //                   value: numericPattern,
      //                   message: "Invalid bedrooms number data format",
      //                 },
      //                 valueAsNumber: true,
      //               })}
      //             />
      //             <InputRightElement
      //               pointerEvents="none"
      //               color="gray.300"
      //               fontSize="1.2em"
      //             >
      //               bedrooms
      //             </InputRightElement>
      //           </InputGroup>
      //           {errors.bedrooms && (
      //             <FormAlert title={errors.bedrooms.message} />
      //           )}
      //         </FormControl>
      //         <FormControl>
      //           <FormLabel>Baths</FormLabel>
      //           <InputGroup>
      //             <Input
      //               onChange={(event) => setBaths(event.target.value)}
      //               type="number"
      //               variant="flushed"
      //               name="baths"
      //               {...register("surface_area", {
      //                 required: "Enter the number of baths of the property",
      //                 min: {
      //                   value: 2,
      //                   message: "Baths number or invalid",
      //                 },
      //                 pattern: {
      //                   value: numericPattern,
      //                   message: "Invalid baths number data format",
      //                 },
      //                 valueAsNumber: true,
      //               })}
      //             />
      //             <InputRightElement
      //               pointerEvents="none"
      //               color="gray.300"
      //               fontSize="1.2em"
      //             >
      //               baths
      //             </InputRightElement>
      //           </InputGroup>
      //           {errors.baths && <FormAlert title={errors.baths.message} />}
      //         </FormControl>
      //         <FormControl>
      //           <FormLabel>Surface Area</FormLabel>
      //           <InputGroup>
      //             <Input
      //               onChange={(event) => setSurfaceArea(event.target.value)}
      //               type="number"
      //               variant="flushed"
      //               name="surface_area"
      //               {...register("surface_area", {
      //                 required: "Enter the surface area of the property",
      //                 min: {
      //                   value: 2,
      //                   message: "Small surface area or invalid",
      //                 },
      //                 pattern: {
      //                   value: numericPattern,
      //                   message: "Invalid surface area data format",
      //                 },
      //                 valueAsNumber: true,
      //               })}
      //             />
      //             <InputRightElement
      //               pointerEvents="none"
      //               color="gray.300"
      //               fontSize="1.2em"
      //             >
      //               sqft
      //             </InputRightElement>
      //           </InputGroup>
      //           {errors.surface_area && (
      //             <FormAlert title={errors.surface_area.message} />
      //           )}
      //         </FormControl>
      //       </>
      //     )}

      //     {page === 3 && (
      //       <>
      //         <Heading>Description</Heading>
      //         <FormControl>
      //           <FormLabel>Property Briefing</FormLabel>
      //           <Textarea
      //             onChange={(event) => setPropertyBriefing(event.target.value)}
      //             variant="filled"
      //             size="lg"
      //             maxH="sm"
      //             resize="vertical"
      //             name="property_briefing"
      //             {...register("property_briefing", {
      //               required: "Write a little briefing about the property",
      //               minLength: { value: 20, message: "Briefing too short" },
      //             })}
      //           />
      //           {errors.property_briefing && (
      //             <FormAlert title={errors.property_briefing.message} />
      //           )}
      //         </FormControl>
      //         <FormControl>
      //           <FormLabel>Additional Information</FormLabel>
      //           <Textarea
      //             onChange={(event) => setAdditionalInfo(event.target.value)}
      //             variant="filled"
      //             size="lg"
      //             maxH="sm"
      //             resize="vertical"
      //             name="additional_info"
      //             {...register("additional_info")}
      //           />
      //         </FormControl>
      //       </>
      //     )}

      //     {page === 4 && (
      //       <>
      //         <Heading>Appliances</Heading>
      //         <Stack spacing={4} direction={["column", "row"]}>
      //           <Checkbox
      //             name="cooling"
      //             {...register("cooling")}
      //             onChange={handleCheck}
      //           >
      //             Swimming Pool
      //           </Checkbox>
      //           <Checkbox
      //             name="heating"
      //             {...register("heating")}
      //             onChange={handleCheck}
      //           >
      //             Heating
      //           </Checkbox>
      //           <Checkbox
      //             name="internet"
      //             {...register("internet")}
      //             onChange={handleCheck}
      //           >
      //             Internet
      //           </Checkbox>
      //           <Checkbox
      //             name="furniture"
      //             {...register("furniture")}
      //             onChange={handleCheck}
      //           >
      //             Furniture
      //           </Checkbox>
      //           <Checkbox
      //             name="parking"
      //             {...register("parking")}
      //             onChange={handleCheck}
      //           >
      //             Parking
      //           </Checkbox>
      //           <Checkbox
      //             name="parking"
      //             {...register("parking")}
      //             onChange={handleCheck}
      //           >
      //             Flower Garden
      //           </Checkbox>
      //         </Stack>
      //       </>
      //     )}

      //     {page === 5 && (
      //       <>
      //         <Heading>Media</Heading>

      //         {isUploading && (
      //           <div>
      //             <BarLoader />
      //           </div>
      //         )}

      //         {uploads.length > 0 && (
      //           <div className="flex flex-wrap items-center justify-center gap-3">
      //             {uploads.map((upload) => (
      //               <div key={upload}>
      //                 <img
      //                   src={upload}
      //                   alt="Upload"
      //                   className="h-24 rounded-md object-cover"
      //                 />
      //               </div>
      //             ))}
      //           </div>
      //         )}

      //         <Text color="gray.500" textAlign="center">
      //           Select display image
      //         </Text>
      //         <input
      //           ref={imageInputRef}
      //           type="file"
      //           multiple
      //           placeholder="Upload property images"
      //           onChange={uploadPhotos}
      //         />
      //         <Button
      //           leftIcon={<AttachmentIcon />}
      //           variant="ghost"
      //           colorScheme="blue"
      //           onClick={() => imageInputRef.current.click()}
      //         >
      //           Browse Images
      //         </Button>
      //       </>
      //     )}

      //     {page === 6 && (
      //       <>
      //         <Heading>Contact Information</Heading>
      //         <FormControl>
      //           <FormLabel>Email Address</FormLabel>
      //           <InputGroup>
      //             <InputLeftElement
      //               pointerEvents="none"
      //               color="gray.300"
      //               fontSize="1.2em"
      //             >
      //               <EmailIcon />
      //             </InputLeftElement>
      //             <Input
      //               onChange={(event) => setEmail(event.target.value)}
      //               variant="flushed"
      //               name="email"
      //               {...register("email", {
      //                 required: "Enter contact email address",
      //                 pattern: {
      //                   value: emailPattern,
      //                   message: "Invalid email format",
      //                 },
      //               })}
      //             />
      //           </InputGroup>
      //           {errors.email && <FormAlert title={errors.email.message} />}
      //         </FormControl>
      //         <FormControl>
      //           <FormLabel>Telephone</FormLabel>
      //           <InputGroup>
      //             <InputLeftElement
      //               pointerEvents="none"
      //               color="gray.300"
      //               fontSize="1.2em"
      //             >
      //               <PhoneIcon />
      //             </InputLeftElement>
      //             <Input
      //               onChange={(event) => setTelephone(event.target.value)}
      //               variant="flushed"
      //               name="telephone"
      //               placeholder="ex: +254XXXXX..."
      //               {...register("telephone", {
      //                 required: "Enter contact telephone number",
      //                 pattern: {
      //                   value: phonePattern,
      //                   message: "Invalid phone number format",
      //                 },
      //               })}
      //             />
      //           </InputGroup>
      //           {errors.telephone && (
      //             <FormAlert title={errors.telephone.message} />
      //           )}
      //         </FormControl>
      //       </>
      //     )}

      //     <Stack direction="row" spacing={2} alignSelf="center">
      //       {page > 0 && (
      //         <Button
      //           variant="ghost"
      //           leftIcon={<ArrowBackIcon />}
      //           onClick={goBack}
      //         >
      //           Back
      //         </Button>
      //       )}
      //       {page < 6 && (
      //         <Button
      //           variant="ghost"
      //           rightIcon={<ArrowForwardIcon />}
      //           onClick={goNextPage}
      //           isDisabled={!isValid}
      //         >
      //           Next
      //         </Button>
      //       )}
      //     </Stack>
      //     {page === 6 && (
      //       <Button
      //         onClick={createProperty}
      //         type="submit"
      //         leftIcon={<CheckCircleIcon />}
      //         colorScheme="green"
      //         isDisabled={!isValid}
      //       >
      //         Submit
      //       </Button>
      //     )}
      //   </Stack>
      // </form>
      */}
    </>
  );
};

export default CreateProperty;

// import React, { useState } from "react";

// const CreateProperty = () => {
//   const [title, setTitle] = useState("");

//   const [isDisabled, setIsDisabled] = useState(false);
//   return (
//     <>
//       <form className="my-8 rounded-md bg-gray-200 p-8">
//         {/* <h2 className="text-lg lg:text-2xl text-slate-700 font-semibold">Create a Listing</h2> */}
//         <div className="my-4 flex flex-col">
//           <textarea
//             name="title"
//             placeholder="Property Title"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             className="my-2 rounded-md bg-white p-4 text-lg"
//           ></textarea>
//         </div>
//         <div className={`flex items-center justify-between gap-2`}>
//           <p
//             className={`text-sm font-bold  ${
//               title.length > 300 ? "text-rose-500" : "text-slate-500"
//             }`}
//           >{`${title.length}/300`}</p>
//           <button
//             className="rounded-lg bg-indigo-500 py-2 px-6 text-sm font-semibold text-white disabled:opacity-25"
//             type="submit"
//             disabled={isDisabled}
//           >
//             Post Property
//           </button>
//         </div>
//       </form>
//     </>
//   );
// };

// export default CreateProperty;
