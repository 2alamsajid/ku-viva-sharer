'use server'


import { model } from "./gemini.models";
import { truncatedGenAiOutput } from "./utils";

export const getGeminiSummary = async (vivaData: string, am?: string): Promise<string | null> => {
    try {
        const prompt = ` You are an expert medical tutor and summarizer. You are provided with a collection of viva examination questions given to 3rd-year students. Your task is to summarize and provide a comprehensive list of all topics asked.
Your response must be in **pure HTML format**, following this exact structure:

<b>List of Topics</b>
<ul>
    <li>1. [first topic]</li>
    <li>2. [seccond topic]</li>
    <li>3. [Third topic]</li>
</ul>

---

Now, apply this structure to the following viva data:
\`\`\`text
${vivaData}
\`\`\`

`;

        const prompt_with_answer = `
You are an expert medical tutor and summarizer. You are provided with a list of viva examination topics given to 3rd-year students. summarize and provide a comprehensive list of all topics asked with a brief answer to them.
Your response must be in **pure HTML format**, following this exact structure for each topic:

<b>[Numerical Order].[Question/Topic as listed]</b>
<p>[Brief Answer to the question/topic]</p>
<br><br>

---

Now, apply this structure to the following viva topics. For each distinct topic, provide a concise answer.

\`\`\`text
${vivaData}
\`\`\`

**Important Guidelines for Generation:**
1.  **Strictly adhere to the provided HTML structure.**.
2.  The answer for each topic must be enclosed within '<p>' tags.
3.  Ensure there are two '<br>' tags ('<br><br>') after each question and answer pair.
4.  Keep answers brief and to the point, suitable for a viva quick review.
5.  If a topic is very broad (e.g., "Glaucoma"), provide a very concise, high-level answer or define a key aspect.
6.  Do not include any introductory or concluding remarks outside the specified HTML.
7.  Do not include '<body>', '<head>', '<html>' tags.
`;

        const ai_prompt = am === 'true' ? prompt_with_answer : prompt

        const result = await model.generateContent(ai_prompt);
        return truncatedGenAiOutput(result.response.text());

    } catch (error) {
        console.error("Error generating Gemini explanation:", error);
        return null;
    }
};

