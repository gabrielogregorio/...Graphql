
//import { fileLoader, mergeTypes } from 'merge-graphql-schemas'
import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge';
import { loadFilesSync } from '@graphql-tools/load-files';
import path from 'path'

// Acessar a pasta modules, buscar em qualquer pasta, arquivos com a extensão
// .gql 
const typeArry = loadFilesSync(path.join(__dirname, 'modules', '**', '*.gql'))
const typeDefs = mergeTypeDefs(typeArry)
export default  typeDefs
