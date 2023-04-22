/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react-hooks/exhaustive-deps */
// eslint-disable-next-line react-hooks/exhaustive-deps

import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { render } from "react-dom";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import ImageUploading from 'react-images-uploading';
import swal from 'sweetalert';
import {
  useLazyGetAllProductsQuery,
  useDeleteProductMutation,
  useUpdateProductMutation,
  useAddProductMutation,
} from "./services/api";
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 50,
  },
  preview: {
    marginTop: 50,
    display: "flex",
    flexDirection: "column",
  },
  image: { maxWidth: "100%", maxHeight: 320 },
  delete: {
    cursor: "pointer",
    padding: 15,
    background: "red",
    color: "white",
    border: "none",
  },
};
export default function AddUser() {
  const [value, setValue] = useState({
    name: null,
    price: null,
    brand: null,
    color: null,
    file: null
  });

  const [openModel, setOpenModel] = useState(false)
  const [getdata, setdata] = useState([]);
  const [selectedImage, setSelectedImage] = useState();
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
  const [UpdateCar, Updateresult] = useUpdateProductMutation();
  const {
    isSuccess: isupSuccess,
    isFetching: isupFetching,
    isError: isuprError,
    error: upError,
  } = Updateresult;
  const [images, setImages] = React.useState([]);
  const [imagUrl, setImgUrl] = useState("");
  const maxNumber = 69;
  
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };
  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
      setValue({
        ...value,
        car_file: e.target.files[0]
      })
    }
  };

  // This function will be triggered when the "Remove This Image" button is clicked
  const removeSelectedImage = () => {
    setSelectedImage();
  };
  var formdata = new FormData();
  formdata.append("name", value.name);
  formdata.append("brand", value.brand);
  formdata.append("price", value.price);
  formdata.append("color", value.color);
  formdata.append("car_file", value.car_file);
  function Insert() {
    console.log();
    // InsertNewCar(formdata);
    // console.log(CarResult);
    setadd(false);
    addsweetalert();
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
    if (isSuccess && !isFetching ||
      (isupSuccess && !isupFetching) ) {
      console.log(result);
      setdata(result.data);
    }
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

    // DelCars(id);
    // AllCars({});
    sweetalert(id);
    // console.log(id);
    // console.log(DelCar);

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
      car_file: value.car_file
    },
    id: GetId,
  };

  const changeImage = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
      setValue({
        ...value,
        car_file: e.target.files[0],
      });
    }
  };
  const confirm = () => {
    var formdata = new FormData();
    formdata.append("name", value.name);
    formdata.append("brand", value.brand);
    formdata.append("price", value.price);
    formdata.append("color", value.color);


    formdata.append("car_file", value.car_file);

    
    // window.location.reload();
    editsweetalert()
    console.log(EditCar);
    console.log(value.image);
    console.log(value.image_url);
    console.log(value.name);
    console.log(editCar);

    AllCars({});

  };

  function handleSubmit() {
    window.location.href = "/adduser";
  }
  function sweetalert(id) {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          DelCars(id);
          
        } 
      });
  }
  function editsweetalert(id){
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willEdit) => {
        if (willEdit) {
          const update = {
            formdata,
            GetId
          }
          editCars(update);
          window.location.reload();
          
        } 
      });
  }
  function addsweetalert(){
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          InsertNewCar(formdata);;
          swal("Poof! Your imaginary file has been deleted!", {
            icon: "success",
          });
        } else {
          swal("Your imaginary file is safe!");
        }
      });
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
  // console.log(imagUrl);
  return (

    <div className="p-10">
      
      <div className="flex justify-between mb-10">
        {
          add ? null :
            <button
              className="btn btn-primary"
              onClick={() => { setadd(true); value.name = ""; value.brand = ""; value.color = ""; value.price = ""; }}>
              Add New Car
            </button>
        }
        {
          add ? null :
            <div className="inline-flex">
              <button onClick={handleSubmit} className="btn border border-solid border-black">Login</button>
              <br />
              <button className="btn btn-primary">
                <a href="/Dashboard" className="block text-[#fff] no-underline">Dashboard</a>
              </button>
            </div>
        }
      </div>
      <table class="table table-striped">
        {/* <thead> */}
        {
          add ? null :
            <tr id="row">
              <th>Name</th>
              <th>Color</th>
              <th>Brand</th>
              <th>Price</th>
              <th>Upload</th>
              <th>Delete</th>
              <th>Edit</th>
            </tr>
        }
        {/* </thead> */}


        {add ? (
          <div>

            <tr id="row">
              <td>
                <input type="text" placeholder="Enter name" name="name" value={value.name} onChange={handleChange}
                />
              </td>
              <td>
                <input type="text" name="color" placeholder="Enter color" value={value.color} onChange={handleChange}
                />
              </td>
              <td>
                <input type="text" placeholder="Enter brand" value={value.brand} name="brand" onChange={handleChange}
                />
              </td>
              <td>
                <input type="text" placeholder="Enter price" value={value.price} name="price" onChange={handleChange}
                />
              </td>
              <td>
                <input
                  name="file"
                  type="file"
                  multiple
                  onChange={(e) => {
                    console.log(e.target.files);
                    setValue({
                      ...value,
                      car_file: e.target.files[0]
                    })
                  }}
                />
              </td>
              <td>
                <button className="btn btn-primary" onClick={Insert}>
                  Add new
                </button>
              </td>

            </tr>
          </div>
        ) : (
          <tbody>
            {getdata.map((i, index) => {
              return (
                <tr>
                  <td key={index}>
                    {GetId === i._id ? (
                      <input name="name" type="text" placeholder="name" value={value.name} onChange={handleChange}
                      />
                    ) : (
                      <span>{i.name}</span>
                    )}
                  </td>
                  <td>
                    {GetId === i._id ? (
                      <input name="color" type="text" placeholder="color" value={value.color} onChange={handleChange}
                      />
                    ) : (
                      <span>{i.color}</span>
                    )}
                  </td>
                  <td>
                    {GetId === i._id ? (
                      <input name="brand" type="text" placeholder="brand" value={value.brand} onChange={handleChange}
                      />
                    ) : (
                      <span>{i.brand}</span>
                    )}
                  </td>

                  <td>
                    {GetId === i._id ? (
                      <input name="price" type="text" placeholder="price" value={value.price} onChange={handleChange}
                      />
                    ) : (
                      <span>{i.price}</span>
                    )}
                  </td>
                  <td>
                    {
                      GetId === i._id ? (

                        <>
                          <input name="file" type="file" onChange={(e) => imageChange(e)} />

                          {!selectedImage ? (
                            null
                          ) : (
                            <div style={styles.preview}>
                              <img
                                src={URL.createObjectURL(selectedImage)}
                                style={styles.image}
                                alt=""
                                height="150px"
                                width="150px"

                              />
                              <button onClick={removeSelectedImage} style={styles.delete}>
                                Remove This Image
                              </button>

                            </div>
                          )}
                          <div>
                            {!selectedImage || selectedImage == "" ? (
                              <div style={styles.preview}>
                                <img src={`http://192.168.1.7:8001/file/${i.image}`} style={styles.image} alt="Thumb" height="150px" width="150px" />
                              </div>
                            ) : ("")}
                          </div>
                        </>
                      ) :
                        <div>
                          <img src={`http://192.168.1.7:8001/file/${i.image}`} alt="image" height="150px" width="150px" onClick={() => {
                            setOpenModel(true); setImgUrl(`${process.env.REACT_APP_PUBLIC_URL}/file/${i.image}`);
                            setSelectedImage("")
                            edit(i)
                          }

                          } />
                        </div>
                    }
                  </td>
                  {/* <div height="500px"> */}

                  {/* </div> */}
                  <td>
                    <button className="btn btn-danger" onClick={() => { del(i._id); }}>Delete</button>
                  </td>
                  <td>
                    {GetId === i._id ? (
                      <button className="btn btn-primary" onClick={() => {confirm(GetId);setValue(true)}}>Confirm</button>
                    ) : (
                      <button onClick={() => { edit(i); }} className="btn btn-primary">
                        Update
                      </button>
                    )}
                  </td>

                </tr>

              );
            })}
          </tbody>
        )}
      </table>
      <Modal
        classNames={{
          modal: "customModal",
          closeIcon: "color",
        }}
        open={openModel}
        onClose={() => setOpenModel(false)}
        center
        animationDuration={300}
        closeOnEsc={false}
        closeOnOverlayClick={false}
        styles={{
          overlay: {
            height: "800px",
            padding: "20px",
          },
        }}
      >
        <div>

          <tr>
            <td>
              <input name="file" type="file" onChange={(e) => changeImage(e)} />
              {!selectedImage ? (
                <div style={styles.preview}>
                  <img src={imagUrl} style={styles.image} alt="Thumb" />
                </div>
              ) : (
                <div style={styles.preview}>
                  <img
                    src={URL.createObjectURL(selectedImage)}
                    style={styles.image}
                    alt=""
                  />
                  <button onClick={removeSelectedImage} style={styles.delete}>
                    Remove This Image
                  </button>
                  <button onClick={(i) => { confirm(GetId); setOpenModel(false); }}>Edit</button>

                </div>
              )}
            </td>
          </tr>

        </div>
      </Modal>

    </div>
  );
}
