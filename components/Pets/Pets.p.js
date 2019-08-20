import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, Text } from 'react-native';
import StyledText from './Pets.styled';;

class Pets extends React.Component{
    componentDidMount() {
        this.props.fetchPets();
    }

    render() {
        return (<FlatList
            data={this.props.list}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => <StyledText>{item.name}</StyledText>}
        />);
    }
}

Pets.propTypes = {
    list: PropTypes.array.isRequired,
    fetchPets: PropTypes.func.isRequired,
};

export default Pets;
