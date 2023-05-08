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
import Loader from "./Loader";
import "./all.min.css";
import ImageUploading from "./ImageUploading";
import Header from "./Dashboard/Header";
import Sidebar from "./Dashboard/Sidebar";
import Footer from "./Dashboard/Footer";

export default function AddUser() {
  const initialValues = {
    name: null,
    color: null,
    brand: null,
    price: null,
  };
  const [openModal, setOpenModal] = useState(false);
  const [getdata, setdata] = useState([]);
  const [add, setadd] = useState(false);
  const [GetId, setId] = useState();
  const [isImage, setImage] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [disabled, setDisabled] = useState(false);
  const [AllCars, result] = useLazyGetAllProductsQuery();
  const [DelCars, DelCar] = useDeleteProductMutation();
  const [editCars, EditCar] = useUpdateProductMutation();
  const [InsertNewCar, CarResult] = useAddProductMutation();
  const { isSuccess: isCarSuccess, isFetching: isCarFetching } = CarResult;
  const { isSuccess: isDelCarSuccess, isFetching: isDelCarFetching } = DelCar;
  const { isSuccess: isEditCarSuccess, isFetching: isEditCarFetching } =
    EditCar;
  const { isSuccess, isFetching } =
    result;
  const [isLoading, setIsLoader] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  // eslint-disable-next-line no-unused-vars

  function Insert() {
    var formdata = new FormData();
    formdata.append("name", values.name);
    formdata.append("brand", values.brand);
    formdata.append("price", values.price);
    formdata.append("color", values.color);
    for (let i = 0; i < values.car_file.length; i++) {
      console.log(values.car_file);
      formdata.append("car_file", values.car_file[i].image);
    }

    swal({
      text: "Your field is successfully added",
      icon: "success",
      buttons: true,
      dangerMode: true,
    }).then((willAdd) => {
      if (willAdd) {
        InsertNewCar(formdata);
        setIsLoader(true);
        setIsUpdating(true);
      }
    });
  }

  const edit = (data) => {
    setFieldValue("name", data.name);
    setFieldValue("color", data.color);
    setFieldValue("brand", data.brand);
    setFieldValue("price", data.price);
    let arrayImage = [];

    getDataBlob(`${process.env.REACT_APP_BASE_URL}file/${data.image}`);
    async function getDataBlob(url) {
      var res = await fetch(url);
      var blob = await res.blob();
      var base64img = await parseURI(blob);
      console.log(base64img);
    }
    async function parseURI(d) {
      var reader = new FileReader();
      reader.readAsDataURL(d);
      return new Promise((res, rej) => {
        reader.onload = (e) => {
          for (let i = 0; i < data.image.length; i++) {
            let pushImage = {
              image: e.target.result,
            };
            console.log(e.target.result);
            console.log(arrayImage);
            arrayImage.push(pushImage);
          }
        };
      });
    }
    console.log(isImage);
    setImage(arrayImage);
    setId(data._id);
  };
  const confirm = () => {
    var formdata = new FormData();

    for (let i = 0; i < values.car_file.length; i++) {
      formdata.append("car_file", values.car_file[i].image);
    }
    console.log(values.car_file, "confirm");
    formdata.append("name", values.name);
    formdata.append("brand", values.brand);
    formdata.append("price", values.price);
    formdata.append("color", values.color);

    const update = {
      formdata,
      GetId,
    };
    setIsUpdating(true);
    setIsLoader(true);

    swal({
      text: "Your Record Updated",
      icon: "success",
      buttons: true,
      dangerMode: true,
    }).then((willAdd) => {
      if (willAdd) {
        editCars(update);
        setIsLoader(true);
        setIsUpdating(true);
      }
    });

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
        setIsLoader(true);
        setIsUpdating(true);
      }
    });
  };

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
        setErrors({ name: "to short" });
        console.log("condition if");
      } else if (values.name.length > 25) {
        setErrors({ name: "to long" });
        console.log("condition if");
      } else {
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
  useEffect(() => {
    AllCars({});

  }, [])

  useEffect(() => {
    if (isSuccess && !isFetching) {
      setdata(result?.data.length > 0 ? result.data : []);
      setIsLoader(false);
    }
    if (isFetching) {
      setIsLoader(true)
    }
  }, [isSuccess, isFetching]);
  useEffect(() => {
    if (isCarSuccess && !isCarFetching) {
      AllCars({});
      setIsLoader(false);
      setIsUpdating(false);
    }
  }, [isCarSuccess, isCarFetching]);
  useEffect(() => {
    if (isEditCarSuccess && !isEditCarFetching) {
      AllCars({});
      setIsUpdating(false);
      setIsLoader(false);
    }
  }, [isEditCarSuccess, isEditCarFetching]);
  useEffect(() => {
    if (isDelCarSuccess && !isDelCarFetching) {
      AllCars({});
      setIsUpdating(false);
      setIsLoader(false);
    }
  }, [isDelCarSuccess, isDelCarFetching]);

  return (
    <div>

      {isLoading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <>
          <Header />
          <Sidebar />
          <div className="pt-[7.5rem]   xl:ml-[18.474rem] lg:ml-[8.600rem] md:ml-[8.600rem] sm:my-0 sm:px-2">
            <div className="dashboard-content px-[15px] pt-[15px] xl:px-[40px] xl:pt-[40px] lg:px-[40px] lg:pt-[40px] md:px-[20px] md:pt-[20px] ">
              <div>
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
                    <span className="flex items-center">
                      {isUpdating ? null : (
                        <i class="fa-solid fa-plus"></i>
                      )}
                      <span className="hidden xl:block lg:block">New</span>
                    </span>
                  </button>
                )}

                <table class="table  table-responsive">
                  {add ? null : (
                    <tr id="row" className="text-[10px] text-center xl:text-[16px] lg:text-[16px] md:text-[16px]">
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
                    <div className="border-transparent">
                      <div className="text-10px text-center xl:text-[16px] lg:text-[16px] md:text-[16px]">
                        <input
                          type="text"
                          placeholder={
                            errors.name && touched.name
                              ? "Please Enter car name"
                              : "Enter name"
                          }
                          name="name"
                          value={values.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="border-transparent"
                        />
                        {errors.name && touched.name ? (
                          <p>{errors.name}</p>
                        ) : (
                          ""
                        )}
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
                          className="border-transparent"
                        />


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
                          className="border-transparent"
                        />


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
                          className="border-transparent"
                        />


                        <div>
                          <button
                            className="btn btn-primary border-transparent"
                            onClick={() => {
                              setImage([...isImage, { image: "" }]);
                            }}
                          >
                            <span className="flex items-center">
                              {isUpdating ? null : (
                                <i class="fa-solid fa-plus mr-2"></i>
                              )}
                              <span className="hidden xl:block lg:block">Image</span>
                            </span>
                          </button>
                          <span>
                            {isImage.map((e, i) => (
                              <ImageUploading
                                onUploadImage={(e) => {
                                  let s = isImage;
                                  s[i] = {
                                    image: e.target.files[0],
                                  };
                                  setImage([...s]);
                                  setFieldValue("car_file", s);
                                  console.log(isImage);
                                }}
                                showImage={e}
                                removeSelectedImage={(id) => {
                                  let s = isImage;
                                  s[i] = { image: "" };
                                  // setFieldValue("car_file",s)
                                  setImage(s.filter((img, i) => i !== img));
                                  console.log(isImage);
                                }}
                              />
                            ))}
                          </span>
                          <span onClick={handleSubmit} className="border-transparent">
                            <button
                              className="btn btn-primary"
                              disabled={disabled}
                            >
                              <span className="flex items-center">
                                {isUpdating ? null : (
                                  <i class="fa-solid fa-plus mr-2"></i>
                                )}
                                <span className="hidden xl:block lg:block">New</span>
                              </span>
                            </button>
                          </span>
                        </div>


                      </div>
                    </div>
                  ) : (
                    <tbody>
                      {getdata?.map((i, index) => {
                        return (
                          <tr className="text-[10px] text-center xl:text-[16px] lg:text-[16px] md:text-[16px]">
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
                              {GetId === i._id ? (
                                <>
                                  <button
                                    className="btn btn-primary"
                                    onClick={() => {
                                      setImage([...isImage, { image: "" }]);
                                    }}
                                  >
                                    <i class="fa-solid fa-plus mr-2"></i><span className="hidden xl:block lg:block">Add
                                      Image</span>
                                  </button>
                                  {isImage.map((e, i) => (
                                    <ImageUploading
                                      onUploadImage={(e) => {
                                        let s = isImage;
                                        s[i] = {
                                          image: e.target.files[0],
                                        };
                                        setImage([...s]);
                                        setFieldValue("car_file", s);
                                        console.log(isImage);
                                      }}
                                      showImage={e}
                                      removeSelectedImage={(id) => {
                                        let s = isImage;
                                        s[i] = { image: "" };
                                        // setFieldValue("car_file",s)
                                        setImage(
                                          s.filter((img, i) => i !== img)
                                        );
                                        console.log(isImage);
                                      }}
                                    />
                                  ))}
                                </>
                              ) : (
                                <div>
                                  {i.image.map((j) => {
                                    return (
                                      <img
                                        src={`${process.env.REACT_APP_BASE_URL}file/${j}`}
                                        alt="image"
                                        height="150px"
                                        width="150px"
                                        className="img-fluid m-auto"
                                        onClick={() => {
                                          setOpenModal(true);

                                          edit(i);
                                        }}
                                      />
                                    );
                                  })}
                                </div>
                              )}
                            </td>
                            <td>
                              {GetId === i._id ? null : (
                                <button
                                  className="btn btn-danger"
                                  onClick={() => {
                                    Delete(i._id);
                                  }}
                                >
                                  <span className="flex items-center">
                                    {isUpdating ? (
                                      <i className="fa fa-spinner animate-spin mr-2"></i>
                                    ) : (
                                      // <i class="fa-solid fa-arrow-right-to-bracket mr-2"></i>

                                      <i class="fa-solid fa-trash"></i>
                                    )}
                                    <span className="hidden xl:block lg:block">
                                      DELETE
                                    </span>
                                  </span>

                                </button>
                              )}
                            </td>
                            <td>
                              {GetId === i._id ? (
                                <button
                                  className="btn btn-primary"
                                  onClick={() => {
                                    confirm(GetId);
                                    editCars(true);
                                  }}
                                >
                                  {isUpdating ? null : (
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
                                  <span className="flex items-center">
                                    {isUpdating ? (
                                      <i className="fa fa-spinner animate-spin mr-2"></i>
                                    ) :
                                      (
                                        <i class="fa-solid fa-pen-to-square"></i>
                                      )}
                                    <span className="hidden xl:block lg:block">
                                      UPDATE
                                    </span>
                                  </span>
                                </button>
                              )}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  )}
                </table>
              </div>
            </div>
          </div>
          <Footer />

        </>
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
              <button
                className="btn btn-primary"
                onClick={() => {
                  setImage([...isImage, { image: "" }]);
                }}
              >
                <i class="fa-solid fa-plus mr-2"></i>Add Image
              </button>
            </td>
          </tr>
          <tr>
            <td>
              {isImage.map((e, i) => (
                <ImageUploading
                  onUploadImage={(e) => {
                    let s = isImage;
                    s[i] = {
                      image: e.target.files[0],
                    };
                    setImage([...s]);
                    setFieldValue("car_file", s);
                    console.log(isImage);
                  }}
                  showImage={e}
                  removeSelectedImage={(id) => {
                    let s = isImage;
                    s[i] = { image: "" };
                    // setFieldValue("car_file",s)
                    setImage(s.filter((img, i) => i !== img));
                    console.log(isImage);
                  }}
                />
              ))}
            </td>
          </tr>
          <tr>
            <td>
              <button
                className="btn btn-primary"
                onClick={() => {
                  confirm(GetId);
                  setOpenModal(false);
                }}
              >
                Edit
              </button>
            </td>
          </tr>
        </div>
      </Modal>
    </div>
  );
}
