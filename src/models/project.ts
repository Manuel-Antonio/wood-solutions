export interface Project {
    id: number;
    title: string;
    description: string;
    materials?: string[];
    services?: string[];
    testimonial?: {
      name: string;
      feedback: string;
    };
    imageUrls?: string[];
    featureImage: string;
  }