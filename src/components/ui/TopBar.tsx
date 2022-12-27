import { Dispatch, Fragment, SetStateAction } from 'react';
import { Bars3CenterLeftIcon, CheckIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { Popover, Transition } from '@headlessui/react';
import { BellIcon } from '@heroicons/react/24/outline';

type Props = {
	showNav: boolean;
	setShowNav: Dispatch<SetStateAction<boolean>>;
};

export const TopBar = ({ showNav, setShowNav }: Props) => {
	return (
		<section
			className={`fixed w-full h-16 flex justify-between items-center transition-all duration-[400ms] ${
				showNav ? 'pl-56' : ''
			}`}
		>
			<div className="px-4 md:px-16">
				<Bars3CenterLeftIcon
					className={'h-8 w-8 cursor-pointer text-gray-700'}
					onClick={() => setShowNav((prev) => !prev)}
				/>
			</div>
			<div className="flex items-center pr-4 md:pr-16 gap-5 md:gap-8">
				<Popover className={'relative'}>
					<Popover.Button className={'outline-none cursor-pointer text-gray-700'}>
						<BellIcon className={'h-6 w-6'} />
					</Popover.Button>
					<Transition
						as={Fragment}
						enter={'transition ease-out duration-100'}
						enterFrom={'transform slace-95'}
						enterTo={'transform scale-100'}
						leave={'transition ease-in duration-75'}
						leaveFrom={'transform scale-100'}
						leaveTo={'transform scale-95'}
					>
						<Popover.Panel
							className={
								'absolute -right-16 sm:right-0 z-50 mt-2 bg-white shadow-sm rounded max-w-xs sm:max-w-sm w-screen p-4'
							}
						>
							<div className="flex justify-between items-center">
								<p className="text-gray-700 font-bold">Notifications</p>
								<button className="text-sm font-medium text-orange-500 bg-transparent py-1 px-2 border border-orange-500 rounded shadow transition-colors ease-in-out duration-300 hover:bg-orange-100">
									Mark all as read
								</button>
							</div>
							<ul className="flex flex-col gap-4 mt-4">
								<li className="flex items-center gap-4">
									<div className="rounded-full shrink-0 bg-green-200 h-8 w-8 flex items-center justify-center">
										<CheckIcon className={'h-4 w-4 text-green-600'} />
									</div>

									<div className={'flex flex-col'}>
										<p className="font-medium text-gray-700">
											Notification text
										</p>
										<p className="text-sm text-gray-500 truncate">
											Notification description
										</p>
									</div>
								</li>
								<li className="flex items-center gap-4">
									<div className="rounded-full shrink-0 bg-red-200 h-8 w-8 flex items-center justify-center">
										<XMarkIcon className={'h-4 w-4 text-red-600'} />
									</div>

									<div className={'flex flex-col'}>
										<p className="font-medium text-gray-700">
											Notification text
										</p>
										<p className="text-sm text-gray-500 truncate">
											Notification description
										</p>
									</div>
								</li>
							</ul>
						</Popover.Panel>
					</Transition>
				</Popover>
			</div>
		</section>
	);
};