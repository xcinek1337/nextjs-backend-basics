'use client';
import { useEffect, useState } from 'react';

import PromptCard from './PromptCard';
const PromptCardList = ({ data, handleTagClick }) => {
	return (
		<div className='mt-16 prompt_layout'>
			{data.map((post) => {
				return (
					<PromptCard
						key={post._id}
						post={post}
						handleTagClick={handleTagClick}
					/>
				);
			})}
		</div>
	);
};

const Feed = () => {
	const [posts, setPosts] = useState([]);

	// search states
	const [searchText, setsearchText] = useState('');
	const [searchTimeout, setSearchTimeout] = useState(null);
	const [filteredPosts, setFilteredPosts] = useState([]);

	useEffect(() => {
		const fetchPosts = async () => {
			const response = await fetch('/api/prompt');
			const data = await response.json();

			setPosts(data);
			setFilteredPosts(data);
		};
		fetchPosts();
	}, []);

	const filterPrompts = (searchText) => {
		const regex = new RegExp(searchText, 'i'); // i to flaga ktora ingoruje wielkie litery
		return posts.filter((post) => regex.test(post.creator.username) || regex.test(post.prompt) || regex.test(post.tag));
	};
	
	const handleSearchChange = (e) => {
		//z kazdym klinkieciem w klawiature aktywuje sie i clear timeout i setTimeout, dopiero gdy nie klikniemy przez 300ms to wykona sie setTimeout - sprytny debounce
		clearTimeout(searchTimeout);
		setsearchText(e.target.value);

		setSearchTimeout(
			setTimeout(() => {
				const filtered = filterPrompts(e.target.value);
				console.log(filtered);
				setFilteredPosts(filtered);
			}, 300)
		);
	};

	const handleTagClick = (tag) => {
		setsearchText(tag);

		const filtered = filterPrompts(tag);
		setFilteredPosts(filtered);
	};

	return (
		<section className='feed'>
			<form action='relative w-full flex-center'>
				<input
					type='text'
					placeholder='Search for a tag or a username'
					value={searchText}
					onChange={handleSearchChange}
					required
					className='search_input peer'
				/>
			</form>

			<PromptCardList
				data={filteredPosts}
				handleTagClick={handleTagClick}
			/>
		</section>
	);
};

export default Feed;
