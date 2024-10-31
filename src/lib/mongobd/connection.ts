import { MongoClient } from "mongodb";
async function getInfo(
  connectionURL: string,
  DatabaseName: string,
  CollectionName: string
) {
  const connection = await MongoClient.connect(connectionURL);
  const connectToDb = connection.db(DatabaseName).collection(CollectionName);
  return connectToDb;
}
export default getInfo;
