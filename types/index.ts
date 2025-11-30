type FileItem = {
  name: string;
  owner: string;
  modifiedBy: string;
  created: string;
  modified: string;
  description: string;
  suspicious: boolean;
};

type ChatLog = {
  from: string;
  message: string;
  time: string;
};
