import {
  collection,
  getDocs,
  query,
  onSnapshot,
  addDoc,
  getFirestore,
  orderBy,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { store, auth } from "./firebase.js";
import { async } from "regenerator-runtime";

export function addpost(data) {
  return addDoc(collection(store, "publicacion"), data);
}

export async function listarPublicaciones(callback) {
  const queryPost = query(collection(store, "publicacion"));
  onSnapshot(queryPost, callback);
  console.log(publicacion);
}

/* const q = query(collection(db, "cities"), where("state", "==", "CA"));
const unsubscribe = onSnapshot(q, (querySnapshot) => {
  const cities = [];
  querySnapshot.forEach((doc) => {
    cities.push(doc.data().name);
  });
  console.log("Current cities in CA: ", cities.join(", "));
}); */

export function createPost(post) {
  // console.log(post);
  addDoc(collection(store, "publicacion"), {
    text: post,
    email: auth.currentUser.email,
  });
}

export const q = () =>
  query(collection(getFirestore(), "publicacion"), orderBy("email", "desc"));

//  aux edit content
export const getContent = (id) => getDoc(doc(db, "content", id));

//  edit content
export const updateContent = (id, newFields) =>
  updateDoc(doc(db, "content", id), newFields);

/// editar datos

export function editar(id, text) {
  document.getElementById("inputPost").value = text;

  const submitButton = document.getElementById("submit");
  submitButton.innerHTML = "actualizar post";

  submitButton.onclick = function () {
    const postRef = doc(store, "publicacion", id);

    text = document.getElementById("inputPost").value;

    updateDoc(postRef, {
      text: text,
    }).then(function () {
      console.log("exito");
      submitButton.innerHTML = "publicar";
      document.getElementById("inputPost").value = "";

      submitButton.onclick = function () {
        if (inputPost.value === "") {
          alert("necesitas ingresar texto");
        } else {
          createPost(inputPost.value);
          inputPost.value = "";
        }
      };
    });
  };
}

/* export const edituser = async(id, comentario) => {
  const postRef = doc(db, "publicacion", id);

  await updateDoc(postRef, {
    text: comentario
  });

} */

// borrar documentos

// export const deletePost = async(id) => {
//  await deleteDoc(doc(store, "publicacion", id));
// }
