import CardList from '@/components/CardList'
import Container from '@/components/Container'
import HomeButtons from '@/components/HomeButtons'
import { getTodayFormatted } from '@/utils/formatDate'
import Image from 'next/image'

export default function Home() {
	return (
		<Container title={'Hey Vadym, how are you feeling today?'}>
			<CardList />
		</Container>
	)
}
