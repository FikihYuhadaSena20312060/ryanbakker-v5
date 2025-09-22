import {
  orderRankField,
  orderRankOrdering,
} from "@sanity/orderable-document-list";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "project",
  title: "Project",
  type: "document",
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({ type: "project" }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required().min(2).max(120),
    }),
    defineField({
      name: "lastUpdated",
      title: "Last Updated",
      type: "date",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "coverImageDesktop",
      title: "Cover Image Desktop",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt text",
          type: "string",
          description: "The primary large image for the project.",
          validation: (Rule) => Rule.required().min(5).max(160),
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "coverImageMobile",
      title: "Cover Image Mobile",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt text",
          type: "string",
          description: "The primary small image for the project.",
          validation: (Rule) => Rule.required().min(5).max(160),
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "isUnderConstruction",
      title: "Under Construction",
      type: "boolean",
      description: "Mark true if the project is currently under construction.",
      initialValue: false,
    }),
    defineField({
      name: "isFeatured",
      title: "Featured",
      type: "boolean",
      description: "Mark true to feature the project on the home page.",
    }),
    defineField({
      name: "githubUrl",
      title: "GitHub Repository URL",
      type: "url",
      validation: (Rule) =>
        Rule.uri({
          scheme: ["http", "https"],
          allowRelative: false,
        })
          .required()
          .error("Please enter a valid GitHub URL"),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
      validation: (Rule) => Rule.required().min(10).max(300),
    }),
    defineField({
      name: "brief",
      title: "Brief",
      description: "Explanation of the purpose and functions of the web app.",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "desktopImages",
      title: "Desktop Images",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({
              name: "alt",
              title: "Alt text",
              type: "string",
              validation: (Rule) => Rule.required().min(5).max(160),
            }),
          ],
        },
      ],
      options: { layout: "grid" },
      validation: (Rule) => Rule.min(1),
    }),
    defineField({
      name: "mobileImages",
      title: "Mobile Images",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({
              name: "alt",
              title: "Alt text",
              type: "string",
              validation: (Rule) => Rule.required().min(5).max(160),
            }),
          ],
        },
      ],
      options: { layout: "grid" },
      validation: (Rule) => Rule.min(1),
    }),
    defineField({
      name: "tools",
      title: "Tools / Technologies",
      type: "array",
      of: [
        defineField({
          name: "tool",
          title: "Tool",
          type: "string",
          validation: (Rule) => Rule.required().min(1).max(50),
        }),
      ],
      validation: (Rule) => Rule.unique().min(1),
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "coverImage",
      subtitle: "githubUrl",
    },
  },
});
