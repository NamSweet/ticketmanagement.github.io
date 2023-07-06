import { firestore } from './firebase-config';

interface Action {
    data?: any,
    collectionName: string
    id?: string
}

// Thêm
export async function add({ data, collectionName, id }: Action) {
    try {
      let docRef;
      if (id) {
        docRef = await firestore.collection(collectionName).doc(id).set(data);
        console.log('Document written with ID: ', id);
      } else {
        docRef = await firestore.collection(collectionName).add(data);
        console.log('Document written with ID: ', docRef.id);
      }
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  }
  

// cập nhật
export async function edit({data, collectionName, id}: Action) {
    try {
        const docRef = firestore.collection(collectionName).doc(id);
        await docRef.update(data);
        console.log('Document updated with ID: ', docRef.id);
      } catch (error) {
        console.error('Error updating document: ', error);
      }
}

// Chi tiết
export async function getData({ collectionName, id }: Action) {
    try {
      const docRef = firestore.collection(collectionName).doc(id);
      const snapshot = await docRef.get();
      if (snapshot.exists) {
        const data = snapshot.data();
        console.log('Document data:', data);
        return data;
      } else {
        console.log('Document does not exist');
      }
    } catch (error) {
      console.error('Error getting document: ', error);
    }
  }

    // Danh sách
    export async function getList<T>({collectionName}: Action): Promise<T[]> {
        try {
            const querySnapshot = await firestore.collection(collectionName).get();
            const dataList: T[] = querySnapshot.docs.map((doc) => doc.data() as T);
            console.log('Data list:', dataList);
            return dataList;
        } catch (error) {
            console.error('Error getting data list: ', error);
            throw error; 
        }
    }