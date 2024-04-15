import { storage } from "@/appwrite"


const getUri =  async (image:Image) =>{
    const url = storage.getFilePreview(image.bucketID,image.fileId)
    return url;
}

export default getUri;