import {DynamicStructuredTool} from 'langchain/tools'
import z from 'zod'
import {listTasks} from '~/app/actions/listTasks'

export const listTasksTool = new DynamicStructuredTool({
	name: 'listTasks',
	description:
		'List all of the tasks (including their title, id and status) sorted in descending order by created timestamp.',
	func: async () => {
		const allTasks = await listTasks()

		return JSON.stringify(allTasks)
	},
	schema: z.object({})
})
