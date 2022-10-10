import toast from "react-hot-toast";
import { BsFillCheckSquareFill } from "react-icons/bs";

export const customToast = () => {
  return toast.custom((t) => (
    <div
      className={`${
        t.visible ? "animate-enter" : "animate-leave"
      }  bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
    >
      <div className="flex-1 p-2">
        <div className="flex">
          <div className="flex gap-3">
            <BsFillCheckSquareFill color="#feae49" />
            <div className="flex flex-col justify-center">
              <p className="text-sm font-medium text-dark-gray">
                A verification link has been sent to your email account
              </p>

              <p className="mt-1 text-sm text-black-white">Chec your inbox!</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex border-l border-gray-200">
        <button
          onClick={() => toast.dismiss(t.id)}
          className="flex items-center justify-center w-full px-2 text-sm font-medium border border-transparent rounded-none rounded-r-lg text-text-primary hover:text-text-primary focus:outline-none focus:ring-2 focus:ring-text-primary"
        >
          Close
        </button>
      </div>
    </div>
  ));
};
