import { type SchemaTypeDefinition } from 'sanity'

import {experienceType} from './experienceType'
import {skillType} from './skillType'
import {pageInfoType} from './pageInfoType'
import {socialType} from './socialType'
import {projectType} from './projectType'

export const schemaTypes = [
  skillType,
  pageInfoType,
  experienceType,
  socialType,
  projectType,
]

export const schema: { types: SchemaTypeDefinition[] } = {
  types: schemaTypes,
}
