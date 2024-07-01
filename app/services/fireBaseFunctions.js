import { storage } from "../firebaseConfig";
import {ref, getDownloadURL} from "firebase/storage"
import { db } from "../firebaseConfig";
import { get } from "firebase/database";

export const FetchImageUrl = async (imageName) => {
    const imageRef = ref(storage, `project-images/${imageName}`)

    try {
        const url = await getDownloadURL(imageRef)
        return url
    } catch (error) {
        console.error("Error fetching image", error)
        return null
    }
}

export const fetchIndividualProject = async (route) => {
    const projectRef = ref(db, `${route}`);
    const snapshot = await get(projectRef)

    try {
        if (snapshot.exists()) {
            const object = snapshot.val();
            return object
            
          }
    } catch (error) {
        console.error("Error fetching data", error)
    }
}

export const FetchAboutImageUrl = async (imageName) => {
    const imageRef = ref(storage, `about-images/${imageName}.png`)

    try {
        const url = await getDownloadURL(imageRef)
        return url

    } catch (error) {
        console.error("Error fetching image", error)
        return null
    }

}
