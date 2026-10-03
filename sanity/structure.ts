import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Blog')
    .items([
      S.documentTypeListItem('experience').title('Experience'),
      S.documentTypeListItem('pageInfo').title('PageInfo'),
      S.documentTypeListItem('project').title('Project'),
      S.documentTypeListItem('skill').title('Skill'),
      S.documentTypeListItem('social').title('Social'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['experience', 'pageInfo', 'project', 'skill', 'social'].includes(item.getId()!),
      ),
    ])
