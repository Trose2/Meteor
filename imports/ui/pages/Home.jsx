

 

import React from 'react';


import { createContainer } from 'meteor/react-meteor-data';
//import Donuts from '/imports/api/donuts/collection.js'
class Home extends React.Component {
    render() {
        const {loading, donuts} = this.props;
        
        if (loading) {
            return <div>Waiting for the method</div>
        }
        
        return (
            <div>
                {
                    donuts.map(donut => {
                       return <div key={donut._id}>{donut._id}</div>
               

                })
                }
            </div>
        )
    }         
}
export default createContainer((props) => {
    const handle = Meteor.subscribe('donuts');
    
    
    return {
        loading: !handle.ready(),
        donuts: Donuts.find().fetch()
    }
}

, Home)             
