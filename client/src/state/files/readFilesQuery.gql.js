import gql from 'graphql-tag';
import { fileInterface as fileInterfaceFragment, file, folder } from 'lib/fileFragments';

// GraphQL Query
const query = gql`
  query ReadFiles($limit:Int!, $offset:Int!, $rootFilter: FileFilterInput,
    $childrenFilter: FileFilterInput, $sortBy:[ChildrenSortInputType]
  ) {
    readFiles(filter: $rootFilter) {
      pageInfo {
        totalCount
      }
      edges {
        node {
          ...FileInterfaceFields
          ...FileFields
          ...on Folder {
            children(limit:$limit, offset:$offset, filter: $childrenFilter, sortBy:$sortBy) {
              pageInfo {
                totalCount
              }
              edges {
                node {
                  ...FileInterfaceFields
                  ...FileFields
                  ...FolderFields
                }
              }
            }
            parents {
              id
              title
            }
          }
        }
      }
    }
  }
  ${fileInterfaceFragment}
  ${file}
  ${folder}
  `;

export default query;
