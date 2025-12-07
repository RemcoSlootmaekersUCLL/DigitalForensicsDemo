const getFiles = () => {
  return files;
};

const getChatLogs = () => {
  return chatLogs;
};

const files = [
  {
    name: "IncidentenVerslag_Sporthal_2025.pdf",
    owner: "Noah S.",
    modifiedBy: "Noah S.",
    created: "2025-02-10 09:00",
    modified: "2025-02-10 09:05",
    description:
      "Rapport over ruzie tussen Emma en Lars tijdens LO-les. Bevat aantekeningen en mogelijke gevolgen.",
    suspicious: true,
  },
  {
    name: "Screenshot_TitlePage.png",
    owner: "Lars D.",
    modifiedBy: "Lars D.",
    created: "2025-02-10 09:10",
    modified: "2025-02-10 09:11",
    description: "Schermafbeelding van de titelpagina van het verslag.",
    suspicious: false,
  },
  {
    name: "Notes_Tuesday.txt",
    owner: "Noah S.",
    modifiedBy: "Noah S.",
    created: "2025-02-09 15:10",
    modified: "2025-02-09 15:11",
    description: 'Noah noteerde: "Als hij weer begint, grijp ik in."',
    suspicious: true,
  },
];

const chatLogs: ChatLog[] = [
  {
    from: "Noah S.",
    message: "Nu zullen ze zien dat hij ook niet zo onschuldig is.",
    time: "2025-02-10 09:06",
  },
  {
    from: "Lars D.",
    message: "Ik maak enkel een screenshot van de titelpagina.",
    time: "2025-02-10 09:12",
  },
];

const EvidenceService = { getFiles, getChatLogs };
export default EvidenceService;
