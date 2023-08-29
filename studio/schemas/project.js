export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "projectTitle",
      title: "Project Title",
      type: "string",
    },
    {
      name: "shortProjectDescription",
      title: "Short Project Description",
      type: "string",
    },
    {
      name: "projectColor1",
      title: "Project Color 1",
      type: "string",
    },
    
    {
      name: "figmalink",
      title: "Figma Link",
      type: "string",
    },
    {
      name: "figmalinkhide",
      title: "Hide Figma Link write: hide",
      type: "string",
    },

    {
      name: "nettsidelink",
      title: "Link nettside",
      type: "string",
    },
    {
      name: "hidenettsidelink",
      title: " Hide Link nettside write: hide",
      type: "string",
    },
    {
      name: "notionlink",
      title: "Link notion",
      type: "string",
    },
    {
      name: "hidenotionlink",
      title: " Hide Link notion write: hide",
      type: "string",
    },

    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "projectTitle",
        maxLength: 96,
      },
    },
    {
      name: "hero_image",
      title: "Hero Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    //* PROBLEMS
    /* {
      name: "problemTitle",
      title: "Problem Title",
      type: "string",
    },*/
    {
      name: "problemIntroduction",
      title: "Introduction of the Problem",
      type: "string",
    }, 

    {
      name: "problemDescriptions",
      title: "Description of the Problem",
      type: "string",
    },
    {
      name: "length",
      title: "Length",
      type: "string",
    },
    /* {
      name: "numberOfColumns",
      title: "number of columns",
      type: "string",
    }, */
    /* {
      name: "problemDescription",
      title: "Description of the Problem",
      type: "array",
      of: [
        {
          title: "HiHi",
          name: "hehe",
          type: "object",
          fields: [{ name: "tmp", title: "beskrivelse", type: "blockContent" }],
        },
      ],
    },*/

    //* SOLUTION
    /* {
      name: "solutionTitle",
      title: "Solutions Title",
      type: "string",
    },
    {
      name: "solutionIntroduction",
      title: "Introduction of the Solution",
      type: "string",
    }, */
    {
      name: "solutionDescription",
      title: "Description of the Solution",
      type: "string",
    },
    //*TODO legge inn en link til figam fil og prototype
    //*TODO Design process Dubble Dimond
    //TODO Results
    //* REFLECTIONS
    {
      name: "reflectionTitle",
      title: "Reflection Title",
      type: "string",
    },
  ],
  preview: {
    select: {
      title: "projectTitle",
      media: "image",
    },
  },
};
