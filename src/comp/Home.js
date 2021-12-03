import React from "react";
import { render } from "react-dom";
import UserService from "../service/UserService";

class Home extends React.Component{
        constructor(props){
            super(props)
            this.state={
                users:[]
            }
        }

        componentDidMount(){
            UserService.getUsers().then((response)=>{
                this.setState({users:response.data})
            });
        }

        render(){
            return(
                <div>
                    <h1 className="text-center">Emp list</h1>
                    <table className="table table-striped table-bordered table-hover">
                        <thead>
                            <tr>
                                <td>ID</td>
                                <td>Name</td>
                                <td>Age</td>
                                <td>department</td>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.users.map(
                                    user=>
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.age}</td>
                                        <td>{user.department.name}</td>

                                        <td><button>click</button></td>
                                   

                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            )
        }
}


export default Home