/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react-hooks/exhaustive-deps */
// eslint-disable-next-line react-hooks/exhaustive-deps

import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { useFormik } from "formik";
import swal from 'sweetalert';
import { useLazyGetAllProductsQuery, useDeleteProductMutation, useUpdateProductMutation, useAddProductMutation, } from "./services/api";
import { addUserSchema } from "./addUserSchema";
import { Link } from "react-router-dom";
import Login from "./Login";




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
  const initialValues = {
    name: null,
    color: null,
    brand: null,
    price: null
  };
  const [openModel, setOpenModel] = useState(false)
  const [getdata, setdata] = useState([]);
  const [selectedImage, setSelectedImage] = useState();
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
  const [imagUrl, setImgUrl] = useState("");
  // This function will be triggered when the "Remove This Image" button is clicked


  // const userType = window.localStorage.getItem('email')
  // let email;
  // email = userType === "email" ? true : false
  // let Authorization = { 'token': Authorization }

  // Authorization.token ? <Login /> : <AddUser to="/" />
  


  function Insert() {
    console.log();
    // InsertNewCar(formdata);
    // console.log(CarResult);
    setadd(false);
    addsweetalert();
  }
  const del = (id) => {
    sweetalert(id);
  };
  const edit = (data) => {
    console.log(data);
    setFieldValue("name", data.name);
    setFieldValue("color", data.color);
    setFieldValue("brand", data.brand);
    setFieldValue("price", data.price);
    if (selectedImage === "") {
      console.log("blank");
    }
    else {
      setFieldValue("car_file", data.car_file);
      console.log("file");
    }
    setId(data._id);
  };
  const confirm = () => {
    var formdata = new FormData();
    formdata.append("name", initialValues.name);
    formdata.append("brand", initialValues.brand);
    formdata.append("price", initialValues.price);
    formdata.append("color", initialValues.color);
    formdata.append("car_file", initialValues.car_file);
    
    // editCars(update);
    // window.location.reload();
    editsweetalert()
    console.log(EditCar);
    console.log(values.image);
    console.log(values.image_url);
    console.log(values.name);
    AllCars({});
    setId("")
  };

  function handlesubmit() {
    window.location.href = "/adduser";
  }
  const { values, errors, touched, handleBlur, handleSubmit, handleChange, setFieldValue } =
    useFormik({
      initialValues,
      validationSchema: addUserSchema,
      onSubmit: (values, action) => {
        var formdata = new FormData();
        formdata.append("name", values.name);
        formdata.append("brand", values.brand);
        formdata.append("price", values.price);
        formdata.append("color", values.color);
        formdata.append("car_file", values.car_file);
        const update = {
          formdata,
          GetId
        }
        setadd(false);
        editCars(update);
        addsweetalert();
      },
      handleChange(e) {
        initialValues({
          ...initialValues,
          [e.target.name]: e.target.value,
        });

      }

    })
  const { isSuccess, isFetching } = result;





  useEffect(() => {
    AllCars({});
  }, []);
  useEffect(() => {
    if (isSuccess && !isFetching ) {
      console.log(result.data);
      setdata(result?.data.length > 0 ? result.data : []);
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
  function editsweetalert() {
    var formdata = new FormData();
    formdata.append("name", values.name);
    formdata.append("brand", values.brand);
    formdata.append("price", values.price);
    formdata.append("color", values.color);
    formdata.append("car_file", values.car_file);

    swal({
      title: "Are you sure?",
      text: "Your field is Edit",
      icon: "success",
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
          // window.location.reload();

        }
      });
  }
  function addsweetalert() {
    var formdata = new FormData();
    formdata.append("name", values.name);
    formdata.append("brand", values.brand);
    formdata.append("price", values.price);
    formdata.append("color", values.color);
    formdata.append("car_file", values.car_file);

    swal({
      title: "Are you sure?",
      text: "Your field is successfully added",
      icon: "success",
      buttons: true,
      dangerMode: true,
    })
      .then((willAdd) => {
        if (willAdd) {
          InsertNewCar(formdata);
        }
      });
  }
  const removeSelectedImage = () => {
    setSelectedImage();
  };




  return (

    <div className="p-10">

      <div className="flex justify-between mb-10">
        {
          add ? null :
            <button
              className="btn btn-primary"
              onClick={() => { setadd(true); values.name = ""; values.brand = ""; values.color = ""; values.price = ""; }}>
              Add New Car
            </button>
        }
        {
          add ? null :
            <div className="inline-flex">
              <button onClick={handlesubmit} className="btn border border-solid border-black">Login</button>
              <br />
              <button className="btn btn-primary">
                <Link to='/dashboard' className="block text-[#fff] no-underline">Dashboard</Link>
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
                <input type="text" placeholder="Enter name" name="name" value={values.name} onChange={handleChange} onBlur={handleBlur}
                />
                {errors.name && touched.name ? (
                  <p className="form-error">{errors.name}</p>
                ) : null}
              </td>
              <td>
                <input type="text" name="color" placeholder="Enter color" value={values.color} onChange={handleChange} onBlur={handleBlur}
                />
                {errors.color && touched.color ? (
                  <p className="form-error">{errors.color}</p>
                ) : null}
              </td>
              <td>
                <input type="text" placeholder="Enter brand" value={values.brand} name="brand" onChange={handleChange} onBlur={handleBlur}
                />
                {errors.brand && touched.brand ? (
                  <p className="form-error">{errors.brand}</p>
                ) : null}
              </td>
              <td>
                <input type="text" placeholder="Enter price" value={values.price} name="price" onChange={handleChange} onBlur={handleBlur}
                />
                {errors.price && touched.price ? (
                  <p className="form-error">{errors.price}</p>
                ) : null}
              </td>
              <td>
                <input
                  name="file"
                  type="file"
                  multiple
                  onChange={(event) => {
                    setFieldValue("car_file", event.currentTarget.files[0]);
                  }}
                />
              </td>
              <td>
                <div onClick={handleSubmit}>
                  <button className="btn btn-primary" onClick={Insert}>
                    Add new
                  </button>
                </div>
              </td>

            </tr>
          </div>
        ) : (
          <tbody>
            {getdata?.map((i, index) => {
              return (
                <tr>
                  <td key={index}>
                    {GetId === i._id ? (
                      <div>
                        <input name="name" type="text" placeholder="name" value={values.name} onChange={handleChange} onBlur={handleBlur} />
                        {errors.name && touched.name ? (
                          <p className="form-error">{errors.name}</p>
                        ) : null}
                      </div>
                    ) : (
                      <span>{i?.name}</span>
                    )}
                  </td>
                  <td>
                    {GetId === i._id ? (
                      <div>
                        <input name="color" type="text" placeholder="color" value={values.color} onChange={handleChange} onBlur={handleBlur}
                        />
                        {errors.color && touched.color ? (
                          <p className="form-error">{errors.color}</p>
                        ) : null}
                      </div>
                    ) : (
                      <span>{i?.color}</span>
                    )}
                  </td>
                  <td>
                    {GetId === i._id ? (
                      <div>
                        <input name="brand" type="text" placeholder="brand" value={values.brand} onChange={handleChange} onBlur={handleBlur}
                        />
                        {errors.brand && touched.brand ? (
                          <p className="form-error">{errors.brand}</p>
                        ) : null}
                      </div>
                    ) : (
                      <span>{i?.brand}</span>
                    )}
                  </td>

                  <td>
                    {GetId === i._id ? (
                      <div>
                        <input name="price" type="text" placeholder="price" value={values.price} onChange={handleChange} onBlur={handleBlur}
                        />
                        {errors.price && touched.price ? (
                          <p className="form-error">{errors.price}</p>
                        ) : null}
                      </div>
                    ) : (
                      <span>{i?.price}</span>
                    )}
                  </td>
                  <td>
                    {
                      GetId === i._id ? (

                        <>
                          <input name="file" type="file" onChange={(event) => {
                            setFieldValue("car_file", event.currentTarget.files[0]);
                            setSelectedImage(event.currentTarget.files[0])
                          }} />

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
                                <img src={`http://192.168.1.6:8001/file/${i.image}`} style={styles.image} alt="Thumb" height="150px" width="150px" />
                              </div>
                            ) : ("")}
                          </div>
                        </>
                      ) :
                        <div>
                          <img src={`http://192.168.1.6:8001/file/${i.image}`} alt="image" height="150px" width="150px" onClick={() => {
                            setOpenModel(true); setImgUrl(`${process.env.REACT_APP_PUBLIC_URL}/file/${i.image}`);
                            edit(i)
                          }} />
                        </div>
                    }
                  </td>
                  <td>
                    <button className="btn btn-danger" onClick={() => { del(i._id); }}>Delete</button>
                  </td>
                  <td>
                    {GetId === i._id ? (
                      <button className="btn btn-primary" onClick={() => { confirm(GetId); editCars(true) }}>Confirm</button>
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
              <input name="file" type="file" onChange={(event) => {
                setFieldValue("car_file", event.currentTarget.files[0]);
                setSelectedImage(event.currentTarget.files[0])
              }} />
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
