import { Plus } from "lucide-react";

const Add = () => (
  <div className="col-span-3">
    <button className="w-full h-32 rounded-lg border-2 border-slate-600 flex items-center justify-center hover:bg-slate-700 transition-colors">
      <Plus className="w-8 h-8 text-slate-400" />
    </button>
  </div>
);

const Folder = ({ name }) => (
  <div className="col-span-3">
    <div className="w-full h-32 rounded-lg bg-blue-500 p-4 flex flex-col justify-end">
      <span className="text-sm text-white">{name}</span>
    </div>
  </div>
);

const GridItem = {
  Add,
  Folder
};

export default GridItem;