import { ChevronDoubleRightIcon, ChevronRightIcon, HomeIcon } from '@heroicons/react/24/solid';

const Home = () => {
	return (
		<>
			<section className="mb-16">
				<p className={'text-gray-700 text-3xl font-bold'}>Dashboard</p>
				<ul className="flex items-center gap-2 text-gray-500 text-sm">
					<li>
						<HomeIcon className={'h-4 w-4'} />
					</li>
					<li>
						<ChevronRightIcon className={'h-3 w-3'} />
					</li>
					<li className={'font-medium'}>Dashboard</li>
				</ul>
			</section>

			<div className="grid lg:grid-cols-3 gap-5 mb-8">
				<div className={'rounded bg-white h-40 shadow-sm p-4'}></div>
				<div className={'rounded bg-white h-40 shadow-sm p-4'}></div>
				<div className={'rounded bg-white h-40 shadow-sm p-4'}></div>
			</div>
			<div className="grid grid-cols-1 h-96 shadow-sm bg-white shadow-sm rounded"></div>
		</>
	);
};

export default Home;
