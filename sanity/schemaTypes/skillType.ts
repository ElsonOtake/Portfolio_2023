import {defineField, defineType} from 'sanity'

export const skillType = defineType({
  name: "skill",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "title",
      description: "Title of skill",
      type: "string",
    }),
    defineField({
      name: "progress",
      title: "Progress",
      type: "string",
      description: "Progress of skill from 0 to 100%",
      validation: rule => rule.required().min(0).max(100),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
})
