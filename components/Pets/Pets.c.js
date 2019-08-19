import { connect } from 'react-redux';
import _ from 'lodash';
import P from './Pets.p';
import { REDUX_NAMESPACE } from './Pets.constants';
import { fetchPets } from './Pets.actions';
import './Pets.reducer';

function mapStateToProps(state) {
    return {
        list: _.get(state, `${REDUX_NAMESPACE}.pets`, []),
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchPets: () => dispatch(fetchPets()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(P);
