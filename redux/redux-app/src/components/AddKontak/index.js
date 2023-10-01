import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addKontak, getListKontak } from "../../actions/kontakAction";

function AddKontakComponent() {
  const [nama, setName] = useState("");
  const [noHp, setNoHp] = useState("");

  const { addKontakResult } = useSelector((state) => state.KontakReducer);

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("1. masuk handle submit");
    dispatch(addKontak({ nama: nama, noHp: noHp }));
  };

  useEffect(() => {
    if (addKontakResult) {
      console.log("5. Masuk component di update");
      dispatch(getListKontak());
      setName("");
      setNoHp("");
    }
  }, [addKontakResult, dispatch]);
  return (
    <>
      <h4>Add Contact</h4>
      <form onSubmit={(event) => handleSubmit(event)}>
        <input
          type="text"
          name="nama"
          placeholder="nama . . ."
          onChange={(event) => setName(event.target.value)}
          value={nama}
        />
        <input
          type="text"
          name="noHp"
          placeholder="No HP . . ."
          onChange={(event) => setNoHp(event.target.value)}
          value={noHp}
        />

        <button type="submit">submit</button>
      </form>
    </>
  );
}

export default AddKontakComponent;
