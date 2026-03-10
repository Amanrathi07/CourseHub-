import z from "zod";

export const courseLevels = ["Beginner" , "Intermediate" , "Advanced"] as const ;

export const CourseStatus = ["Draft" , "Published" , "Archived"] as const ;

export const courseSchema = z.object({
    title : z.string().min(4).max(100) ,
    description : z.string().min(4) ,
    smallDescription :  z.string().min(4).max(200) ,
    fileKey : z.string().min(1) ,
    price : z.coerce.number().min(1) ,
    duration : z.coerce.number().min(1).max(500) ,
    level : z.enum(courseLevels) ,

    category : z.string().min(1) ,
    slug :  z.string().min(1) ,

    status :z.enum(courseLevels)
})