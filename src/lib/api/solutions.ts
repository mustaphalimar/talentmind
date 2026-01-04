export interface SolutionsData {
  conseilRH: Array<{
    id: number;
    text: string;
  }>;
  talentMindHub: Array<{
    id: number;
    text: string;
    icon: string;
    description: string;
  }>;
  servicesMaroc: Array<{
    id: number;
    text: string;
    description: string;
  }>;
}

export async function getSolutions(): Promise<SolutionsData> {
  const response = await fetch("/api/solutions");
  if (!response.ok) {
    throw new Error("Failed to fetch solutions");
  }
  return response.json();
}

