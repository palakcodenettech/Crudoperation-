import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  useLazyGetAllProductsQuery,
  useDeleteProductMutation,
  useUpdateProductMutation,
  useAddProductMutation,
} from "./services/api";
import axios from "axios";
export default function AddUser() {
  const [value, setValue] = useState({
    name: null,
    price: null,
    brand: null,
    color: null,
    file: null
  });
  const [getdata, setdata] = useState([]);
  const [getImg, setImg] = useState();
  // const [getName, setName] = useState("");
  // const [getColor, setColor] = useState("");
  // const [getBrand, setBrand] = useState("");
  // const [getPrice, setPrice] = useState("");
  // const [isEdit, setEdit] = useState(false);
  const [add, setadd] = useState(false);
  const [GetId, setId] = useState();

  const [AllCars, result] = useLazyGetAllProductsQuery();
  const [DelCars, DelCar] = useDeleteProductMutation();
  const [editCars, EditCar] = useUpdateProductMutation();
  const [InsertNewCar, CarResult] = useAddProductMutation();
  const { isSuccess: isCarSuccess, isFetching: isCarFetching } = CarResult;
  const { isSuccess: isDelCarSuccess, isFetching: isDelCarFetching } = DelCar;
  const { isSuccess: isEditCarSuccess, isFetching: isEditCarFetching } = EditCar;



  function inimg(id,img) {
    var formdata = new FormData();
    formdata.append("car_file", img);
    axios
      .post(`http://192.168.1.5:3001/cars/uplode/${id}`, formdata, {
        headers: { Authorization: `bearer ` + localStorage.token },
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  function Insert() {
    InsertNewCar(value);
    console.log(CarResult);
    // AllCars({});
    setadd(false);
  }
  const { isSuccess, isFetching } = result;
  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    AllCars({});
  }, []);

  useEffect(() => {
    if (isSuccess && !isFetching) {
      console.log(result);
      setdata(result.data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess, isFetching]);

  useEffect(() => {
    if (isCarSuccess && !isCarFetching) {
      AllCars({})
    }
  }, [isCarSuccess, isCarFetching]);


  useEffect(() => {
    if (isEditCarSuccess && !isEditCarFetching) {
      AllCars({})
    }
  }, [isEditCarSuccess, isEditCarFetching]);



  useEffect(() => {
    if (isDelCarSuccess && !isDelCarFetching) {
      AllCars({})
    }
  }, [isDelCarSuccess, isDelCarFetching]);
  const del = (id) => {

    DelCars(id);
    AllCars({});
    console.log(id);
    console.log(DelCar);
  };

  const edit = (data) => {
    console.log(data);
    setValue(data);

    setId(data._id);
  };

  const editCar = {
    value: {
      name: value.name,
      brand: value.brand,
      price: value.price,
      color: value.color,
      file: value.file
    },
    id: GetId,
  };

  const confirm = () => {
    editCars(editCar);
    console.log(EditCar);

    AllCars({});
    window.location.reload();

  };

  function handleSubmit() {
    window.location.href = "/adduser";
  }
  // function Alldata() {
  //   axios
  //     .get("http://192.168.1.7:3001/cars/getdata", {
  //       headers: {
  //         Authorization:
  //           "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBhbGFrQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoicGFsYWsxMjMiLCJpYXQiOjE2ODExODg1OTV9.u93i3pRaN8l5A_vAO0pES4y4hWYGxyyBptTNJPVhu-Q",
  //       },
  //     })
  //     .then(function (res) {
  //       console.log(res.data);
  //       setdata(res.data);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }

  // const Delete = (id) => {
  //   axios
  //     .delete(`http://192.168.1.7:3001/cars/deletedata/${id}`, {
  //       headers: {
  //         Authorization:
  //           "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBhbGFrQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoicGFsYWsxMjMiLCJpYXQiOjE2ODExODg1OTV9.u93i3pRaN8l5A_vAO0pES4y4hWYGxyyBptTNJPVhu-Q",
  //       },
  //     })
  //     .then(function (response) {
  //       console.log(response);
  //       // window.location.reload(true);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // };
  // const Edit = (response) => {
  //   setId(response._id);
  //   console.log(response._id);
  //   // setName(response.name);
  //   // setColor(response.color);
  //   // setBrand(response.brand);
  // setPrice(response.price);
  //   setEdit(true);
  // };

  // const Confirm = (id) => {
  //   axios
  //     .put(
  //       `http://192.168.1.7:3001/cars/update/${id}`,
  //       {
  //         name: getName,
  //         brand: getBrand,
  //         color: getColor,
  //         price: getPrice,
  //       },
  //       {
  //         headers: {
  //           Authorization:
  //             "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBhbGFrQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoicGFsYWsxMjMiLCJpYXQiOjE2ODExODg1OTV9.u93i3pRaN8l5A_vAO0pES4y4hWYGxyyBptTNJPVhu-Q",
  //         },
  //       }
  //     )

  //     .then(function (response) {
  //       Alldata();
  //       console.log(id);

  //       window.location.reload();
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // };
  // const Insert = () => {
  //   console.log(value);
  //   axios
  //     .post(
  //       "http://192.168.1.7:3001/cars/insert",
  //       {
  //         name: value.name,
  //         brand: value.brand,
  //         price: value.price,
  //         color: value.color,
  //       },
  //       {
  //         headers: {
  //           Authorization:
  //             "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBhbGFrQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoicGFsYWsxMjMiLCJpYXQiOjE2ODExODg1OTV9.u93i3pRaN8l5A_vAO0pES4y4hWYGxyyBptTNJPVhu-Q",
  //         },
  //       }
  //     )
  //     .then(function (res) {
  //       console.log(res.data);

  //       AllCars();
  //       setadd(false);
  //       // setdata(res.data)
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // };

  return (
    <div>
      <button
        className="btn btn-primary text-center m-auto"
        onClick={() => { setadd(true); value.name = ""; value.brand = ""; value.color = ""; value.price = ""; }}>
        Add New Car
      </button>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Color</th>
            <th scope="col">Brand</th>
            <th scope="col">Price</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>

        {add ? (
          <tr id="row">
            <td>
              <input
                type="text"
                placeholder="name"
                name="name"
                value={value.name}
                onChange={handleChange}
              />
            </td>
            <td>
              <input
                type="text"
                name="color"
                placeholder="color"
                value={value.color}
                onChange={handleChange}
              />
            </td>
            <td>
              <input
                type="text"
                placeholder="brand"
                value={value.brand}
                name="brand"
                onChange={handleChange}
              />
            </td>
            <td>
              <input
                type="text"
                placeholder="price"
                value={value.price}
                name="price"
                onChange={handleChange}
              />
            </td>
            <td>
              <button className="btn btn-primary" onClick={Insert}>
                Add new
              </button>
            </td>
          </tr>
        ) : (
          <tbody>
            {getdata.map((i, index) => {
              return (
                <tr>
                  <td key={index}>
                    {GetId === i._id ? (
                      <input
                        name="name"
                        type="text"
                        placeholder="getName"
                        value={value.name}
                        onChange={handleChange}
                      />
                    ) : (
                      <span>{i.name}</span>
                    )}
                  </td>
                  <td>
                    {GetId === i._id ? (
                      <input
                        name="color"
                        type="text"
                        placeholder="color"
                        value={value.color}
                        onChange={handleChange}
                      />
                    ) : (
                      <span>{i.color}</span>
                    )}
                  </td>
                  <td>
                    {GetId === i._id ? (
                      <input
                        name="brand"
                        type="text"
                        placeholder="brand"
                        value={value.brand}
                        onChange={handleChange}
                      />
                    ) : (
                      <span>{i.brand}</span>
                    )}
                  </td>
                  <td>
                    {GetId === i._id ? (
                      <input
                        name="price"
                        type="text"
                        placeholder="price"
                        value={value.price}
                        onChange={handleChange}
                      />
                    ) : (
                      <span>{i.price}</span>
                    )}
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        del(i._id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                  <td>
                    {GetId === i._id ? (
                      <button
                        className="btn btn-primary"
                        onClick={() => confirm(GetId)}
                      >
                        Confirm
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          edit(i);
                        }}
                        className="btn btn-primary"
                      >
                        Update
                      </button>
                    )}
                  </td>
                  <td>
                    {
                      GetId === i._id ? (
                        <span>image</span>
                        
                      ) : <input
                      name="file"
                      type="file"
                      onChange={(e) => {
                        // setimg(e.target.files[0]);
                        // setId(i.i_id)
                        inimg(i._id,e.target.files[0]);
                        // console.log(e.target.files[0]);
                      }}
                    />
                    }
                  </td>
                </tr>
              );
            })}
          </tbody>
        )}
      </table>
      <button onClick={handleSubmit}>Login</button>
      <br />
      <a href="/Dashboard">Dashboard</a>
    </div>
  );
}
