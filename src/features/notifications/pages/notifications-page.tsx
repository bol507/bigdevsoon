import { BellIcon } from "lucide-react";

const NotificationsPage = () => {
  return (
    <section className="relative  w-screen  h-screen bg-[#f1ecff] flex flex-col items-center justify-center font-['Segoe UI']">
      
      <div className="w-[450px] flex justify-end items-center">
        <div className="relative flex justify-center items-center w-10 h-10 bg-white border border-zinc-200 rounded-full shadow-xl mb-4">
          <BellIcon className="w-6 h-6 text-zinc-500 hover:text-zinc-900 cursor-pointer" />
          <div className="bg-red-500 h-2 w-2 rounded-full absolute top-2 right-2.5" />
        </div>
      </div>

      <div className="w-[450px] h-96 bg-white border border-zinc-200 rounded-md shadow-xl flex flex-col">
        <div className="flex w-full h-auto items-center justify-between p-6">
          <h2 className="text-xl font-bold  tracking-wide">Notifications</h2>
          <span className="text-zinc-500 text-md font-light">Mark as read</span>
        </div>
      </div>
    </section>
  );
};

export default NotificationsPage;
