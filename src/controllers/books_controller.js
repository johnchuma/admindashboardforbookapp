
import { getDownloadURL, ref, uploadBytes } from "firebase/storage"
import { firestore, storage } from "../utils/firebase"
import {v4 as uuidv4} from 'uuid'
import { addDoc, collection, deleteDoc, doc, getDocs, setDoc, updateDoc } from "firebase/firestore"

export const uploadBookToFirebase = async(coverFile,pdfFile,data)=>{
    try {
        const coverFileRef = ref(storage,'files/'+coverFile.name)
        const pdfFileRef = ref(storage,'files/'+pdfFile.name)
        await uploadBytes(coverFileRef,coverFile)
        await uploadBytes(pdfFileRef,pdfFile)
        const coverDownloadUrl = await getDownloadURL(coverFileRef)
        const pdfDownloadUrl = await getDownloadURL(pdfFileRef)
        const uid = uuidv4()
        const payload = {...data,id:uid,cover:coverDownloadUrl,file:pdfDownloadUrl}
        const docReferance =doc(firestore, 'books', uid) 
        const response = await setDoc(docReferance,payload)
        return response
    } catch (error) {
        console.error('Failed to upload',error)
    }
}
export const updateBook = async (id,data)=>{
    try {
        const docRef = doc(firestore,'books',id);
        const response =await updateDoc(docRef,data)
    } catch (error) {
        console.error(error)
    }
}
export const deleteBook = async(id)=>{
    try {
        const docRef = doc(firestore,'books',id);
        await deleteDoc(docRef)
    } catch (error) {
        console.log('failed to delete',error)
    }
}
export const getBooks = async()=>{
try {
    const books  = [];
     const querySnapshots = await getDocs(collection(firestore,'books'));
     querySnapshots.forEach((querySnapshot)=>{
        books.push(querySnapshot.data())
     })
     return books;
} catch (error) {
    console.log('Failed to get books',error)
}
}