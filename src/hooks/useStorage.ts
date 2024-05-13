import { useState } from "react"
import { db, storage } from "../firebase/config"
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage"
// random name generator
import { v4 as uuidv4 } from 'uuid';
import { addDoc, collection } from "firebase/firestore";
import { useAuth } from "./useAuth";

const useStorage = () => {
    const [progress, setProgress] = useState<number>(0)
    const [error, setError] = useState<Error | null>(null)
    const { user } = useAuth()
    // console.log('USER --->', user)

    // Will be run when Upload handleSubmit is triggered
    const startUpload = (file: File) => {
        if (!file) {
            return
        }

        const fileId = uuidv4()

        // -- grabs file type (JPEG, PNG, etc..)
        const formatFile = file.type.split('/')[1]


        const storageRef = ref(storage, `images/${fileId}.${formatFile}`);

        // ************ Upload Task ***************
        const uploadTask = uploadBytesResumable(storageRef, file);

        // Register three observers:
        // 1. 'state_changed' observer, called any time the state changes
        // 2. Error observer, called on failure
        // 3. Completion observer, called on successful completion
        uploadTask.on('state_changed',
            (snapshot) => {
                // Observe state change events such as progress, pause, and resume
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setProgress(progress)
            },
            (error) => {
                setError(error)
            },
            async () => {
                const downloadURL = await getDownloadURL(uploadTask.snapshot.ref)
                // Handle successful uploads on complete
                setProgress(progress)

                // Store data in Firestore
                await addDoc(collection(db, "images"), {
                    imageUrl: downloadURL,
                    createdAt: new Date(),
                    userEmail: user?.email
                });
            }
        );


    }

    return {
        progress, error, startUpload
    }
}

export default useStorage
