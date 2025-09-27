import Swal from 'sweetalert2';

export const Confirmation = (message) =>
  Swal.fire({
    title: 'Are you sure?',
    icon: 'warning',
    html: message, // Use `html` instead of `text` for message content
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    reverseButtons: true,
  });
