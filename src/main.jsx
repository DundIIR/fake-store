import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/app/App'
import { extendTheme, ChakraProvider } from '@chakra-ui/react'
import './style/main.scss'

const theme = extendTheme({
	colors: {
		brand: {
			400: '#FFE17F',
			700: '#FFC500',
		},
	},
	fonts: {
		body: 'Rubik, sans-serif',
	},
	sizes: {
		container: {
			sm: '640px',
			md: '768px',
			lg: '1160px',
			xl: '1160px',
		},
	},
})

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
)
