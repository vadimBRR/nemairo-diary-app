import { Plus, Search } from 'lucide-react'
import Button from './ui/Button'

const HomeButtons = () => {
	return (
		<div className=' flex gap-2'>
			<Button className='p-3 bg-card border custom-border rounded-md'>
				<Search size={32}/>
			</Button>
			<Button className='p-3 bg-gradient-to-br from-violet-900 to-blue-800  border custom-border rounded-md'>
				<Plus size={32}/>
			</Button>
		</div>
	)
}

export default HomeButtons
