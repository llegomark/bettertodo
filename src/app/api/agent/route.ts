import basicAgent from '~/agents/basic'

export async function POST(req) {
	const {input} = await req.json()
	console.log(input)
	const stream = basicAgent({input})
	return new Response(await stream)
}
