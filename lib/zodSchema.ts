import z from "zod";

export const courseLevels = ["Beginner", "Intermediate", "Advanced"] as const;

export const CourseStatus = ["Draft", "Published", "Archived"] as const;

export const courseSchema = z.object({
  title: z
    .string()
    .min(4, {
      message: "Title must be at least 4 characters.",
    })
    .max(100, {
      message: "Title cannot exceed 100 characters.",
    }),

  description: z.string().min(10, {
    message: "Description must be at least 10 characters.",
  }),

  smallDescription: z
    .string()
    .min(10, {
      message: "Short description must be at least 10 characters.",
    })
    .max(200, {
      message: "Short description cannot exceed 200 characters.",
    }),

  fileKey: z.string().min(1, {
    message: "Course thumbnail is required.",
  }),

  price: z.coerce.number().positive({
    message: "Price must be a positive number.",
  }),

  duration: z.coerce
    .number()
    .min(1, {
      message: "Duration must be at least 1 hour.",
    })
    .max(500, {
      message: "Duration cannot exceed 500 hours.",
    }),

  level: z.enum(courseLevels, {
    message: "Please select a course level.",
  }),

  category: z.string().min(1, {
    message: "Please select a category.",
  }),

  slug: z.string().min(1, {
    message: "Slug is required.",
  }),

  status: z.enum(CourseStatus, {
    message: "Please select a course status.",
  }),
});


export type courseSchemaType = z.input<typeof courseSchema>