import Link from 'next/link'

export default function Nav({title}: {title: string}) {
	return (
		<div className='fixed top-0 z-20 flex w-full flex-col p-5'>
			<Link
				className='text-xl font-bold no-underline'
				href='https://llego.dev/'
				target='_blank'
				rel='noopener noreferrer'>
				{title}
			</Link>

			<Link
				href='https://en.wikipedia.org/wiki/Intelligent_agent'
				target='_blank'
				rel='noopener noreferrer'
				className='no-underline'>
				AI Agent
			</Link>
		</div>
	)
}
