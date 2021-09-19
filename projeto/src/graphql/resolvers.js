//import { fileLoader, mergeResolvers } from 'merge-graphql-schemas'
import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge';
import { loadFilesSync } from '@graphql-tools/load-files';
import path from 'path'

// Acessar a pasta modules, buscar em qualquer pasta, arquivos com a extensão
// .gql 
const resolversArry = loadFilesSync(path.join(__dirname, 'modules', '**', 'resolvers.js'))
const resolversDefs = mergeResolvers(resolversArry)
export default  resolversDefs
