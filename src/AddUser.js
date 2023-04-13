import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
export default function AddUser() {
  const [getdata, setdata] = useState([]);
  const [getName, setName] = useState('');
  const [getColor, setColor] = useState('');
  const [getBrand, setBrand] = useState('');
  const [getPrice, setPrice] = useState('');
  const [isEdit, setEdit] = useState(false);
  const [add, setadd] = useState(false)
  const [GetId, setId] = useState();

  function handleSubmit() {
    window.location.href = "/adduser";
  }
  function Alldata() {
    axios.get('http://192.168.1.17:3001/cars/getdata', {
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBhbGFrQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoicGFsYWsxMjMiLCJpYXQiOjE2ODExODg1OTV9.u93i3pRaN8l5A_vAO0pES4y4hWYGxyyBptTNJPVhu-Q'
      }
    })
      .then(function (res) {
        console.log(res.data);
        setdata(res.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  useEffect(() => {
    Alldata();
  }, []);
  const Delete = (id) => {
    axios.delete(`http://192.168.1.17:3001/cars/deletedata/${id}`, {
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBhbGFrQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoicGFsYWsxMjMiLCJpYXQiOjE2ODExODg1OTV9.u93i3pRaN8l5A_vAO0pES4y4hWYGxyyBptTNJPVhu-Q'
      }
    })
      .then(function (response) {
        console.log(response);
        // window.location.reload(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  const Edit = (response) => {
    setId(response._id)
    getdata.map(() => {

      if (response._id === GetId) {
        console.log("matched");
      }
    })
    console.log(response._id);

    setName(response.name);
    setColor(response.color);
    setBrand(response.brand);
    setPrice(response.price);
    setEdit(true);
  }
  const Confirm = (id) => {
    axios.put(`http://192.168.1.17:3001/cars/update/${id}`, {
      name: getName,
      brand: getBrand,
      color: getColor,
      price: getPrice
    }, {
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBhbGFrQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoicGFsYWsxMjMiLCJpYXQiOjE2ODExODg1OTV9.u93i3pRaN8l5A_vAO0pES4y4hWYGxyyBptTNJPVhu-Q'
      }
    })

      .then(function (response) {
        Alldata();
        console.log(id);

        window.location.reload();
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  const Insert = () => {
    axios.post('http://192.168.1.17:3001/cars/insert', {
      name: getName,
      brand: getBrand,
      price: getPrice,
      color: getColor
    }, {
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBhbGFrQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoicGFsYWsxMjMiLCJpYXQiOjE2ODExODg1OTV9.u93i3pRaN8l5A_vAO0pES4y4hWYGxyyBptTNJPVhu-Q'
      }
    })
      .then(function (res) {
        console.log(res.data);
        setadd(false)

        Alldata();
        // setdata(res.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  function display() {
    // document.getElementById('row').style.display = 'block'
    setadd(true)

  }


  return (
    <div>
      <span></span> <br /> <button className="btn btn-primary text-center m-auto" onClick={() => {
        display()
        setadd(true)
      }}>Add User</button>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Color</th>
            <th scope="col">Brand</th>
            <th scope="col">Price</th>
          </tr>

        </thead>


        <tbody>
        <tr className="hidden" id="row">
            <td>
              <input type="text" placeholder="name" value={getName} onChange={(e) => { setName(e.target.value) }} />
            </td>
            <td>
              <input type="text" placeholder="color" value={getColor} onChange={(e) => { setColor(e.target.value) }} />
            </td>
            <td>
              <input type="text" placeholder="brand" value={getBrand} onChange={(e) => { setBrand(e.target.value) }} />
            </td>
            <td>
              <input type="text" placeholder="price" value={getPrice} onChange={(e) => { setPrice(e.target.value) }} />
            </td>
            <td>
              <button className="btn btn-primary" onClick={Insert}>Add new</button>
            </td>
          </tr>
        {
          getdata.map((i, index) => {
            return (

                <tr>
                  <td key={index}>
                    {
                      GetId === i._id ? <input type="text" placeholder="name" value={getName} onChange={(e) => { setName(e.target.value) }} /> : <span>{i.name}</span>
                    }

                  </td>
                  <td>
                    {
                      GetId === i._id ? <input type="text" placeholder="color" value={getColor} onChange={(e) => { setColor(e.target.value) }} /> : <span>{i.color}</span>
                    }
                  </td>
                  <td>
                    {
                      GetId === i._id ? <input type="text" placeholder="brand" value={getBrand} onChange={(e) => { setBrand(e.target.value) }} /> : <span>{i.brand}</span>
                    }
                  </td>
                  <td>
                    {
                      GetId === i._id ? <input type="text" placeholder="price" value={getPrice} onChange={(e) => { setPrice(e.target.value) }} /> : <span>{i.price}</span>
                    }
                  </td>
                  <td>
                    <button className="btn btn-danger" onClick={() => { Delete(i._id) }}>Delete</button>
                  </td>
                  <td>
                    {GetId === i._id ? (
                      <button className="btn btn-primary" onClick={() => Confirm(GetId)}>Confirm</button>
                    ) : (
                      <button onClick={() => { Edit(i) }} className="btn btn-primary">Update</button>
                    )}
                  </td>
                </tr>
            )
          })
        }
</tbody>
      </table>
      <button onClick={handleSubmit}>Login</button>
      <br />
      <a href="/Dashboard">Dashboard</a>
    </div>
  );
}
