
// the meta component will allow us to bring in meta tags, a page title, page keywords, etc.
// and do so across the entire application

// import in Head
import Head from 'next/head';

// let's bring in as arguments to the Meta component the Head attributes we need like the
// title, keywords and description
const Meta = ( { title, keywords, description } ) => {

    return (

        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="keywords" content={ keywords } />
            <meta name="description" content={ description } />
            <title>{ title }</title>
        </Head>

    );

}

// set the defaultProps
Meta.defaultProps = {

    title       : 'DJ Events | Find the hottest parties',
    keywords    : 'music, dj, events',
    description : 'Find the latest DJ and other musical events'

}


export default Meta;
