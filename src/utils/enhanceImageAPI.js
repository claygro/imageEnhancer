const API_KEY = "wx5bw7awu1ne1iqm3";
const BASE_URL = "https://techhk.aoscdn.com/";
import axios from "axios";

export const enhancedImageAPI = async (file) => {
  try {
    const taskId = await uploadImage(file);
    console.log("Image uploaded successfully", taskId);

    // Poll for enhanced image
    const enhancedImageData = await pollForEnhancedImage(taskId);
    console.log("Enhanced image retrieved successfully:", enhancedImageData);

    return enhancedImageData;
  } catch (err) {
    console.error("Error:", err);
    throw err;
  }
};

const uploadImage = async (file) => {
  // Upload image
  const formData = new FormData();
  formData.append("image_file", file);

  const { data } = await axios.post(
    `${BASE_URL}/api/tasks/visual/scale`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        "X-API-KEY": API_KEY,
      },
    }
  );

  if (!data?.data?.task_id) {
    throw new Error("Failed to upload image");
  }

  return data.data.task_id;
};

const fetchEnhancedImage = async (taskId) => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/api/tasks/visual/scale/${taskId}`,
      {
        headers: {
          "X-API-KEY": API_KEY,
        },
      }
    );

    return data.data; // Return data instead of just logging it
  } catch (error) {
    console.error("Error fetching enhanced image:", error);
    throw error;
  }
};

const pollForEnhancedImage = async (taskId, retries = 0) => {
  try {
    const result = await fetchEnhancedImage(taskId);

    if (!result) {
      throw new Error("No response from server");
    }

    if (result.state == 4) {
      console.log("Processing...");
      if (retries >= 20) {
        throw new Error("Max retries reached. Please try later.");
      }

      // Wait for 2 seconds
      await new Promise((resolve) => setTimeout(resolve, 2000));
      return pollForEnhancedImage(taskId, retries + 1);
    }

    return result;
    console.log(result);
    // Return enhanced image URL
  } catch (error) {
    console.error("Polling error:", error);
    throw error;
  }
};
