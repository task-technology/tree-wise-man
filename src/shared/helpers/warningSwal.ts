import swal from "sweetalert";

export const WarningSwal = (handleSubmit: any, id?: string) => {
  swal({
    title: "Are you sure?",
    text: "Once deleted, you will not be able to recover this imaginary file!",
    icon: "warning",
    buttons: [true, true],
  }).then((willDelete) => {
    if (willDelete) {
      handleSubmit(id);
    } else {
      swal("Your imaginary data is safe!");
    }
  });
};
