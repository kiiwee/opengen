
import { OpenAIStream, StreamingTextResponse } from 'ai';
import OpenAI from 'openai';
import { ChatCompletionMessageParam } from 'openai/resources/chat';

export default defineLazyEventHandler(async () => {
   
    const openai = new OpenAI({
        apiKey: "ollama",
        baseURL: 'http://localhost:11434/v1/',
    });

    return defineEventHandler(async (event: any) => {
        // Extract the `prompt` from the body of the request
        const { messages } = (await readBody(event)) as {
            messages: ChatCompletionMessageParam[];
        };
        // Ask OpenAI for a streaming chat completion given the prompt
        const response = await openai.chat.completions.create({
            model: 'hermes',
            stream: true,
            messages,
        });

        // Convert the response into a friendly text-stream
        const stream = OpenAIStream(response);

        // Respond with the stream
        return new StreamingTextResponse(stream);
    });
});