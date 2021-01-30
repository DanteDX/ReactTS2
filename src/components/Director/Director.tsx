import {connect} from "react-redux";
import {StoreState} from "../../reducers/index";
import {directorInterface} from "../../reducers/index";
import {AddDirector, DeleteDirector} from "../../actions/DirectorAction";

interface DirectorProps{
    directorsInformation: directorInterface[];
    AddDirector: Function;
    DeleteDirector: Function;
}

const Director = (props:DirectorProps):JSX.Element =>{
    return(
        <div>
            Director Component
        </div>
    )
}


const mapStateToProps = (state:StoreState) =>({
    directorsInformation: state.directorsInformation
});
export default connect(mapStateToProps,{AddDirector,DeleteDirector})(Director);