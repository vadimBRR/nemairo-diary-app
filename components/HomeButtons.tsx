import { Plus, Search } from 'lucide-react'
import Button from './ui/Button'
import Link from 'next/link'

const HomeButtons = () => {
	return (
		<div className=' flex gap-2'>
			<Button className='p-3 bg-card border custom-border rounded-xl'>
				<Search size={32} />
			</Button>
			<Link href={'/create'}>
				<Button className='p-3 bg-gradient-to-br from-violet-900 to-blue-800  border custom-border rounded-xl'>
					<Plus size={32} />
				</Button>
			</Link>
		</div>
	)
}

export default HomeButtons
