import React, { useEffect, useState } from "react";
var singleFile = [];
var file = [];
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




const ImageUploading = (props) => {
    const [isAddImage, setAddImage] = useState(false);
    const [isCount, setCount] = useState(0);
    const [isPreview, setPreview] = useState([]);
    const removeSelectedImage = () => {
        // setSelectedImage([]);
        singleFile = [];
        file = [];
    };
    useEffect(() => {
        console.log("imageuploading");
    })
    return (
        <div>
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
                                        // props.setFieldValue("car_file", singleFile);
                                        file.push(URL.createObjectURL(e.target.files[0]));
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


                                    </div>
                                ) : (
                                    <div style={styles.preview}>
                                        {
                                            file.map((image) => {
                                                return (
                                                    <img src={(image)} style={styles.image} alt="image" height="150px" width="150px"/>

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
                                                                    // props.setFieldValue("car_file", singleFile);
                                                                    file.push(URL.createObjectURL(e.target.files[0]));
                                                                }}
                                                            />
                                                        </>
                                                    );
                                                })
                                            : null}

                                    </div>
                                )}
                            </>
                        );
                    })
                : null}
        </div>
    );
}
export default ImageUploading