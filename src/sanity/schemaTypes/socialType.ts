import {defineField, defineType} from 'sanity'

export const socialType = defineType({
  name: "social",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "title",
      description: "platform for social media",
      type: "string",
    }),
    defineField({
      name: "url",
      title: "Url",
      type: "url",
    }),
  ],
})
