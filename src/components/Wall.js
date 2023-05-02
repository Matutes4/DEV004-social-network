import { getAuth } from "firebase/auth";
import { onSnapshot, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { createPost, q, editar } from "../lib/firestore.js";
import { logOut } from "../lib/authentication.js";
import { store } from "../lib/firebase.js";
// import { edituser } from '../lib/firestore.js';

export const Wall = (navigate) => {
  const auth = getAuth();
  const user = auth.currentUser;

  if (user) {
    const div = document.createElement("div");
    const title = document.createElement("h2");
    const title2 = document.createElement("h2");
    const inputPost = document.createElement("input");
    const submitButton = document.createElement("button");
    const image = document.createElement("img");

    image.src = "imagenes/dance.jpg";
    const divPost = document.createElement("div");
    title.textContent = "DanceBody";
    title2.textContent = `Bienvenido a DanceBody ${user.email}`;
    inputPost.type = "text";
    inputPost.placeholder = "¿Que quieres compartir?";
    inputPost.id = "inputPost";
    submitButton.textContent = "publicar";
    submitButton.id = "submit";
    /*
    submitButton.addEventListener("click", () => {
      if (inputPost.value === "") {
        alert("necesitas ingresar texto");
      } else {
        createPost(inputPost.value);
      }
    });
*/

    submitButton.onclick = function () {
      if (inputPost.value === "") {
        alert("necesitas ingresar texto");
      } else {
        createPost(inputPost.value);
        inputPost.value = "";
      }
    };

    // addpost({ textContent: "text", email: user.email });

    // listarPublicaciones((result) => {
    //   result.forEach((doc) => {
    //     console.log(doc.data());
    //     console.log(doc.data().texto);
    //     title3.textContent = `${doc.data().nombre} dice: ${doc.data().texto}`;
    //   });
    // });
    onSnapshot(q(), (querySnapshot) => {
      const prueba = document.createElement("div");
      prueba.id = "prueba";
      divPost.innerHTML = "";
      querySnapshot.forEach((post) => {
        const p = document.createElement("p");
        p.classList.add("micaja");
        const editButton = document.createElement("button");
        editButton.id = "editButton";
        const deleteButton = document.createElement("button");
        editButton.textContent = "editar";
        deleteButton.textContent = "eliminar";

        deleteButton.addEventListener("click", () => {
          //
          if (post.data().email === user.email) {
            deleteDoc(doc(store, "publicacion", post.id));
          } else {
            alert("Solo el usuario que creó el post lo puede borrar");
          }
        });

        // inician cambios para edit button

        editButton.addEventListener("click", () => {
          if (post.data().email === user.email) {
            editar(`${post.id}`, `${post.data().text}`);
          } else {
            alert("Solo el usuario que creó el post lo puede editar");
          }
        });

        /*
        const editField = document.createElement('textarea');
        editField.value = post.data().text;
        editField.classList.add('edit-field');
        p.appendChild(editField);

        const textField = document.getElementById("text-field");


        editButton.addEventListener('click', () => {
          const postRef = doc(store, 'publicacion', post.id);
          const editField = p.querySelector('.edit-field');
          updateDoc(postRef, { text: editField.value });
        });
        */

        // terminan cambios para edit button

        p.textContent =
          `${post.data().email}` + ` dice: "` + `${post.data().text}` + `" `;

        console.log(post.data().text, post.data().email);
        prueba.appendChild(p);
        prueba.appendChild(editButton);
        prueba.appendChild(deleteButton);
        divPost.append(prueba);
      });
    });

    const signOutButton = document.createElement("button"); // Crear el botón para cerrar sesión
    signOutButton.textContent = "Cerrar sesión";
    signOutButton.addEventListener("click", () => {
      // Agregar el controlador de eventos para cerrar sesión
      logOut()
        .then((res) => {
          navigate("/"); // Redirigir al usuario a la página de inicio de sesión
        })
        .catch((error) => {
          console.log(error);
        });
    });

    const seccion0 = document.createElement("div");
    seccion0.classList.add("seccion0");
    seccion0.append(signOutButton);
    const seccion4 = document.createElement("div");
    seccion4.classList.add("seccion4");
    seccion4.append(title2);
    const seccion5 = document.createElement("div");
    seccion5.classList.add("seccion5");
    seccion5.append(image);
    const seccion6 = document.createElement("div");
    seccion6.classList.add("seccion6");
    seccion6.append(inputPost, submitButton);
    const seccion7 = document.createElement("div");
    seccion7.classList.add("seccion7");
    seccion7.append(divPost);

    div.append(seccion0, seccion4, seccion5, seccion6, seccion7);

    return div;
  }
  const div = document.createElement("div");
  const title = document.createElement("h2");

  title.textContent = "Debe registrarse";

  div.append(title);

  return div;
};
