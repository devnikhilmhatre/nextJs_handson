import React from 'react';


class Home extends React.Component {

    componentDidMount = () => {
        if ("serviceWorker" in navigator) {
            navigator.serviceWorker.register('/service-worker.js')
                .catch(err => console.log('err', err))
        }
    }

    render() {
        return (
            <div>
                Welcome..!!!
            </div>
        )
    }
};

export default Home;