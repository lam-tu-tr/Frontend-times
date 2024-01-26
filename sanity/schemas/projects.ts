import {
  ArrayRule,
  Rule,
  StringRule,
  TextRule,
  UrlRule,
  defineField,
  defineType,
} from "sanity";

export default defineType({
  name: "projects",
  title: "Projects",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: StringRule) => Rule.required().error("Required"),
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule: TextRule) =>
        Rule.required().max(132).error("Max 132 characters"),
    }),
    defineField({
      name: "link",
      title: "Link",
      type: "url",
      validation: (Rule: UrlRule) => Rule.required(),
    }),
    {
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule: Rule) => Rule.required().max(4),
    },
    defineField({
      name: "image",
      title: "Project Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    }),
  ],

  preview: {
    select: {
      title: "title",
      media: "mainImage",
    },
  },
});
