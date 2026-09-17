import { useEffect, useState } from "react";
import { getProducts } from "../service/productService";

function HomePage(){
    const [products, setProducts] = useState([]);

    useEffect(()=> {
        async function getData(){
            const data = await getProducts();
            setProducts(data);
        }
        getData();
    },[]);

    console.log(products);

    return(
      <div className="mx-4">
        <div className="flex flex-row justify-between">
            <h1 className="mt-4 font-bold text-2xl">Halaman Home</h1>
            <button className="bg-indigo-600 rounded-2xl text-md text-slate-300 font-mono p-3">Tambah</button>
        </div>
            <div className="overflow-x-auto mt-3">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Nama Produk</th>
                            <th>Kategori</th>
                            <th>Harga</th>
                            <th>Stok</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {products.map((data,index)=> (
                            <tr key={data.id}>
                                <th>{data.namaproduct}</th>
                                <td>{data.kategori}</td>
                                <td>{data.harga}</td>
                                <td>{data.stock}</td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
            </div>
      </div>  
    )
}

export default HomePage;