export interface FAQ {
    id: string;        // Unique identifier for each FAQ
    question: string;  // The question being asked
    answer: string;    // The answer to the question
    category?: string; // Optional: Category to which the FAQ belongs
  }