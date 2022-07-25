import {useNavigate} from 'react-router-dom'

import NewMeetupForm from "../components/meetups/NewMeetupForm";


function NewMeetupPage() {
    const nav = useNavigate();

    function addMeetupHandler(meetupData) {
        fetch(
            'https://react-tutorial-e61b0-default-rtdb.europe-west1.firebasedatabase.app/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(() => {
            nav("/", {replace: true});
        });

    }

    return <section>
        <h1>Add New Meetup</h1>
        <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </section>;
}

export default NewMeetupPage;