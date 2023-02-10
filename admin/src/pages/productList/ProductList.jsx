import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext} from "react";
import { MovieContext } from "../../context/movieContext/MovieContext";
import { useEffect } from "react";
import { deleteMovie, getMovies } from "../../context/movieContext/apiCalls";

export default function ProductList() {
  const {movies, dispatch} = useContext(MovieContext)

  const handleDelete = (id) => {
    deleteMovie(id,dispatch);
  };

  useEffect(()=>{
    getMovies(dispatch);
  }, [dispatch]);

  const columns = [
    { field: "_id", headerName: "ID", width: 90 },
    {
      field: "courseName",
      headerName: "Course Name",
      width: 130,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            {params.row.title}
          </div>
        );
      },
    },
    { field: "courseNo", headerName: "Course No", width: 120 },
    { field: "theoryCredits", headerName: "Theory Credits", width: 120 },
    { field: "labCredits", headerName: "Lab Credits", width: 120 },
    { field: "degree", headerName: "Degree", width: 120 },
    { field: "department", headerName: "Department", width: 120 },
    { field: "program", headerName: "Program", width: 120 },


    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={{pathname:"/product/" + params.row._id, course: params.row}}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <DataGrid
        rows={movies}
        disableSelectionOnClick
        columns={columns}
        pageSize={10}
        checkboxSelection
        getRowId={(r)=>r._id}
      />
    </div>
  );
}
