import React, { useState } from "react";
import ImageUpload from "./ImageUpload";
import ImagePreview from "./ImagePreview";
import { enhancedImageAPI } from "../utils/enhanceImageAPI"; // Import the API function
// Import the API function to enhance the image
const Home = () => {
  const [uploadImage, setUploadImage] = useState(null);
  const [enhancedImage, setEnhancedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const uploadImageHandler = async (file) => {
    setUploadImage(URL.createObjectURL(file));
    setLoading(true);
    //it convert the file(image) into a URL that can be used to display the image
    //calling api to enhance the image
    try {
      const enhancedURL = await enhancedImageAPI(file);
      //it calls the enhancedImageAPI function and waits for the result
      setEnhancedImage(enhancedURL.image);
      setLoading(false);
    } catch (err) {
      console.log(err);
      alert("Error while enhancing the image.Please try later");
    }
  };
  // define the uploadImageHandler function to handle the image upload
  // and set the uploadImage state with the selected file
  //this function will be called when the user selects an image file
  //this function functionality is defined in the ImageUplod.jsx file
  return (
    <>
      <ImageUpload uploadImageHandler={uploadImageHandler} />
      <ImagePreview
        loading={loading}
        uploaded={uploadImage}
        enhanced={enhancedImage}
      />
    </>
  );
};

export default Home;
