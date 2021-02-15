import React from 'react';
import { Link,Redirect} from "react-router-dom";
import { AgGridReact } from 'ag-grid-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import swal from 'sweetalert';
import { AC_VIEW_PROFILE } from '../../actions/courseaction';

class ListUserCourse extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      columnDefs :[
        { "header" : "#",field:"#", valueGetter :"node.rowIndex+1",width:"100",
        cellStyle: function(params) {
               return {'font-size': '16px','margin-top': '5px'};
         }
       },
         { "header" : "id",field:"id",width:"250",sortable: true,filter:true,
         cellStyle: function(params) {
                return {'font-size': '16px','margin-top': '5px'};
          }
         },
        { "header" : "name", field :"name",width:"250",sortable: true,filter:true,
        cellStyle: function(params) {
               return {'font-size': '16px','margin-top': '5px'};
         }
        },
      ]
    }
  }
  componentDidMount() {
    const id = localStorage.getItem("id");
    this.props.ViewProfile(id);
  }
  onSortChanged = e => {
   e.api.refreshCells();
  }

    render(){
      const courseList      = this.props.CourseReducer.courseList.courselist;
        return(
            <div className="content-wrapper">
            <div className="page-header">
              <h3 className="page-title">My Course List</h3>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">Course</li>
                  <li className="breadcrumb-item active" aria-current="page">My Course List</li>
                </ol>
              </nav>
            </div>
            <div className="col-lg-12 grid-margin stretch-card">
            <div className="card" >
              <div className="card-body">
              <div className="card-body p-0">
              <div className="ag-theme-balham" style={ {height: '600px', width: 'auto'} }>
                <AgGridReact
                    rowHeight={50}
                    rowClass ={'centerAlign'}
                    onSortChanged={this.onSortChanged}
                    rowSelection={'single'}
                    onRowClicked={(e)=>this.onRowClicked(e)}
                    pagination={true}
                    paginationAutoPageSize={true}
                    suppressCellSelection = {true}
                    columnDefs={this.state.columnDefs}
                    rowData={courseList}>
                </AgGridReact>
              </div>
           </div>
         </div>
       </div>
     </div>
    </div>
        )
    }
}

function mapStateToProps(state) {
  console.log('====reducer',state.CourseReducer);
  return {
    CourseReducer : state.CourseReducer
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ViewProfile: AC_VIEW_PROFILE},dispatch)
}
const ListUserCourseComponent = connect(mapStateToProps,mapDispatchToProps)(ListUserCourse);

export default ListUserCourseComponent;
