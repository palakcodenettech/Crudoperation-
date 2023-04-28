/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react-hooks/exhaustive-deps */
// eslint-disable-next-line react-hooks/exhaustive-deps

import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { useFormik } from "formik";
import swal from "sweetalert";
import {
  useLazyGetAllProductsQuery,
  useDeleteProductMutation,
  useUpdateProductMutation,
  useAddProductMutation,
} from "./services/api";
import { addUserSchema } from "./addUserSchema";
import { Link } from "react-router-dom";
import Loader from "./Loader";
import './all.min.css'
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
var singleFile = [];
var file = [];
export default function AddUser() {
  const initialValues = {
    name: null,
    color: null,
    brand: null,
    price: null,
  };
  const [openModal, setOpenModal] = useState(false);
  const [getdata, setdata] = useState([]);
  const [selectedImage, setSelectedImage] = useState([]);
  const [add, setadd] = useState(false);
  const [GetId, setId] = useState();
  const [isPreview, setPreview] = useState([]);
  const [isCount, setCount] = useState(0)
  const [disabled, setDisabled] = useState(false);
  const [isAddImage, setAddImage] = useState(false)
  const [AllCars, result] = useLazyGetAllProductsQuery();
  const [DelCars, DelCar] = useDeleteProductMutation();
  const [editCars, EditCar] = useUpdateProductMutation();
  const [InsertNewCar, CarResult] = useAddProductMutation();
  const { isSuccess: isCarSuccess, isFetching: isCarFetching } = CarResult;
  const { isSuccess: isDelCarSuccess, isFetching: isDelCarFetching } = DelCar;
  const { isSuccess: isEditCarSuccess, isFetching: isEditCarFetching } =
    EditCar;
  const [isLoading, setIsLoading] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [imagUrl, setImgUrl] = useState("");



  function Insert() {
    var formdata = new FormData();
    formdata.append("name", values.name);
    formdata.append("brand", values.brand);
    formdata.append("price", values.price);
    formdata.append("color", values.color);
    for (let i = 0; i < Object.keys(values.car_file).length; i++) {
      console.log(values.car_file);
      formdata.append("car_file", values.car_file[i]);
    }

    swal({
      text: "Your field is successfully added",
      icon: "success",
      buttons: true,
      dangerMode: true,
    }).then((willAdd) => {
      if (willAdd) {
        InsertNewCar(formdata)
        setIsLoading(true);
        setIsUpdating(true)
      }
    });
  }
  const edit = (data) => {
    setSelectedImage([]);
    console.log(data);
    setPreview(data.image)

    setFieldValue("name", data.name);
    setFieldValue("color", data.color);
    setFieldValue("brand", data.brand);
    setFieldValue("price", data.price);
    console.log(data);
    data.image.forEach((item) => {
      setFieldValue("car_file", `${process.env.REACT_APP_BASE_URL}file/${item}`);

    })

    setImgUrl(
      `${process.env.REACT_APP_BASE_URL}file/${data.image}`
    );

    setId(data._id);
  };
  const confirm = () => {
    var formdata = new FormData();

    for (let i = 0; i < Object.keys(values.car_file).length; i++) {
      formdata.append("car_file", values.car_file[i]);
    }
    console.log(formdata.data);
    console.log(values.car_file, "confirm");

    formdata.append("name", values.name);
    formdata.append("brand", values.brand);
    formdata.append("price", values.price);
    formdata.append("color", values.color);

    const update = {
      formdata,
      GetId,
    };
    setImgUrl(
      `${process.env.REACT_APP_BASE_URL}file/${values.image}`
    );
    setIsUpdating(true);
    setIsLoading(true);

    swal({
      text: "Your Record Updated",
      icon: "success",
      buttons: true,
      dangerMode: true,
    }).then((willAdd) => {
      if (willAdd) {
        editCars(update);
        setIsLoading(true);
        setIsUpdating(true)
      }
    })

    setId("");
    AllCars({});
  };
  const Delete = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        DelCars(id);
        setIsLoading(true);
        setIsUpdating(true)


      }
    });
  };



  function handlesubmit() {
    window.location.href = "/adduser";
  }
  const {
    values,
    errors,
    touched,
    setErrors,
    handleBlur,
    handleSubmit,
    handleChange,
    setFieldValue,
  } = useFormik({
    initialValues,
    validationSchema: addUserSchema,
    onSubmit: (values, action) => {
      console.log(values.name.length, "if");
      if (values.name.length <= 2) {
        setErrors({ name: "to short" })
        console.log("condition if");
      }
      else if (values.name.length > 25) {
        setErrors({ name: "to long" })
        console.log("condition if");
      }
      else {
        Insert();
        setadd(false);
      }

    },
    handleChange(e) {
      initialValues({
        ...initialValues,
        [e.target.name]: e.target.value,
      });
    },
  });
  const { isSuccess, isFetching } = result;

  useEffect(() => {
    AllCars({});
  }, []);
  useEffect(() => {
    if (isSuccess && !isFetching) {
      console.log(result.data);
      setdata(result?.data.length > 0 ? result.data : []);
    }
  }, [isSuccess, isFetching]);
  useEffect(() => {
    if (isCarSuccess && !isCarFetching) {
      AllCars({});
      setIsLoading(false);
      setIsUpdating(false)
    }
  }, [isCarSuccess, isCarFetching]);
  useEffect(() => {
    if (isEditCarSuccess && !isEditCarFetching) {
      AllCars({});
      setIsUpdating(false);
      setIsLoading(false);
    }
  }, [isEditCarSuccess, isEditCarFetching]);
  useEffect(() => {
    if (isDelCarSuccess && !isDelCarFetching) {
      AllCars({});
      setIsUpdating(false);
      setIsLoading(false);
    }
  }, [isDelCarSuccess, isDelCarFetching]);

  const removeSelectedImage = () => {
    setSelectedImage([]);
    file = []
    singleFile = []
  };

  return (
    <div className="p-10">
      {isLoading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <div>
          <div className="flex justify-between mb-10">
            {add ? null : (
              <div className="inline-flex">
                {/* <button
                  onClick={handlesubmit}
                  className="btn border border-solid border-black"
                >
                  <Link to="/" className="no-underline">
                    Login

                  </Link>
                </button> */}
                <br />
                <button className="btn btn-primary">
                  <Link to="/dashboard" className="block text-[#fff] no-underline">
                    Dashboard
                  </Link>
                </button>
              </div>
            )}
            {add ? null : (
              <button
                className="btn btn-primary"
                onClick={() => {
                  setadd(true);
                  values.name = "";
                  values.brand = "";
                  values.color = "";
                  values.price = "";
                }}
              >
                {isUpdating ? (
                  <i className="fa fa-spinner animate-spin mr-2"></i>
                ) : (
                  // <i class="fa-solid fa-arrow-right-to-bracket mr-2"></i>
                  null
                )}
                Add New Car
              </button>
            )}

          </div>
          <table class="table table-striped">
            {add ? null : (
              <tr id="row">
                <th>Name</th>
                <th>Color</th>
                <th>Brand</th>
                <th>Price</th>
                <th>Upload</th>
                <th>Delete</th>
                <th>Edit</th>
              </tr>
            )}
            {add ? (
              <div>
                <div>
                  <tr id="row">
                    <td>
                      <input
                        type="text"
                        placeholder={
                          errors.name && touched.name ? "Please Enter car name" : "Enter name"
                        }
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.name && touched.name ? <p>{errors.name}</p> : ""}
                    </td>
                    <td>
                      <input
                        type="text"
                        name="color"
                        placeholder={
                          errors.color && touched.color
                            ? errors.color
                            : "Enter color"
                        }
                        value={values.color}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        placeholder={
                          errors.brand && touched.brand
                            ? errors.brand
                            : "Enter Brand"
                        }
                        value={values.brand}
                        name="brand"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        placeholder={
                          errors.price && touched.price
                            ? errors.price
                            : "Enter Price"
                        }
                        value={values.price}
                        name="price"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </td>
                    <td>
                      <input
                        name="car_file"
                        type="file"
                        onChange={(e) => {
                          singleFile.push(e.target.files[0]);
                          setFieldValue("car_file", singleFile);
                          file.push(URL.createObjectURL(e.target.files[0]));
                        }}
                      />


                      <button className="btn btn-primary" onClick={() => { setAddImage(true); setCount(isCount + 1); console.log(isCount) }}><i class="fa-solid fa-plus mr-2"></i>Add Image</button>
                      {isAddImage
                        ? Array(isCount)
                          ?.fill("-")
                          ?.map(() => {
                            return (
                              <>
                                <input
                                  name="car_file"
                                  type="file"
                                  onChange={(e) => {
                                    console.log(singleFile);
                                    console.log(values);
                                    singleFile.push(e.target.files[0]);
                                    setFieldValue("car_file", singleFile);
                                    file.push(URL.createObjectURL(e.target.files[0]));
                                  }}
                                />
                              </>
                            );
                          })
                        : null}
                    </td>
                    <td>
                      <div onClick={handleSubmit}>
                        <button
                          className="btn btn-primary"
                          disabled={disabled}
                        >
                          {isUpdating ? (
                            null
                          ) : (
                            <i class="fa-solid fa-plus mr-2"></i>
                          )}
                          Add new
                        </button>
                      </div>
                    </td>
                  </tr>
                </div>
              </div>
            ) : (
              <tbody>
                {

                  getdata?.map((i, index) => {
                    return (
                      <tr>
                        <td key={index}>
                          {GetId === i._id ? (
                            <div>
                              <input
                                name="name"
                                type="text"
                                placeholder={
                                  errors.name && touched.name
                                    ? errors.color
                                    : "Enter name"
                                }
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                              />

                            </div>
                          ) : (
                            <span>{i?.name}</span>
                          )}
                        </td>
                        <td>
                          {GetId === i._id ? (
                            <div>
                              <input
                                name="color"
                                type="text"
                                placeholder={
                                  errors.color && touched.color
                                    ? errors.color
                                    : "Enter color"
                                }
                                value={values.color}
                                onChange={handleChange}
                                onBlur={handleBlur}
                              />
                            </div>
                          ) : (
                            <span>{i?.color}</span>
                          )}
                        </td>
                        <td>
                          {GetId === i._id ? (
                            <div>
                              <input
                                name="brand"
                                type="text"
                                placeholder={
                                  errors.brand && touched.brand
                                    ? errors.brand
                                    : "Enter brand"
                                }
                                value={values.brand}
                                onChange={handleChange}
                                onBlur={handleBlur}
                              />
                            </div>
                          ) : (
                            <span>{i?.brand}</span>
                          )}
                        </td>

                        <td>
                          {GetId === i._id ? (
                            <div>
                              <input
                                name="price"
                                type="text"
                                placeholder={
                                  errors.price && touched.price
                                    ? errors.price
                                    : "Enter price"
                                }
                                value={values.price}
                                onChange={handleChange}
                                onBlur={handleBlur}
                              />
                            </div>
                          ) : (
                            <span>{i?.price}</span>
                          )}
                        </td>
                        <td>
                          {GetId === i._id ?
                            (
                              <>
                                <input
                                  name="file"
                                  type="file"
                                  onChange={(event) => {
                                    singleFile.push(event.target.files[0])
                                    setFieldValue("car_file", singleFile);
                                    file.push(URL.createObjectURL(event.target.files[0]))
                                    setSelectedImage(event.currentTarget.files);
                                    console.log(event.currentTarget.files);
                                  }}
                                />
                                <button className="btn btn-primary" onClick={() => { setAddImage(true); setCount(isCount + 1); console.log(isCount) }}><i class="fa-solid fa-plus mr-2"></i>Add Image</button>
                                {isAddImage
                                  ? Array(isCount)
                                    ?.fill("-")
                                    ?.map(() => {
                                      return (
                                        <>
                                          <input
                                            name="car_file"
                                            type="file"
                                            onChange={(e) => {
                                              singleFile.push(e.target.files[0]);
                                              setFieldValue("car_file", singleFile);
                                              file.push(URL.createObjectURL(e.target.files[0]));
                                            }}
                                          />
                                        </>
                                      );
                                    })
                                  : null}
                                {file.length == 0 ? null : (
                                  <div style={styles.preview}>


                                    {
                                      file.map((j) => {
                                        return (
                                          <img
                                            src={j}
                                            style={styles.image}
                                            alt="Image"
                                            height="150px"
                                            width="150px"
                                          />
                                        )
                                      })
                                    }
                                    <button
                                      onClick={removeSelectedImage}
                                      style={styles.delete}
                                    >
                                      Remove This Image
                                    </button>

                                  </div>
                                )}
                                <div>
                                  {!selectedImage || selectedImage == "" ? (
                                    <div>
                                      <div style={styles.preview}>

                                        {
                                          i.image.map((j) => {
                                            return (
                                              <img
                                                src={`${process.env.REACT_APP_BASE_URL}file/${j}`}
                                                alt="image"
                                                height="150px"
                                                width="150px"
                                                style={styles.image}
                                              />
                                            )
                                          })
                                        }
                                      </div>

                                    </div>
                                  ) : (
                                    ""
                                  )}

                                </div>
                              </>
                            )
                            :
                            (

                              <div>
                                {
                                  i.image.map((j) => {
                                    return (
                                      <img
                                        src={`${process.env.REACT_APP_BASE_URL}file/${j}`}
                                        alt="image"
                                        height="150px"
                                        width="150px"
                                        onClick={() => {
                                          setOpenModal(true);

                                          edit(i);
                                        }}
                                      />
                                    )
                                  })
                                }
                              </div>
                            )
                          }
                        </td>
                        <td>

                          {GetId === i._id ? (
                            null
                          ) : (
                            <button
                              className="btn btn-danger"
                              onClick={() => {
                                Delete(i._id);
                              }}
                            >
                              {isUpdating ? (
                                <i className="fa fa-spinner animate-spin mr-2"></i>
                              ) : (
                                // <i class="fa-solid fa-arrow-right-to-bracket mr-2"></i>
                                <i class="fa-solid fa-trash"></i>
                              )}
                              Delete
                            </button>
                          )}

                        </td>
                        <td>
                          {GetId === i._id ? (
                            <button
                              className="btn btn-primary"
                              onClick={() => {
                                confirm(GetId);
                                editCars(true)
                              }}
                            >
                              {isUpdating ? (
                                // <i className="fa fa-spinner animate-spin mr-2"></i>
                                null
                              ) : (
                                <i class="fa-solid fa-arrow-right-to-bracket mr-2"></i>
                              )}
                              Confirm
                            </button>
                          ) : (
                            <button
                              onClick={() => {
                                edit(i);
                              }}
                              className="btn btn-primary"
                            >
                              {isUpdating ? (
                                <i className="fa fa-spinner animate-spin mr-2"></i>
                              ) : (
                                // <i class="fa-solid fa-arrow-right-to-bracket mr-2"></i>
                                null
                              )}
                              Update
                            </button>
                          )}
                        </td>
                      </tr>
                    );
                  })

                }
              </tbody>
            )}
          </table>
        </div>
      )}
      <Modal
        classNames={{
          modal: "customModal",
          closeIcon: "color",
        }}
        open={openModal}
        onClose={() => setOpenModal(false)}
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
              <input
                name="file"
                type="file"
                onChange={(event) => {
                  singleFile.push(event.target.files[0])
                  setFieldValue("car_file", singleFile);
                  file.push(URL.createObjectURL(event.target.files[0]))

                  // }
                  console.log(selectedImage);
                  setSelectedImage(file);
                  console.log(selectedImage);

                }}
              />

              {file.length == 0 ? (
                <div style={styles.preview}>
                  {
                    isPreview.map((image) => {
                      return (
                        <img
                          style={styles.image}
                          src={`${process.env.REACT_APP_BASE_URL}file/${image}`}
                          alt="thumb"
                          height="150px"
                          width="150px"
                        />
                      )
                    })}
                  <button className="btn btn-primary" onClick={() => { setAddImage(true); setCount(isCount + 1); console.log(isCount) }}><i class="fa-solid fa-plus mr-2"></i>Add Image</button>
                  {
                    isAddImage
                      ? Array(isCount)
                        ?.fill("-")
                        ?.map(() => {
                          return (
                            <>
                              <input
                                name="car_file"
                                type="file"
                                onChange={(e) => {
                                  singleFile.push(e.target.files[0]);
                                  setFieldValue("car_file", singleFile);
                                  file.push(URL.createObjectURL(e.target.files[0]));
                                }}
                              />
                            </>
                          );
                        })
                      : null}
                </div>
              ) : (
                <div style={styles.preview}>
                  {
                    file.map((image) => {
                      return (
                        <img
                          src={(image)}
                          style={styles.image}
                          alt="image"
                          height="150px"
                          width="150px"
                        />

                      )
                    })
                  }
                  <button onClick={removeSelectedImage} style={styles.delete}>
                    Remove This Image
                  </button>
                  <button className="btn btn-primary" onClick={() => { setAddImage(true); setCount(isCount + 1); console.log(isCount) }}><i class="fa-solid fa-plus mr-2"></i>Add Image</button>
                  {isAddImage
                    ? Array(isCount)
                      ?.fill("-")
                      ?.map(() => {
                        return (
                          <>
                            <input
                              name="car_file"
                              type="file"
                              onChange={(e) => {
                                singleFile.push(e.target.files[0]);
                                setFieldValue("car_file", singleFile);
                                file.push(URL.createObjectURL(e.target.files[0]));
                              }}
                            />
                          </>
                        );
                      })
                    : null}
                  <button
                    onClick={() => {
                      confirm(GetId);
                      setOpenModal(false);
                    }}
                  >
                    Edit
                  </button>
                </div>
              )}
            </td>
          </tr>
        </div>
      </Modal>
    </div>
  );
}
