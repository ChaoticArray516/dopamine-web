import { defineDocumentType, makeSource } from "contentlayer2/source-files";

export const Site = defineDocumentType(() => ({
  name: "Site",
  filePathPattern: "sites/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    slug: { type: "string", required: true },
    description: { type: "string", required: true },
    category: { type: "string", required: true },
    url: { type: "string", required: true },
    ratingValue: { type: "number", required: false },
    reviewBody: { type: "string", required: false },
    reviewDate: { type: "date", required: false },
    featuredImage: { type: "string", required: false },
    affiliateMerchant: { type: "string", required: false },
  },
  computedFields: {
    route: {
      type: "string",
      resolve: (site) => `/sites/${site.slug}`,
    },
  },
}));

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: "blog/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    slug: { type: "string", required: true },
    excerpt: { type: "string", required: true },
    datePublished: { type: "date", required: true },
    dateModified: { type: "date", required: false },
    featuredImage: { type: "string", required: false },
    category: { type: "string", required: false },
    tags: { type: "list", of: { type: "string" }, required: false },
    faq: { type: "json", required: false },
  },
  computedFields: {
    route: {
      type: "string",
      resolve: (post) => `/blog/${post.slug}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "./content",
  documentTypes: [Site, Post],
});
