

/*
// 1 -

// and remember we want the Layout component to wrap around our page component or
// " <Component { ...pageProps } /> " so " <Component { ...pageProps } /> " will be passed in
// as a child to the Layout component


// import in the Head component
import Head from 'next/head';
// import in our meta component
import Meta from './Meta';

// import in our Nav component
// import Nav from './Nav';
// import in our Footer component
// import Footer from './Footer';

// import in our stylesheet
import styles from '../styles/Layout.module.scss';

// let's delete the Home.modules.css file

const Layout = ( { children } ) => {

    return (

        <div className={ styles.container }>

            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Meta />

            { /* <Nav /> */ /*}

            { children }

            { /* <Footer /> */ /* }

        </div>            

    );

}


export default Layout;

// End of 1 -
*/














// ===============================





















// at the beginning of lecture 10, given all the notes, I created a new file below without
// the notes so we are starting fresh

// and remember we want the Layout component to wrap around our page component or
// " <Component { ...pageProps } /> " so " <Component { ...pageProps } /> " will be passed in
// as a child to the Layout component

// import in the Head component
import Head from 'next/head';
// import in our meta component
import Meta from './Meta';


// 2 -

// import in our Header component
import Header from './Header';
// import in our Footer component
import Footer from './Footer';



// End of 2 -


// import in our stylesheet
import styles from '../styles/Layout.module.scss';


const Layout = ( { children } ) => {

    return (

        <div className={ styles.appContainer }>

            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Meta />

            <Header />

            <main>
                { children }
            </main>

            <Footer />

        </div>            

    );

}


export default Layout;

