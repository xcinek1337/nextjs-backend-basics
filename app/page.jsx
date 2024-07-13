import Feed from '@components/Feed';
import React, { Suspense } from 'react';
import Loading from './loading';

const Home = () => {
	return (
		<section className='w-full flex-center flex-col'>
			<h1 className='head_text text-center'>
				Discover & Share
				<br className='max-md:hidden' />
				<span className='orange_gradient text-center'> AI-Powered Prompts</span>
			</h1>
			<p className='desc text-center'>
				Promptopia is a an open-source AI prompting tool for modern wordl to sicvocer, create and share creative prompts
			</p>

			<Suspense fallback={<Loading />}>
				<Feed />
			</Suspense>
		</section>
	);
};

export default Home;
