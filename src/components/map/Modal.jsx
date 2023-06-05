import { Dialog } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/solid'

export default function MyCustomDialog({
	xValue,
	yValue,
	isOpen,
	setIsOpen,
	children }) {
	return (
		<Dialog
			style={{ left: `${xValue}%`, top: `${yValue}%` }}
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