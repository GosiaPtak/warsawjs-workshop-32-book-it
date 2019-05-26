import { connect } from 'react-redux';
import { getData } from 'store/actions';

import { Home } from './Home';

const mapStateToProps = state => ({
hotelsList: state.hotels,
});

const mapsDispatchToProps = dispatch => ({
    getData: () => dispatch(getData()),
});

const HomeWithState = connect (mapStateToProps, mapsDispatchToProps)(Home);

export  {HomeWithState as Home};
//const homeWithProps = connect()(Home);
