import { Dialog } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/solid'

export default function MyCustomDialog({
	isOpen,
	setIsOpen,
	children }) {
	return (
		<Dialog
			style={{
				left: `50%`,
				top: `50%`,
				right: `auto`,
				bottom: `auto`,
				marginBottom: `-50%`,
				transform: `translate(-50%, -50%)`
			}}
			className='absolute p-2 bg-white rounded'
			open={isOpen}
			onClose={() => setIsOpen(false)}
		>
			<Dialog.Panel>
				<div className='flex justify-end'>
					<button
						className='w-6 h-6 p-0'
						onClick={() => setIsOpen(false)}
					>
						<XMarkIcon />
					</button>
				</div>
				{children}
			</Dialog.Panel>
		</Dialog>
	)
}