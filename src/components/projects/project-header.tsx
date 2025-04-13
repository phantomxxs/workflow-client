import Header from "../shared/header";
import { Project } from "@/types/project";
import { Clock, Filter, Grid3x3, List, Share2, Table } from "lucide-react";
import { view } from "@/views/projects/projects";

interface Props {
  project: Project;
  activeTab: view;
  setActiveTab: (activeTab: view) => void;
}

const ProjectHeader = ({ project, activeTab, setActiveTab }: Props) => {

  return (
    <div className="px-4 xl:px-6">
      <div className="pb-6 pt-6 lg:pb-4 lg:pt-8">
        <Header title={project.name} buttonComponent={<></>} />
      </div>

      {/* TABS */}
      <div className="flex flex-wrap-reverse gap-2 border-y border-gray-200 pb-[8px] pt-2 dark:border-stroke-dark md:items-center">
        <div className="flex flex-1 items-center gap-2 md:gap-4">
          <TabButton
            name="board"
            icon={<Grid3x3 size={20} />}
            setActiveTab={setActiveTab}
            activeTab={activeTab}
          />
          <TabButton
            name="list"
            icon={<List size={20} />}
            setActiveTab={setActiveTab}
            activeTab={activeTab}
          />
          <TabButton
            name="timeline"
            icon={<Clock size={20} />}
            setActiveTab={setActiveTab}
            activeTab={activeTab}
          />
          <TabButton
            name="table"
            icon={<Table size={20} />}
            setActiveTab={setActiveTab}
            activeTab={activeTab}
          />
        </div>
        <div className="flex items-center gap-2">
          <button className="text-gray-500 hover:text-gray-600 dark:text-neutral-500 dark:hover:text-gray-300">
            <Filter size={20} />
          </button>
          <button className="text-gray-500 hover:text-gray-600 dark:text-neutral-500 dark:hover:text-gray-300">
            <Share2 size={20} />
          </button>
          <div className="relative">
            <input
              type="text"
              placeholder="Search Task"
              className="rounded-md border py-1 pl-10 pr-4 focus:outline-none dark:border-dark-secondary dark:bg-dark-secondary dark:text-white"
            />
            <Grid3x3 className="absolute left-3 top-2 h-4 w-4 text-gray-400 dark:text-neutral-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

interface TabButtonProps {
  name: view;
  icon: React.ReactNode;
  setActiveTab: (tabName: view) => void;
  activeTab: string;
}

const TabButton = ({ name, icon, setActiveTab, activeTab }: TabButtonProps) => {
  const isActive = activeTab === name;

  return (
    <button
      className={`relative flex items-center gap-2 px-1 py-2 text-gray-500 after:absolute after:-bottom-[9px] after:left-0 after:h-[1px] after:w-full hover:text-blue-600 dark:text-neutral-500 dark:hover:text-white sm:px-2 lg:px-4 capitalize transition-all ease-in-out ${
        isActive ? "text-blue-600 after:bg-blue-600 dark:text-white" : ""
      }`}
      onClick={() => setActiveTab(name)}
    >
      {icon}
      {name}
    </button>
  );
};

export default ProjectHeader;
