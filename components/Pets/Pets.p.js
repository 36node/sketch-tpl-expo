import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, Text } from 'react-native';

class Pets extends React.Component{
    componentDidMount() {
        this.props.fetchPets();
    }

    render() {
        return (<FlatList
            data={this.props.list}
            renderItem={({item}) => <Text>{item.name}</Text>}
        />);
    }
}

Pets.propTypes = {
    list: PropTypes.array.isRequired,
    fetchPets: PropTypes.func.isRequired,
};

export default Pets;
