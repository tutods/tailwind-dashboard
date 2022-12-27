import { forwardRef } from 'react';
import Link from 'next/link';
import { HomeIcon, CreditCardIcon, UserIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/router';
import Image from 'next/image';

type Props = {
	showNav: boolean;
};

// eslint-disable-next-line react/display-name
export const Sidebar = forwardRef<HTMLElement, Props>(({ showNav }, ref) => {
	const router = useRouter();

	return (
		<aside ref={ref} className={'fixed w-56 h-full bg-white shadow-sm'}>
			<div className="flex justify-center mb-14">
				<Image src={'/ferox-transparent.png'} alt={'Ferox'} width={100} height={100} />
			</div>

			<ul className={'flex flex-col gap-2'}>
				<li>
					<Link
						href={'/'}
						className={`pl-6 py-3 rounded text-center cursor-pointer flex items-center gap-2 transition-colors ease-in-out duration-150 ${
							router.pathname === '/'
								? 'bg-orange-100 text-orange-500'
								: 'text-gray-400 hover:text-orange-500 hover:bg-orange-500'
						}`}
					>
						<HomeIcon className={'h-5 w-5'} />
						Home
					</Link>
				</li>
				<li>
					<Link
						href={'/credit'}
						className={`pl-6 py-3 rounded text-center cursor-pointer flex items-center gap-2 transition-colors ease-in-out duration-150 border-r-2 ${
							router.pathname === '/credit'
								? 'bg-orange-100 text-orange-500 border-r-orange-500'
								: 'text-gray-400 hover:text-orange-500 hover:bg-orange-100 border-r-transparent'
						}`}
					>
						<CreditCardIcon className={'h-5 w-5'} />
						Credit Card
					</Link>
				</li>
			</ul>
		</aside>
	);
});
