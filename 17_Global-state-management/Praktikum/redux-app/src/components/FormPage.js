import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap stylesheet

const SimpleForm = () => {
  const { handleSubmit, control, reset, watch } = useForm();
  const [formData, setFormData] = useState(null);

  const onSubmit = (data) => {
    console.log(data);
    setFormData(data);
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="productName" className="form-label">
            Nama Produk:
          </label>
          <Controller
            name="productName"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input type="text" className="form-control" {...field} />
            )}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Kategori:
          </label>
          <Controller
            name="category"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input type="text" className="form-control" {...field} />
            )}
          />
        </div>

        {/* ... (Tambahkan input untuk field lainnya) ... */}

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => reset()}
        >
          Reset
        </button>
      </form>

      {/* Tabel untuk menampilkan data */}
      {formData && (
        <table className="table mt-5">
          <thead>
            <tr>
              <th>Nama Produk</th>
              <th>Kategori</th>
              <th>Harga</th>
              <th>Gambar</th>
              <th>Kesegaran</th>
              <th>Deskripsi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{formData.productName}</td>
              <td>{formData.category}</td>
              {/* ... (Tambahkan cell untuk field lainnya) ... */}
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default SimpleForm;
