import {Metadata} from 'next'

export const META = {
	desc:
		'BetterTodo is an AI-powered web app that helps you stay organized by letting you easily create prioritized task lists, set due dates, mark tasks as completed, and ask the AI to delete tasks.',
	siteURL: 'https://todo.llego.dev',
	title: 'BetterTodo',
	twitter: '@markllego'
}

export const DEFAULT_META: Metadata = {
	description: META.desc,
	openGraph: {
		description: META.desc,
		title: META.title
	},
	title: META.title,
	twitter: {
		card: 'summary_large_image',
		creator: META.twitter,
		description: META.desc,
		title: META.title
	}
}
