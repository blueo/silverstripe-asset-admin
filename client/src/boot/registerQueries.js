import Injector from 'lib/Injector';
import readFilesQuery from 'state/files/readFilesQuery.gql';

const registerQueries = () => {
  Injector.query.register('readFilesQuery', readFilesQuery);
  Injector.query.register('test', 'test123');
};

export default registerQueries;
