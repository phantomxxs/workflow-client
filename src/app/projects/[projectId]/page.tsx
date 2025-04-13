import Project from "@/views/projects/projects";
import React from "react";

type Props = {
  params: { projectId: number };
};

const ProjectPage = ({ params }: Props) => {
  return <Project projectId={params.projectId} />;
};

export default ProjectPage;
