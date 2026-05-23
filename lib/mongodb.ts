import { MongoClient, type Db } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB ?? "omnitrix";
const options = {
  maxPoolSize: 10,
  serverSelectionTimeoutMS: 5000,
};

let client: MongoClient | undefined;
let clientPromise: Promise<MongoClient> | undefined;

export function getMongoClient() {
  if (!uri) {
    throw new Error("Missing MONGODB_URI environment variable.");
  }

  if (process.env.NODE_ENV === "development") {
    const globalWithMongo = global as typeof globalThis & {
      _mongoClientPromise?: Promise<MongoClient>;
    };

    if (!globalWithMongo._mongoClientPromise) {
      client = new MongoClient(uri, options);
      globalWithMongo._mongoClientPromise = client.connect();
    }

    return globalWithMongo._mongoClientPromise;
  }

  if (!clientPromise) {
    client = new MongoClient(uri, options);
    clientPromise = client.connect();
  }

  return clientPromise;
}

export async function getMongoDb(): Promise<Db> {
  const mongoClient = await getMongoClient();
  return mongoClient.db(dbName);
}
