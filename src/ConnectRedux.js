import React from "react";
import {connect} from "react-redux";

class ConnectRedux extends React.Component {
    render() {
        return (
            <div style={{backgroundColor:"beige", marginLeft:'50px' , marginRight:'50px'}}>
                <h1>ConnectRedux Component</h1>
                <h3>get data from store redux {this.props.count}</h3>
            </div>
        )
    };
}

const mapStateToProps = (state) => {
    return {
        count: state.counter.count
    };
};
export default connect(mapStateToProps, null)(ConnectRedux);
