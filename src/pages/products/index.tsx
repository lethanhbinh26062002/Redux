import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/header";
import { getProducts, removeProduct } from "../../features/products/product.slice";

type Props = {};

const Product = (props: Props) => {
    const dispatch = useDispatch();
    const products = useSelector((state: any) => state.product.value);
    useEffect(() => {
        dispatch(getProducts());
    }, []);
    const removeItem = (id: any) => {
        let confim = confirm("Bạn có muốn xoá không ?");
        if (confim) {
            dispatch(removeProduct(id))
        }
    };
    return (
        <div>
            <Header />
            ListProduct
            <br />
            {products?.map((item: any) => {
                return (
                    <div key={item.id}>
                        <span> Name : {item.name} </span> &emsp;&emsp;
                        <span >Price : {item.price}</span> &emsp;&emsp;
                        <button onClick={() => {removeItem(item.id)}}> Remove </button>&emsp;
                        <Link href={`/products/edit/${item.id}`} >
                            <button> Edit </button>
                        </Link>
                        <br />
                    </div>
                )
            })}
        </div>
    )
};

export default Product;

