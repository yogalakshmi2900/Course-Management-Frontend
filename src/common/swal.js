import swal from 'sweetalert';

export function Success(message) {
  swal({
        title: "Good job!",
        text: message,
        icon: "success",
        button: "Ok",
      });
}

export function Error(message) {
  swal({
        title: "Error",
        text: message,
        icon: "error",
        button: "Ok",
      });
}

export function Loader() {
  swal({
     title: "",
     text: "Please wait.",
     icon: "../../spinner.gif",
     button: false
 });
}
