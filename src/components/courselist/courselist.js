import React from 'react';
import { Link,Redirect} from "react-router-dom";
import { AgGridReact } from 'ag-grid-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import swal from 'sweetalert';
import { AC_LIST_COURSE} from '../../actions/courseaction';

class CourseList extends React.Component{
  constructor(props) {
    super(props);
    const type = localStorage.getItem("usertype");
    console.log('==type',type);
    this.state = {
      columnDefs :[
        { "header" : "#",field:"#", valueGetter :"node.rowIndex+1",width:"50",
        cellStyle: function(params) {
               return {'font-size': '16px','margin-top': '5px'};
         }
       },
         { "header" : "id",field:"id",width:"100",sortable: true,filter:true,
         cellStyle: function(params) {
                return {'font-size': '16px','margin-top': '5px'};
          }
         },
        { "header" : "name", field :"name",width:"100",sortable: true,filter:true,
        cellStyle: function(params) {
               return {'font-size': '16px','margin-top': '5px'};
         }
        },
        { "header" : "department",field:"department", width:"100",sortable: true,filter:true,
        cellStyle: function(params) {
               return {'font-size': '16px','margin-top': '5px'};
         }
       },
        { "header" : "description", field :"description",width:"330",sortable: true,filter:true,
        cellStyle: function(params) {
               return {'font-size': '16px','margin-top': '5px'};
         }
        },
        { "header" : "courseroom",field:"courseroom", width:"130",sortable: true,filter:true,
        cellStyle: function(params) {
               return {'font-size': '16px','margin-top': '5px'};
         }
       },
         { "header" : "courseteam",field:"courseteam",width:"130",sortable: true,filter:true,
         cellStyle: function(params) {
                return {'font-size': '16px','margin-top': '5px'};
          }
      },
      { "header" : "waitlistcapacity",field:"waitlistcapacity",width:"130",sortable: true,filter:true,
      cellStyle: function(params) {
             return {'font-size': '16px','margin-top': '5px'};
       }
     },
     { headerName: 'Actions', width: "300",sortable: false,filter:false,
         template:
           `<div>
           <div class="btn btn-info btn-sm" href='#' style={{marginRight:"10px"}} data-action-type="View">
           <i class="fas fa-folder"  style={{padding: "10px"}} data-action-type="View"></i>
           Add this Course
           </div>
           </div>`,
           cellStyle: function(params) {
                  return {'margin-top' :'8px'};
          },
       },

      ]
    }
  }
  componentDidMount() {
    this.props.ListCourse();
  }
  onSortChanged = e => {
   e.api.refreshCells();
  }
  onRowClicked = event =>{
   const rowValue = event.event.target;
   const value    = rowValue.getAttribute('data-action-type');
   if(value === 'View'){
     this.setState({redirect:'View',id:event.data._id})
   }
 }


    render(){
      const courseCount     = this.props.CourseReducer.courseCount;
      const courseList      = this.props.CourseReducer.courseList;
      if(this.state.redirect === 'View'){
      return <Redirect to ={'/viewCourse/'+this.state.id}/>
    }

        return(
            <div className="content-wrapper">
            <div className="page-header">
              <h3 className="page-title">Course List</h3>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">Course</li>
                  <li className="breadcrumb-item active" aria-current="page">Course List</li>
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
  return {
    CourseReducer : state.CourseReducer
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ListCourse: AC_LIST_COURSE},dispatch)
}
const CourseListComponent = connect(mapStateToProps,mapDispatchToProps)(CourseList);

export default CourseListComponent;
