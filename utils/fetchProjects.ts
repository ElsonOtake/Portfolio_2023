import { Project } from "../typings";
import { groq } from "next-sanity";
import { sanityClient } from "../sanity";

const query = groq`
  *[_type == "project"] {
    ...,
    technologies[]->
  }
`;

export const fetchProjects = async(): Promise<Project[]> => {
  const projects: Project[] = await sanityClient.fetch(query);

  return projects;
};
