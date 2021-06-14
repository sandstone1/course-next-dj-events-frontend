

/*
// 1 -

// let's clean up this file

// import in the Link component
import Link from 'next/link';

// link to the about page below and now let's talk a little bit about the router and we can
// use the router to programmatically redirect and we can use router to get a route parameter
// such as a slug or id

// let's go to our [slug].js 2 - file now


export default function Home() {

	return (

		<div>

			<h1>Home</h1>

			<Link href="/about">
				<a>About</a>
			</Link>

		</div>

	);

}

// End of 1 -
*/















// ===============================




















/*
// at the beginning of lecture 9, given all the notes, I created a new file below without
// the notes so we are starting fresh

// import in the Link component
import Link from 'next/link';


// 2 - 

// import in the Head component
// import Head from 'next/head';

// and then place the Head component below with the title and meta description tag but now
// let's erase the title and meta description tag and place these elements in the Layout
// component instead

// let's create a components folder and inside this folder let's create a Layout component
// and let's go to the Layout.js 1 - file now

// End of 2 -


// 3 -

// remove the Head component above and below since we have the Meta component in the Layout
// component so every page in the application will have the Meta component by default

// End of 3 -


export default function HomePage() {

	return (

		<div>

			{ 
				/*
				<Head>
					<title>DJ Events</title>
					<meta name="description" content="Welcome to DJ Events" />
				</Head>
				*/ /*
			}

			<h1>Home</h1>

			<Link href="/about">
				<a>About</a>
			</Link>

		</div>

	);

}
*/















// ===============================





















// at the beginning of lecture 10, given all the notes, I created a new file below without
// the notes so we are starting fresh

export default function HomePage() {

	return (

		<div>

			<h1>Home</h1>

		</div>

	);

}

