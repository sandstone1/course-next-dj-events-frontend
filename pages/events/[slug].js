
/*
// 1 -

const EventPage = () => {

    return (

        <div>

            <h1>My Event</h1>
            <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                anim id est laborum."
            </p>

        </div>

    );

}


export default EventPage;

// and if we test this page out by going to " http://localhost:3011/events/event-1 " or if we
// go to " http://localhost:3011/events/1 " we see that everything is working as expected

// and let's go back to the about.js 2 - file now

// End of 1 -
*/














// ===============================




















/*
// at the beginning of lecture 8, given all the notes, I created a new file below without
// the notes so we are starting fresh

// the url for this page could be: " http://localhost:3011/events/event-1 " or
// " http://localhost:3011/events/1 "


// 2 -

// coming from the index.js 1 - file

// import in the useRouter(); hook
import { useRouter } from 'next/router';

// End of 2 -


const EventPage = () => {


    // 2 - continued

    // initialize router
    const router = useRouter();

    console.log( router );

    // and we see that " console.log( router ); " gives us the following ( and this assumes
    // that I'm on the following url " http://localhost:3011/events/1 " ):

    /*
        asPath: "/events/1"
        back: ƒ ()
        basePath: ""
        beforePopState: ƒ ()
        components: {/events/[slug]: {…}, /_app: {…}}
        defaultLocale: undefined
        events: {on: ƒ, off: ƒ, emit: ƒ}
        isFallback: false
        isLocaleDomain: false
        isPreview: false
        isReady: true
        locale: undefined
        locales: undefined
        pathname: "/events/[slug]"
        prefetch: ƒ ()
        push: ƒ ()
        query:
            slug: "1"
            __proto__: Object
        reload: ƒ ()
        replace: ƒ ()
        route: "/events/[slug]"
        __proto__: Object
    */

    // so we see that router gives us the pathname and we see the query property and from that
    // property we see the route parameter or " slug " and value of the rotue parameter or " 1 "
    // and the reason the route parameter is called " slug " is because we called the file
    // " slug "
    
    // and we also see that router gives us " push "

    // End of 2 -


    /*
    return (

        <div>

            <h1>My Event</h1>
            <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                anim id est laborum."
            </p>

        </div>

    );

}


export default EventPage;
*/














// ===============================





















// at the beginning of lecture 8, given all the notes, I created a new file below without
// the notes so we are starting fresh

// the url for this page could be: " http://localhost:3011/events/event-1 " or
// " http://localhost:3011/events/1 "


const EventPage = () => {

    return (

        <div>

            <h1>My Event</h1>
            <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                anim id est laborum."
            </p>

        </div>

    );

}


export default EventPage;

