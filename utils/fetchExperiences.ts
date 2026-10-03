import { Experience } from "../typings";
import { groq } from "next-sanity";
import { sanityClient } from "../sanity";

const query = groq`
  *[_type == "experience"] {
    ...,
    technologies[]->
  }
`;

export const fetchExperiences = async(): Promise<Experience[]> => {
  const experiences: Experience[] = await sanityClient.fetch(query);

  return experiences;
};
