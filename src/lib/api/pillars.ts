export interface PillarData {
  id: number;
  title: string;
  icon: string;
  content: string;
}

export async function getPillars(): Promise<PillarData[]> {
  const response = await fetch("/api/pillars");
  if (!response.ok) {
    throw new Error("Failed to fetch pillars");
  }
  return response.json();
}

