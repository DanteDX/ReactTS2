import {connect} from "react-redux";
import {StoreState} from "../../reducers/index";
import {employeeInterface} from "../../reducers/index";
import {AddEmployee, DeleteEmployee} from "../../actions/EmployeeAction";

interface EmployeeProps{
    employeesInformation: employeeInterface[];
    AddEmployee: Function;
    DeleteEmployee: Function;
    store?: any;   
}

const Employee = (props:EmployeeProps):JSX.Element =>{
    return(
        <div className="employeeWrapper">
            Employee Component
        </div>
    )
}


const mapStateToProps = (state:StoreState) =>({
    employeesInformation: state.employeesInformation
});
export default connect(mapStateToProps,{AddEmployee,DeleteEmployee})(Employee);