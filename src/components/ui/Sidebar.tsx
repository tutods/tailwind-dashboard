import { forwardRef } from 'react';
import Link from 'next/link';
import { HomeIcon, CreditCardIcon, UserIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/router';
import Image from 'next/image';

type Props = {
	showNav: boolean;
};

const MENU_ITEMS = [
	{
		name: 'Dashboard',
		icon: HomeIcon,
		path: '/'
	},
	{
		name: 'Profile',
		icon: UserIcon,
		path: '/profile'
	},
	{
		name: 'Credit Card',
		icon: CreditCardIcon,
		path: '/credit'
	}
];

const ACTIVE_STYLING = 'bg-orange-100 text-orange-500';
const HOVER_STYLING = ACTIVE_STYLING.split(' ')
	.map((style) => `hover:${style}`)
	.join(' ');

const isActivePath = (path: string, currentPath: string) =>
	path === '/' ? currentPath === path : currentPath.includes(path);

// eslint-disable-next-line react/display-name
export const Sidebar = forwardRef<HTMLElement, Props>(({ showNav }, ref) => {
	const router = useRouter();

	return (
		<aside ref={ref} className={'fixed w-56 h-full bg-white shadow-sm'}>
			<div className="flex justify-center mb-14">
				<Image src={'/ferox-transparent.png'} alt={'Ferox'} width={100} height={100} />
			</div>

			<ul className={'flex flex-col gap-2'}>
				{MENU_ITEMS.map(({ name, icon: Icon, path }) => (
					<li key={name.toLowerCase().replace(' ', '-')}>
						<Link
							href={'/'}
							className={`pl-6 py-3 rounded text-center cursor-pointer flex items-center gap-2 transition-colors ease-in-out duration-150 ${HOVER_STYLING} ${
								isActivePath(path, router.pathname)
									? ACTIVE_STYLING
									: 'text-gray-400'
							}`}
						>
							<Icon className={'h-5 w-5'} />
							{name}
						</Link>
					</li>
				))}
			</ul>
		</aside>
	);
});
