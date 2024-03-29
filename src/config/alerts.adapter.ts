import Swal from "sweetalert2";


export const alerts = {
    alertWarning: (title: string, text: string) => {
        return Swal.fire({
            title,
            text,
            icon: "question"
          });
    },
    alertSuccess: (text: string) => {
        return Swal.fire({
            title: "Bienvenido",
            text: text,
            icon: "success"
          })
    }

   
}