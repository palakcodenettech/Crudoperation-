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
export default function ImageUploading({

    onUploadImage,
    showImage,
    removeSelectedImage
}) {
    return (

        <>
            <input
                name="car_file"
                type="file"
                onChange={onUploadImage}

            />
            {
                showImage.image === "" ? null : (
                    <>
                        {/* <img

                            style={styles.image}
                            src={URL.createObjectURL(showImage.image)}
                            alt="thumb"
                            height="150px"
                            width="150px"

                        /> */}
                        <img

                            style={styles.image}
                            src={(showImage.image)}
                            // src={`${process.env.REACT_APP_BASE_URL}file/${showImage.image}`}
                            alt="thumb"
                            height="150px"
                            width="150px"

                        />
                        <button
                            onClick={removeSelectedImage}
                            style={styles.delete}
                        >
                            Remove This Image
                        </button>
                    </>
                )
            }
        </>
    )
}