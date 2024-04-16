import { Client, Account, ID, Databases, Storage } from "appwrite";

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(process.env.65ebd363cbaab679958a!);


const account = new Account(client);
const databases = new Databases(client);
const storage = new Storage(client);


export {client , account, databases, storage, ID};