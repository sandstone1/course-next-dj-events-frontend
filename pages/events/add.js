
// 1 -


const AddEventPage = () => {

    return (

        <div>

            <h1>Add Event</h1>
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


export default AddEventPage;

// and if we test this page out by going to " http://localhost:3011/events/add " we see that
// everything is working as expected

// if we wanted to go to " http://localhost:3011/event-1 " then all we need to do is create
// a new file inside the events folder called " [slug] " and in this case " slug " will be
// our route parameter

// and let's go to the events/[slug].js 1 - file now

// End of 1 -
