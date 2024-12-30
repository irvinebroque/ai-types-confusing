import { AiModelTypes } from "@cloudflare/ai-types"

export default {
	async fetch(request, env): Promise<Response> {
		const ai = env.AI as Ai<AiModelTypes>;
		const response = await ai.run("@cf/meta/llama-3.1-8b-instruct", {
			prompt: "What is the origin of the phrase Hello, World",
		});
		return new Response(JSON.stringify(response));
	},
} satisfies ExportedHandler<Env>;