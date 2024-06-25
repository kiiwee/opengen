
import { StreamingTextResponse,streamText } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';


export default defineLazyEventHandler(async () => {
   
   
    const openai = createOpenAI({
        apiKey: "ollama",
        baseURL: 'http://localhost:11434/v1/',
    });
    return defineEventHandler(async (event: any) => {
        // Extract the `prompt` from the body of the request
        const { messages,body } = await readBody(event);
        // Ask OpenAI for a streaming chat completion given the prompt
        const response = await streamText({
            model: openai('Llama3-fine-tune-tailwind'),
            system: 'You are a helpful coding assistant that only returns HTML and TailWind CSS code upon the users request. You SHOULD ONLY RESPOND WITH THE CODE. ALWAYS ADD THIS SCRIPT TAG TO THE HEAD  TO ADD TAILWINDCSS  <script src="https://cdn.tailwindcss.com"></script>"',
            temperature:0.1,
            messages:messages,
            maxTokens:
        });

        // Convert the response into a friendly text-stream

        // Respond with the stream
        return new StreamingTextResponse(response.toAIStream());
    });
});