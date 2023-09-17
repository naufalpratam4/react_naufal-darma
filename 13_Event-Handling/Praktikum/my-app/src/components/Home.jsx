import { v4 as uuidv4 } from "uuid";
import { Component } from "react";
import TableData from "./TableData";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { id: uuidv4(), nama: "Naufal", umur: 20, jenisKelamin: "Laki-laki" },
        { id: uuidv4(), nama: "Darma", umur: 20, jenisKelamin: "Laki-laki" },
        { id: uuidv4(), nama: "Yuda", umur: 20, jenisKelamin: "Laki-laki" },
        { id: uuidv4(), nama: "Hana", umur: 21, jenisKelamin: "Perempuan" },
      ],
    };
  }

  hapusPengunjung = (id) => {
    const newListPengunjung = this.state.data.filter((item) => item.id !== id);

    this.setState({ data: newListPengunjung });
  };

  tambahPengunjung = (newUser) => {
    const newPengunjung = { id: uuidv4(), ...newUser };
    this.setState({ data: [...this.state.data, newPengunjung] });
  };
  render() {
    return (
      <>
        <TableData data={this.state.data} />
      </>
    );
  }
}

export default Home;
