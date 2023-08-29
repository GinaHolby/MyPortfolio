import createClient from "@sanity/client";


const client = createClient({
  projectId: "yz3kgj6k",
  dataset: "production",
  apiVersion: "2021-10-21",
  useCdn: false
});






export async function load({ params }) {
  const recipieslug = params.slug
  

 
    const data = await client.fetch(`*[slug.current == "${recipieslug}"]{
      title,
    "cover": image.asset->url,
    process,
    projectTitle,
    shortProjectDescription,
    figmalink,
    figmalinkhide,
    nettsidelink,
    hidenettsidelink,
    length,
    notionlink,
    hidenotionlink,

    problemTitle,
    problemIntroduction,
    problemDescriptions,
    numberOfColumns,

    solutionTitle,
    solutionIntroduction,
    solutionDescription,
    }`);
  
    if (data) {
      return {
        recipies: data
      };
    }
    return {
      status: 600,
      body: new Error("Internal Server Error")
    };

  }
  