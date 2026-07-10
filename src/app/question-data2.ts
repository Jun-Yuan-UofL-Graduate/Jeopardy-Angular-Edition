import { CategoryData } from "./category-data"; 

export interface QuestionData {
    id: number;
    question: string;
    beginning: string;
    answer: string;
    value: number;
    questionType: string;
    questionSource?: string;
    category: CategoryData;
}