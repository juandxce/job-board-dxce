const config = {
	apiurl: process.env.NEXT_PUBLIC_API_URL ? `https://${process.env.NEXT_PUBLIC_API_URL}` : 'http://localhost:3000'
}

export default config