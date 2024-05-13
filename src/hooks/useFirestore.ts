import { useEffect, useState } from "react"
import { collection, query, where, onSnapshot, orderBy } from "firebase/firestore";
import { db } from "../firebase/config";

type Image = {
    createdAt: Date,
    userEmail: string,
    imageUrl: string
}

// Render images in the user's gallery
const useFirestore = (collectionName: string) => {
    const [docs, setDocs] = useState<Image[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
        const getData = async () => {
            try {

                const q = query(collection(db,collectionName), orderBy("createdAt", "desc"))
                const unsubscribe = onSnapshot(q, (querySnapshot) => {
                    const images: Image[] = [];
                    querySnapshot.forEach((doc) => {
                        images.push(doc.data());
                    });
                    setDocs(images)
                });

            } catch (error) {
                console.error(error)
            }
        }

        getData()
    }, [collectionName])

    return {

        docs, isLoading
    }

}

export default useFirestore
