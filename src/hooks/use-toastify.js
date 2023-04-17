import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useToastify = () => {
  const notify = ({
		toastText,
		autoClose = false,
		theme = "dark",
		onClose = () => {}
	}) => toast(toastText, {
		position: "top-right",
		autoClose: autoClose,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: theme,
		onClose	: () => onClose()
		});

  const renderToast = () => (
    <ToastContainer
      position="top-right"
      autoClose={false}
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      theme="dark"
    />
  );

  return { renderToast, notify };
};

export default useToastify;
