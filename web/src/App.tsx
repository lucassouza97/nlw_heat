import { useContext } from 'react'
import styles from './App.module.scss'
import { MessageList } from './components/MessageList'
import { LoginBox } from './components/LoginBox'
import { authContext } from './context/auth'
import { SendMessageForm } from './components/SendMessageForm'

export function App() {
	const { user } = useContext(authContext)

	console.log(user)

	return (
		<main
			className={`${styles.contentWrapper} ${
				!!user ? styles.contentSigned : ''
			}`}
		>
			<MessageList />
			{!!user ? <SendMessageForm /> : <LoginBox />}
		</main>
	)
}
