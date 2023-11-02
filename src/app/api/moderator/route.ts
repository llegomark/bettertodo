import {NextResponse} from 'next/server'
import moderatorAgent from '~/agents/moderator'
import {listTasks} from '~/app/actions/listTasks'

export const dynamic = 'force-dynamic'

export async function GET() {
	const moderated = await moderatorAgent({
		input: `The items are: ${JSON.stringify(
			(await listTasks()).map(t => ({id: t.id, text: t.title}))
		)}`
	})

	console.log(moderated.output)

	return new NextResponse(JSON.stringify(moderated))
}
