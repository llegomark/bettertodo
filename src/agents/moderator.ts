import {initializeAgentExecutorWithOptions} from 'langchain/agents'
import {ChatOpenAI} from 'langchain/chat_models/openai'
import {env} from '~/env.mjs'
import {deleteTaskTool} from '~/tools/deleteTask'

export default async function moderatorAgent({input}) {
	// const gptModel = 'gpt-3.5-turbo'
	const gptModel = 'gpt-4' // use GPT-4 for more complex tasks!

	const model = new ChatOpenAI({
		modelName: gptModel,
		openAIApiKey: env.OPENAI_API_KEY,
		temperature: 0
	})

	const tools = [deleteTaskTool]

	const executor = await initializeAgentExecutorWithOptions(tools, model, {
		agentArgs: {
			prefix:
				'You are a moderator. If there are any offensive items, delete only the offensive items. Otherwise, say "no offensive items".'
		},
		agentType: 'openai-functions',
		returnIntermediateSteps: env.NODE_ENV === 'development',
		verbose: env.NODE_ENV === 'development'
	})

	return await executor.call({
		input
	})
}
