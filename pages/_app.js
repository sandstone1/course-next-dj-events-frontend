

// import in the Layout component
import Layout from '../components/Layout';
// import in our global stylesheet
import '../styles/globals.scss';

// create the MyApp component and pass in the page component or " Component " and the
// page props or " pageProps "
const MyApp = ( { Component, pageProps } ) => {

	// and now let's wrap our Layout component around our page component
    return ( 
		
		<Layout>
		
			<Component { ...pageProps } />

		</Layout>

	);

}


export default MyApp
