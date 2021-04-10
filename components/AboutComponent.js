import React, {Component}from 'react';
import { View, Text, ScrollView} from 'react-native';
import {Card} from 'react-native-elements';
import {FlatList} from 'react-native';
import {ListItem} from 'react-native-elements';
import {createStackNavigator} from "react-navigation-stack";
import {PARTNERS}  from '../shared/partners';


function Mission(){
    return(
        <Card title="Our Mission">
        <Text style={{margin: 10}}>
            We present a curated database of the best campsites in the vast woods and backcountry of the World Wide Web Wilderness. We increase access to adventure for the public while promoting safe and respectful use of resources. The expert wilderness trekkers on our staff personally verify each campsite to make sure that they are up to our standards. 
            We also present a platform for campers to share reviews on campsites they have visited with each other.
        </Text>
        </Card>

    );
}



class About extends Component {
    constructor(props){
        super(props);
        this.state = {
            parners: PARTNERS
        };
    }

    static navigationOptions = {
        title: 'About Us'
    }

    render() {
        const renderPartnerItem =({item}) => {
            return(
                <ListItem
                title={item.name}
                subtitle={item.description}
                 leftAvatar={{ source: require('./images/bootstrap-logo.png')}}
            /> 

            );
        
        };
        return(
            <ScrollView >
                <Mission />
                <Card title="Community Partners">

                    <FlatList
                    data={this.state.parners}
                    renderItem={renderPartnerItem}
                    keyExtractor={item => item.id.toString()}
                    /> 
                </Card>    
           </ScrollView>
        );
    }
}

export default About;