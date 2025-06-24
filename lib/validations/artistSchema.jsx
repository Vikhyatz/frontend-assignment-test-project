import * as yup from "yup";

export const artistSchema = yup.object({
  fullName: yup.string()
    .required("Full name is required")
    .min(2, "Full name must be at least 2 characters")
    .max(50, "Full name must be less than 50 characters"),

  bio: yup.string()
    .required("Bio is required")
    .min(10, "Bio must be at least 10 characters")
    .max(500, "Bio must be less than 500 characters"),

  location: yup.string()
    .required("Location is required")
    .min(2, "Location name is too short"),

  feeRange: yup.string()
    .required("Please select a fee range"),

  category: yup.array()
    .min(1, "Please select at least one category"),

  language: yup.array()
    .min(1, "Please select at least one language"),
});
