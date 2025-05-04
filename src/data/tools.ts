
export interface Tool {
  name: string;
  url: string;
}

export const animationTools: Tool[] = [
  { name: "Google Veo 2", url: "https://aistudio.google.com/generate-video" },
  { name: "SORA", url: "https://www.sora.com" },
  { name: "KLING", url: "https://klingai.com" },
  { name: "HAILUO", url: "https://hailuoai.video/" },
  { name: "Higgsfield", url: "https://higgsfield.ai/" },
  { name: "RunwayML", url: "https://runwayml.com/" },
  { name: "PIKA LABS", url: "https://pika.art/" },
];

export const soundTools: Tool[] = [
  { name: "SUNO Music Generator", url: "https://suno.com/invite/@aiwebtools" },
  { name: "Eleven Labs Voice & Sound Generator", url: "https://elevenlabs.io/?from=kennybastian5304" },
];

export const lipsyncTools: Tool[] = [
  { name: "Hedra", url: "https://www.hedra.com/" },
];
