import {
  CircleGauge,
  CircleUserRound,
  ClipboardList,
  Smile,
  Users,
} from "lucide-react";

const Navbar = () => {
  return (
    <div className="tracking-tight p-10">
      <div className="font-semibold text-3xl">Listify</div>
      <div className="mt-10">
        <div className="flex items-center gap-2 text-lg font-light cursor-pointer px-5 py-2 rounded-3xl hover:bg-gray-400 duration-300">
          <Smile />
          Welcome
        </div>
        <div className="flex items-center gap-2 text-lg font-light cursor-pointer px-5 py-2 rounded-3xl hover:bg-gray-400 duration-300">
          <CircleGauge />
          Dashboard
        </div>
        <div className="flex items-center gap-2 text-lg font-light cursor-pointer px-5 py-2 rounded-3xl hover:bg-gray-400 duration-300">
          <ClipboardList />
          Task
        </div>
        <div className="flex items-center gap-2 text-lg font-light cursor-pointer px-5 py-2 rounded-3xl hover:bg-gray-400 duration-300">
          <Users />
          People
        </div>
        <div className="flex items-center gap-2 text-lg font-light cursor-pointer px-5 py-2 rounded-3xl hover:bg-gray-400 duration-300">
          <CircleUserRound />
          Contact
        </div>
      </div>
    </div>
  );
};

export default Navbar;
