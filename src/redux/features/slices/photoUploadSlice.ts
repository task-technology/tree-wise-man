import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface PhotoUploadState {
  uploading: boolean;
  photoURL: string | null;
  error: any;
  successMessage: string | null; // Add this line
}

const initialState: PhotoUploadState = {
  uploading: false,
  photoURL: null,
  error: null,
  successMessage: null, // Add this line
};

export const uploadPhoto = createAsyncThunk(
  "photoUpload/uploadPhoto",
  async (file: File, thunkAPI) => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append(
        "upload_preset",
        process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!
      );

      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Failed to upload image");
      }

      const data = await response.json();
      return { url: data.secure_url, message: "Image Uploaded Successfully!" };
    } catch (error) {
      return thunkAPI.rejectWithValue({
        message: error instanceof Error ? error.message : "Unknown error",
      });
    }
  }
);

export const deletePhoto = createAsyncThunk(
  "photoUpload/deletePhoto",
  async (publicId: string, thunkAPI) => {
    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/image/destroy`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            public_id: publicId,
            api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY!,
            api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET!,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete image");
      }

      return publicId;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        message: error instanceof Error ? error.message : "Unknown error",
      });
    }
  }
);

const photoUploadSlice = createSlice({
  name: "photoUpload",
  initialState,
  reducers: {
    resetState: (state) => {
      state.uploading = false;
      state.photoURL = null;
      state.error = null;
      state.successMessage = null; // Reset successMessage on state reset
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(uploadPhoto.pending, (state) => {
        state.uploading = true;
        state.error = null;
        state.photoURL = null;
        state.successMessage = null; // Reset successMessage on pending
      })
      .addCase(uploadPhoto.fulfilled, (state, action) => {
        state.uploading = false;
        state.photoURL = action.payload.url; // Update photoURL
        state.successMessage = action.payload.message; // Set successMessage
      })
      .addCase(uploadPhoto.rejected, (state, action) => {
        state.uploading = false;
        state.error = action.payload as { message: string };
        state.successMessage = null; // Clear successMessage on error
      })
      .addCase(deletePhoto.pending, (state) => {
        state.uploading = true;
        state.error = null;
        state.successMessage = null; // Clear successMessage on pending
      })
      .addCase(deletePhoto.fulfilled, (state) => {
        state.uploading = false;
        state.photoURL = null;
        state.successMessage = "Image deleted successfully!"; // Set successMessage
      })
      .addCase(deletePhoto.rejected, (state, action) => {
        state.uploading = false;
        state.error = action.payload as { message: string };
        state.successMessage = null; // Clear successMessage on error
      });
  },
});
export const { resetState } = photoUploadSlice.actions;
export const selectPhotoUploadState = (state: RootState) => state.photoUpload;
export default photoUploadSlice.reducer;
