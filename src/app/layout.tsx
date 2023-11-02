import {Inter} from 'next/font/google'
import BackgroundGrid from '~/components/BackgroundGrid'
import Nav from '~/components/Nav'
import {META} from '~/constants/metadata'
import './styles.css'

const font = Inter({
	subsets: ['latin'],
	display: 'swap'
})

export const metadata = {
	alternates: {
		canonical: '/',
		languages: {
			'en-US': '/en-US'
		}
	},
	metadataBase: new URL(META.siteURL)
}

export default function RootLayout({children}: {children: React.ReactNode}) {
	return (
		<html lang='en'>
			<body
				className={`${font.className} relative flex h-full min-h-screen w-full flex-col items-center`}>
				<BackgroundGrid className='fixed h-full w-full opacity-30 dark:opacity-50' />
				<Nav title={'> llego.dev'} />
				<div className='z-10 flex w-full max-w-3xl items-center justify-center'>
					{children}
				</div>
			</body>
		</html>
	)
}
