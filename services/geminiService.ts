import { GoogleGenAI, Type } from "@google/genai";
import { ProjectAnalysis } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const analyzeProjectInquiry = async (
  projectDescription: string
): Promise<ProjectAnalysis> => {
  try {
    if (!process.env.API_KEY) {
      throw new Error("API Key is missing. Please configure it in your environment variables.");
    }

    const model = "gemini-2.5-flash";
    const prompt = `
      You are an expert construction project estimator for a premium contracting company called TITAN CONSTRUCT.
      Analyze the following project description from a potential client.
      
      Project Description: "${projectDescription}"
      
      Return a JSON object with:
      1. A brief professional summary of the project scope (max 1 sentence).
      2. The most relevant service category (e.g., Residential Construction, Commercial Renovation, Architectural Design, Project Management).
      3. An estimated complexity level (Low, Medium, High, Enterprise).
      4. A very rough estimated timeline range based on typical industry standards for such a project (e.g., "2-3 months", "6-8 weeks").
      
      Be professional, concise, and realistic.
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            summary: { type: Type.STRING },
            recommendedService: { type: Type.STRING },
            complexityEstimation: { type: Type.STRING, enum: ['Low', 'Medium', 'High', 'Enterprise'] },
            estimatedTimeline: { type: Type.STRING }
          },
          required: ["summary", "recommendedService", "complexityEstimation", "estimatedTimeline"]
        }
      }
    });

    if (response.text) {
      return JSON.parse(response.text) as ProjectAnalysis;
    }
    
    throw new Error("No response text generated");

  } catch (error) {
    console.error("Gemini Analysis Failed:", error);
    // Fallback in case of API error
    return {
      summary: "We received your request and will review it manually.",
      recommendedService: "General Consultation",
      complexityEstimation: "Medium",
      estimatedTimeline: "TBD"
    };
  }
};