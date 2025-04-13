"use client";
import Board from "@/components/projects/board/board";
import ProjectHeader from "@/components/projects/project-header";
import DefaultLoader from "@/components/shared/loader";
import { useGetTasks } from "@/hooks/queries/tasks";
import React, { useState } from "react";

export type view = "list" | "board" | "timeline" | "table";

type Props = {
  projectId: number;
};

const Project = ({ projectId }: Props) => {
  const [activeTab, setActiveTab] = useState<view>("board");
  // eslint-disable-next-line
  const [isOpen, setIsOpen] = useState({ id: "" });

  const { data, isLoading: isLoadingTasks } = useGetTasks({ projectId });
  console.log(data);

  if (isLoadingTasks) return <DefaultLoader />;
  if (data)
    return (
      <div>
        <ProjectHeader
          project={data?.project}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        {activeTab === "board" && (
          <Board projectId={projectId} tasks={data.tasks} />
        )}
      </div>
    );
};

export default Project;
