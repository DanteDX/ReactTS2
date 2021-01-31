import {connect} from "react-redux";
import {StoreState} from "../../reducers/index";
import {directorInterface} from "../../reducers/index";
import {AddDirector, DeleteDirector} from "../../actions/DirectorAction";
import "./Director.scss";
import {useState} from "react";

interface DirectorProps{
    directorsInformation: directorInterface[];
    AddDirector: Function;
    DeleteDirector: Function;
    store?: any;
}

const Director = (props:DirectorProps):JSX.Element =>{
    const [directorName,setDirectorName] = useState("");
    const [directorPosition,setDirectorPosition] = useState("");
    const directorHandler = () =>{
        const info = {
            directorId: props.directorsInformation.length + 1,
            directorName,
            directorPosition
        };
        props.AddDirector(info);
        setDirectorName("");
        setDirectorPosition("");
    }
    const directorList = props.directorsInformation.map(eachDirector =>(
        <li key={eachDirector.directorId} onClick={e => props.DeleteDirector(eachDirector.directorId)}>
            Name:{eachDirector.directorName}
            <br/>
            Position:{eachDirector.directorPosition}
            <br/>
        </li>
    ));
    return(
        <div className="directorWrapper">
            Director Component
            <ol>
                {directorList.slice(1,directorList.length)}
            </ol>
            <label htmlFor="directorName">Director Name:</label>
            <input type="text" name="directorName" id="directorName" value={directorName} onChange={e => setDirectorName(e.currentTarget.value)} />
            <br/>
            <label htmlFor="directorPosition">Director Position</label>
            <input type="text" name="directorPosition" id="directorPosition" value={directorPosition} onChange={e => setDirectorPosition(e.currentTarget.value)} />
            <button onClick={e => directorHandler()}>Add Director</button>
        </div>
    )
}


const mapStateToProps = (state:StoreState) =>({
    directorsInformation: state.directorsInformation
});
export default connect(mapStateToProps,{AddDirector,DeleteDirector})(Director);